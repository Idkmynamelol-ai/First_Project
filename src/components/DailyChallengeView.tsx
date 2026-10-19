import React, { useEffect, useState } from 'react';
import {
  DailyChallengeResponse,
  DailySubject,
  SanitizedDailyProblem,
  VerifyDailyResponse,
  getCurrentDateICT,
  getDailyProblemsForDate,
  verifyDailySubmission,
} from '../../backend/services/dailyEngine';
import { MathText } from './MathRenderer';

interface DailyChallengeViewProps {
  selectedSubject: DailySubject;
  onSelectSubject: (s: DailySubject) => void;
  streak: number;
  onStreakUpdate: (nextStreak: number, isCorrect: boolean) => void;
}

const SUBJECT_TABS: { id: DailySubject; label: string }[] = [
  { id: 'math', label: 'Toán 12' },
  { id: 'physics', label: 'Vật Lí 12' },
  { id: 'chemistry', label: 'Hóa Học 12' },
  { id: 'english', label: 'Tiếng Anh 12' },
];

function shiftDateString(dateStr: string, deltaDays: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + deltaDays));
  const ny = dt.getUTCFullYear();
  const nm = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const nd = String(dt.getUTCDate()).padStart(2, '0');
  return `${ny}-${nm}-${nd}`;
}

