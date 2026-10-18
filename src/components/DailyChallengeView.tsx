import React, { useEffect, useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Play,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  DailyChallengeResponse,
  DailySubject,
  SanitizedDailyProblem,
  VerifyDailyResponse,
  getCurrentDateICT,
  getDailyProblemsForDate,
  verifyDailySubmission,
} from '../../backend/services/dailyEngine';
import { RichTextWithMath } from './MathRenderer';

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
    <div className="space-y-4">
      {/* Top Bar: Date Selector & Deterministic PRNG Info */}
      <div className="border border-neutral-800 bg-[#111111] p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/15 border border-sky-400/50 px-2 py-0.5">
              DAILY ENGINE • PRNG DETERMINISTIC
            </span>
            <span className="text-xs font-mono text-neutral-400">
              Múi giờ: {dailyData.timezone} (Tự động đổi đề lúc 00:00:00)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300">
            Mỗi ngày hệ thống tự động sinh bộ 4 bài toán Lớp 12 từ hạt giống ngày{' '}
            <code className="text-sky-300 font-mono">{date}:{selectedSubject}</code>{' '}
            (Seed: <code className="text-sky-300 font-mono">{problem.seedHex}</code>).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setDate((d) => shiftDateString(d, -1))}
            aria-label="Xem đề ngày hôm trước"
            className="h-10 px-2.5 border border-neutral-800 bg-[#0A0A0A] text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-600 inline-flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Hôm trước</span>
          </button>

          <label className="relative inline-flex items-center">
            <span className="sr-only">Chọn ngày xem đề hàng ngày</span>
            <Calendar
              className="w-3.5 h-3.5 text-sky-400 absolute left-2.5 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => {
                if (e.target.value) setDate(e.target.value);
              }}
              className="h-10 pl-8 pr-2.5 bg-[#0A0A0A] border border-neutral-700 text-xs font-mono text-white focus:outline-none focus:border-sky-400"
            />
          </label>

          <button
            type="button"
            onClick={() => setDate((d) => shiftDateString(d, 1))}
            aria-label="Xem đề ngày kế tiếp"
            className="h-10 px-2.5 border border-neutral-800 bg-[#0A0A0A] text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-600 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Hôm sau</span>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {date !== todayICT && (
            <button
              type="button"
              onClick={() => setDate(todayICT)}
              className="h-10 px-3 border border-sky-400/60 bg-sky-950/40 text-xs font-mono font-bold text-sky-300 hover:bg-sky-900/50 cursor-pointer"
            >
              Hôm nay ({todayICT})
            </button>
          )}
        </div>
      </div>

      {/* Subject Switcher (4 Subjects, No ALL category) */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-2"
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
              className={`min-h-[48px] p-2.5 border text-left transition-colors cursor-pointer ${
                active
                  ? 'bg-sky-950/40 border-sky-400 text-white'
                  : 'bg-[#111111] border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-xs font-bold">{tab.label}</span>
                <span className="text-[10px] font-mono text-sky-300">
                  {p?.difficultyTag}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate mt-0.5">
                {p?.topicTag}
              </p>
            </button>
          );
        })}
      </div>

      {/* Study Problem Card (Uses Grey-White Border for Study Card) */}
      <article className="border border-[#D4D4D8]/70 bg-[#111111] p-4 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-neutral-800 pb-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {problem.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-xs font-mono font-bold bg-[#0A0A0A] border border-neutral-700 text-sky-300"
                >
                  {b}
                </span>
              ))}
              <span className="px-2 py-0.5 text-xs font-mono bg-[#0A0A0A] border border-neutral-800 text-neutral-300">
                [{problem.topicTag}]
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {problem.title}
            </h2>
          </div>

          <span className="text-[11px] font-mono text-neutral-400 border border-neutral-800 bg-[#0A0A0A] px-2.5 py-1 shrink-0">
            Token: {problem.submissionToken.slice(0, 22)}…
          </span>
        </div>

        {/* Problem Statement */}
        <div className="text-sm sm:text-base text-white leading-7 bg-[#0A0A0A] border border-[#D4D4D8]/60 p-4 font-sans">
          <RichTextWithMath text={problem.statementMarkdown} />
        </div>

        {/* Interactive Answer Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {problem.type === 'multiple_choice' && problem.options && (
            <div
              role="radiogroup"
              aria-label="Chọn đáp án trắc nghiệm 4 phương án"
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
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
                    className={`min-h-[48px] p-3 border text-left flex items-center gap-3 cursor-pointer transition-colors ${
                      active
                        ? 'border-sky-400 bg-sky-950/40 text-white'
                        : 'border-neutral-800 bg-[#0A0A0A] text-neutral-200 hover:border-neutral-600'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 font-mono text-xs font-bold flex items-center justify-center border shrink-0 ${
                        active
                          ? 'border-sky-400 bg-sky-400 text-black'
                          : 'border-neutral-700 text-neutral-400'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="text-sm sm:text-[15px] font-sans overflow-x-auto">
                      <RichTextWithMath text={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {problem.type === 'true_false_four_part' && problem.subQuestions && (
            <div className="space-y-2.5">
              <p className="text-xs font-mono text-sky-300 font-bold">
                Chọn Đúng (Đ) hoặc Sai (S) cho từng mệnh đề a, b, c, d:
              </p>
              {problem.subQuestions.map((sq, idx) => (
                <div
                  key={sq.id}
                  className="p-3.5 border border-neutral-800 bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="text-sm text-neutral-100 leading-7 font-sans">
                    <strong className="text-sky-300 font-mono mr-1.5">
                      {sq.id})
                    </strong>
                    <RichTextWithMath text={sq.statement} />
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        setTfChoices((prev) =>
                          prev.map((v, i) => (i === idx ? true : v))
                        )
                      }
                      className={`h-9 px-3 font-mono text-xs font-bold border cursor-pointer ${
                        tfChoices[idx]
                          ? 'bg-sky-400 text-black border-sky-300'
                          : 'bg-[#111111] text-neutral-400 border-neutral-800'
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
                      className={`h-9 px-3 font-mono text-xs font-bold border cursor-pointer ${
                        !tfChoices[idx]
                          ? 'bg-sky-400 text-black border-sky-300'
                          : 'bg-[#111111] text-neutral-400 border-neutral-800'
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
            <div className="space-y-1.5">
              <label
                htmlFor="daily-short-answer"
                className="block text-xs font-mono text-sky-300 font-bold"
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
                className="w-full sm:max-w-xs h-12 px-3.5 bg-[#0A0A0A] border border-neutral-700 text-base font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-400"
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="h-12 px-5 bg-white text-black hover:bg-neutral-200 font-mono text-xs sm:text-sm font-bold inline-flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4" aria-hidden="true" />
              <span>Nộp bài &amp; Kiểm tra đáp án (/api/daily/verify)</span>
            </button>

            {verifyResult && (
              <button
                type="button"
                onClick={() => setVerifyResult(null)}
                className="h-12 px-4 border border-neutral-800 bg-[#0A0A0A] text-xs font-mono text-neutral-300 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Làm lại</span>
              </button>
            )}
          </div>
        </form>

        {/* Verification Output & Unlocked Step-by-Step Derivation */}
        {verifyResult && (
          <div className="border border-[#D4D4D8]/70 bg-[#0A0A0A] p-4 sm:p-5 space-y-4 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                {verifyResult.isCorrect ? (
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-400 shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <XCircle
                    className="w-5 h-5 text-rose-400 shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`font-mono text-sm font-bold ${
                    verifyResult.isCorrect
                      ? 'text-emerald-400'
                      : 'text-rose-400'
                  }`}
                >
                  [{verifyResult.verdict}]{' '}
                  {verifyResult.isCorrect
                    ? 'Chính xác! Đã mở khóa lời giải chi tiết.'
                    : 'Chưa chính xác — Xem phân tích chi tiết bên dưới.'}
                </span>
              </div>
              <span className="text-xs font-mono text-sky-300 bg-sky-500/15 border border-sky-400/50 px-2.5 py-0.5">
                Đáp án chuẩn:{' '}
                {Array.isArray(verifyResult.correctAnswer)
                  ? verifyResult.correctAnswer
                      .map((v, i) => `${String.fromCharCode(97 + i)}:${v ? 'Đ' : 'S'}`)
                      .join(', ')
                  : String(verifyResult.correctAnswer)}
              </span>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>Lời giải &amp; Chứng minh từng bước (Step-by-step Derivation):</span>
              </p>
              <div className="text-sm sm:text-[15px] text-sky-100 leading-7 bg-sky-950/30 border border-sky-500/50 border-l-4 border-l-sky-400 p-3.5 sm:p-4 whitespace-pre-line font-sans">
                <RichTextWithMath text={verifyResult.derivationMarkdown} />
              </div>
            </div>

            <div className="border border-neutral-800 bg-[#111111] p-3 text-xs sm:text-sm font-sans text-amber-300 flex items-start gap-2">
              <AlertTriangle
                className="w-4 h-4 text-amber-400 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{verifyResult.commonTrapWarning}</span>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};