export const DailyChallengeView: React.FC<DailyChallengeViewProps> = ({
  selectedSubject,
  onSelectSubject,
  streak,
  onStreakUpdate,
}) => {
  const todayICT = getCurrentDateICT();
  const [date, setDate] = useState<string>(todayICT);
  const [dailyData, setDailyData] = useState<DailyChallengeResponse>(() =>
    getDailyProblemsForDate(todayICT)
  );
  const [mcChoice, setMcChoice] = useState<string>('');
  const [tfChoices, setTfChoices] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);
  const [shortInput, setShortInput] = useState<string>('');
  const [verifyResult, setVerifyResult] = useState<VerifyDailyResponse | null>(
    null
  );
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchDaily() {
      try {
        const res = await fetch(`/api/daily?date=${encodeURIComponent(date)}`);
        if (res.ok) {
          const json = (await res.json()) as DailyChallengeResponse;
          if (!cancelled && json?.problems) {
            setDailyData(json);
            return;
          }
        }
      } catch {
        /* fallback to deterministic local engine below */
      }
      if (!cancelled) {
        setDailyData(getDailyProblemsForDate(date));
      }
    }
    fetchDaily();
    return () => {
      cancelled = true;
    };
  }, [date]);

  const problem: SanitizedDailyProblem =
    dailyData.problems[selectedSubject] ?? dailyData.problemList[0];

  useEffect(() => {
    setMcChoice('');
    setTfChoices([true, true, true, true]);
    setShortInput('');
    setVerifyResult(null);
  }, [date, selectedSubject, problem?.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem || submitting) return;

    let userSelection: string | boolean[] | number = '';
    if (problem.type === 'multiple_choice') {
      if (!mcChoice) return;
      userSelection = mcChoice;
    } else if (problem.type === 'true_false_four_part') {
      userSelection = tfChoices;
    } else {
      if (!shortInput.trim()) return;
      userSelection = shortInput.trim();
    }

    setSubmitting(true);
    let result: VerifyDailyResponse | null = null;
    try {
      const res = await fetch('/api/daily/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date,
          subject: selectedSubject,
          problemId: problem.id,
          userSelection,
          currentStreak: streak,
        }),
      });
      if (res.ok) {
        result = (await res.json()) as VerifyDailyResponse;
      }
    } catch {
      /* fallback below */
    }

    if (!result) {
      result = verifyDailySubmission({
        date,
        subject: selectedSubject,
        problemId: problem.id,
        userSelection,
        currentStreak: streak,
      });
    }

    setVerifyResult(result);
    onStreakUpdate(result.nextStreak, result.isCorrect);
    setSubmitting(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar: Date Selector & Deterministic PRNG Info */}
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-medium">
              Đề luyện tập hôm nay
            </span>
            <span className="text-xs font-mono text-zinc-500">
              Đổi đề mới lúc 00:00 mỗi ngày
            </span>
          </div>
          <p className="text-sm text-zinc-300">
            4 câu hỏi chọn lọc cho cả 4 môn trong ngày{' '}
            <code className="text-zinc-200 font-mono bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
              {date}
            </code>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setDate((d) => shiftDateString(d, -1))}
            aria-label="Xem đề ngày hôm trước"
            className="h-9 px-3 rounded-lg border border-zinc-800 bg-zinc-900/70 text-xs font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 cursor-pointer transition-colors"
          >
            ← Hôm trước
          </button>

          <label className="relative inline-flex items-center">
            <span className="sr-only">Chọn ngày xem đề hàng ngày</span>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                if (e.target.value) setDate(e.target.value);
              }}
              className="h-9 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-100 focus:outline-none focus:border-zinc-600"
            />
          </label>

          <button
            type="button"
            onClick={() => setDate((d) => shiftDateString(d, 1))}
            aria-label="Xem đề ngày kế tiếp"
            className="h-9 px-3 rounded-lg border border-zinc-800 bg-zinc-900/70 text-xs font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 cursor-pointer transition-colors"
          >
            Hôm sau →
          </button>

          {date !== todayICT && (
            <button
              type="button"
              onClick={() => setDate(todayICT)}
              className="h-9 px-3 rounded-lg border border-sky-500/40 bg-sky-500/10 text-xs font-medium text-sky-300 hover:bg-sky-500/20 cursor-pointer transition-colors"
            >
              Hôm nay ({todayICT})
            </button>
          )}
        </div>
      </div>

      {/* Subject Switcher */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        role="tablist"
        aria-label="Chọn môn học cho thử thách hàng ngày"
      >
        {SUBJECT_TABS.map((tab) => {
          const active = selectedSubject === tab.id;
          const p = dailyData.problems[tab.id];
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelectSubject(tab.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                active
                  ? 'bg-zinc-850 border-sky-500/60 text-zinc-100 shadow-[0_2px_8px_rgba(56,189,248,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:bg-zinc-850/60 hover:text-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-semibold text-zinc-100">
                  {tab.label}
                </span>
                <span className="text-[11px] font-mono text-amber-400">
                  {p?.difficultyTag}
                </span>
              </div>
              <p className="text-xs text-zinc-500 truncate mt-1">
                {p?.topicTag}
              </p>
            </button>
          );
        })}
      </div>

      {/* Study Problem Card */}
      <article className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-800/80 pb-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {problem.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {b}
                </span>
              ))}
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-300">
                {problem.topicTag}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-100">
              {problem.title}
            </h2>
          </div>

          {verifyResult && (
            <button
              type="button"
              onClick={() => setVerifyResult(null)}
              className="text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 px-2.5 py-1 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <span>Làm lại</span>
            </button>
          )}
        </div>

        {/* Problem Statement */}
        <div className="text-[15px] text-zinc-200 leading-7 bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-5">
          <MathText content={problem.statementMarkdown} />
        </div>

        {/* Interactive Answer Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {problem.type === 'multiple_choice' && problem.options && (
            <div
              role="radiogroup"
              aria-label="Chọn đáp án trắc nghiệm 4 phương án"
              className="space-y-2.5"
            >
              {problem.options.map((opt) => {
                const active = mcChoice === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setMcChoice(opt.id)}
                    className={`w-full min-h-[52px] flex items-center gap-3.5 px-4 py-3.5 rounded-xl border transition-colors cursor-pointer text-left ${
                      active
                        ? 'border-sky-500/60 bg-sky-950/20 text-zinc-100'
                        : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/60 hover:border-zinc-700 text-zinc-200'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-semibold flex items-center justify-center shrink-0 tracking-tight ${
                        active
                          ? 'bg-sky-600 border border-sky-500 text-white'
                          : 'bg-zinc-800 border border-zinc-700 text-zinc-300'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="text-[15px] leading-7 overflow-x-auto">
                      <MathText content={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {problem.type === 'true_false_four_part' && problem.subQuestions && (
            <div className="space-y-2.5">
              <p className="text-xs font-medium text-zinc-400">
                Chọn Đúng hoặc Sai cho từng mệnh đề a, b, c, d:
              </p>
              {problem.subQuestions.map((sq, idx) => (
                <div
                  key={sq.id}
                  className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="text-[15px] text-zinc-200 leading-7">
                    <strong className="text-zinc-100 font-mono mr-2">
                      {sq.id})
                    </strong>
                    <MathText content={sq.statement} />
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setTfChoices((prev) =>
                          prev.map((v, i) => (i === idx ? true : v))
                        )
                      }
                      className={`h-9 px-3.5 rounded-lg font-mono text-xs font-medium border cursor-pointer transition-colors ${
                        tfChoices[idx]
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/60'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                      }`}
                    >
                      Đúng
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setTfChoices((prev) =>
                          prev.map((v, i) => (i === idx ? false : v))
                        )
                      }
                      className={`h-9 px-3.5 rounded-lg font-mono text-xs font-medium border cursor-pointer transition-colors ${
                        !tfChoices[idx]
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/60'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                      }`}
                    >
                      Sai
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {problem.type === 'short_answer' && (
            <div className="space-y-2">
              <label
                htmlFor="daily-short-answer"
                className="block text-xs font-medium text-zinc-400"
              >
                Nhập kết quả số (Trả lời ngắn chuẩn cấu trúc đề thi mới):
              </label>
              <input
                id="daily-short-answer"
                type="text"
                inputMode="decimal"
                value={shortInput}
                onChange={(e) => setShortInput(e.target.value)}
                placeholder="Ví dụ: 4 hoặc 21,6"
                className="w-full sm:max-w-xs h-11 px-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-base font-mono text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-600"
              />
            </div>
          )}

          <div className="pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm px-6 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              Nộp bài &amp; Kiểm tra đáp án
            </button>
          </div>
        </form>

        {/* Verification Output & Unlocked Step-by-Step Derivation */}
        {verifyResult && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
            <div
              className={
                verifyResult.isCorrect
                  ? 'bg-emerald-950/40 border-b border-emerald-500/20 px-4 py-2.5 text-sm font-medium text-emerald-300 flex flex-wrap items-center justify-between gap-2'
                  : 'bg-rose-950/40 border-b border-rose-500/20 px-4 py-2.5 text-sm font-medium text-rose-300 flex flex-wrap items-center justify-between gap-2'
              }
            >
              <div className="flex items-center gap-2">
                <span>
                  [{verifyResult.isCorrect ? 'ĐÚNG' : 'CHƯA ĐÚNG'}]{' '}
                  {verifyResult.isCorrect
                    ? 'Chính xác! Đã mở khóa lời giải chi tiết.'
                    : 'Chưa chính xác — Xem phân tích chi tiết bên dưới.'}
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-950/60 border border-zinc-800 text-zinc-200">
                Đáp án chuẩn:{' '}
                {Array.isArray(verifyResult.correctAnswer)
                  ? verifyResult.correctAnswer
                      .map((v, i) => `${String.fromCharCode(97 + i)}:${v ? 'Đ' : 'S'}`)
                      .join(', ')
                  : String(verifyResult.correctAnswer)}
              </span>
            </div>

            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Lời giải &amp; Chứng minh từng bước:
                </p>
                <div className="text-[15px] text-zinc-200 leading-7 bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-4 whitespace-pre-line">
                  <MathText content={verifyResult.derivationMarkdown} />
                </div>
              </div>

              <div className="rounded-lg border border-amber-500/25 bg-amber-500/[0.06] p-3.5 text-sm text-amber-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Lưu ý bẫy thường gặp
                </p>
                <div>
                  <MathText content={verifyResult.commonTrapWarning} />
                </div>
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
