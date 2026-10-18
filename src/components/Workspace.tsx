import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  Bot,
  FileText,
  MessageSquare,
  Send,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
} from 'lucide-react';
import { SUBJECTS_META, PRACTICE_QUESTIONS, FORMULA_VAULT } from '../data/curriculum';
import { CopyableFormulaBlock, MathRenderer, RichTextWithMath } from './MathRenderer';
import { SubjectDiagram } from './InteractiveDiagrams';
import { Tag, subjectColor } from './Tag';
import { WorkedExampleSection, TopicChatBox } from './TopicChatBox';

interface WorkspaceProps {
  questionId: string;
  apiKey: string;
  onBack: () => void;
  onVerdict: (id: string, correct: boolean) => void;
}

type Kind = 'sys' | 'ac' | 'wa' | 'diag' | 'user' | 'ai';
interface Line {
  id: number;
  kind: Kind;
  text: string;
  streaming: boolean;
}

const KIND_STYLE: Record<Kind, { prefix: string; color: string }> = {
  sys: { prefix: '$', color: '#38BDF8' },
  ac: { prefix: '[ĐÚNG]', color: '#10B981' },
  wa: { prefix: '[SAI]', color: '#F43F5E' },
  diag: { prefix: '>', color: '#38BDF8' },
  user: { prefix: 'bạn@gia-su:~$', color: '#38BDF8' },
  ai: { prefix: 'gia-sư>', color: '#38BDF8' },
};

export const Workspace: React.FC<WorkspaceProps> = ({
  questionId,
  apiKey,
  onBack,
  onVerdict,
}) => {
  const q =
    PRACTICE_QUESTIONS.find((p) => p.id === questionId) ?? PRACTICE_QUESTIONS[0];
  const meta = SUBJECTS_META[q.subject];
  const color = subjectColor(q.subject);
  const topicRules =
    q.sourceTopic?.keyFormulasAndRules.map((r, i) => ({
      id: `${q.id}-r-${i}`,
      title: r.name,
      latex: r.latexOrRule,
      variablesNote: r.description,
    })) ??
    FORMULA_VAULT.filter((f) => f.subject === q.subject).slice(0, 2);

  const [tab, setTab] = useState<'problem' | 'tutor'>('problem');
  const [selected, setSelected] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<'AC' | 'WA' | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [reinf, setReinf] = useState(false);
  const [reinfPick, setReinfPick] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);

  const idRef = useRef(0);
  const timers = useRef<number[]>([]);
  const endRef = useRef<HTMLDivElement | null>(null);

  const stream = (kind: Kind, text: string) =>
    new Promise<void>((resolve) => {
      const id = ++idRef.current;
      setLines((l) => [...l, { id, kind, text: '', streaming: true }]);
      let i = 0;
      const t = window.setInterval(() => {
        i = Math.min(text.length, i + 4);
        setLines((l) =>
          l.map((x) =>
            x.id === id
              ? { ...x, text: text.slice(0, i), streaming: i < text.length }
              : x
          )
        );
        if (i >= text.length) {
          window.clearInterval(t);
          resolve();
        }
      }, 14);
      timers.current.push(t);
    });

  const reset = () => {
    timers.current.forEach((t) => window.clearInterval(t));
    timers.current = [];
    setSelected(null);
    setVerdict(null);
    setReinf(false);
    setReinfPick(null);
    setBusy(false);
    setLines([
      {
        id: ++idRef.current,
        kind: 'sys',
        text: `Phiên học **GDPT 2018 • Lớp ${q.grade} (${q.cognitiveLevel})** đã sẵn sàng. Hãy chọn phương án trả lời rồi nhấn **Nộp bài** để mở khóa đáp án chuẩn và lời giải chi tiết.`,
        streaming: false,
      },
    ]);
  };

  useEffect(() => {
    reset();
    setTab('problem');
    return () => timers.current.forEach((t) => window.clearInterval(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [lines]);

  const submit = async () => {
    if (!selected || busy) return;
    setTab('tutor');
    setBusy(true);
    const ok = selected === q.correctOptionId;
    const letter = String.fromCharCode(
      65 + q.options.findIndex((o) => o.id === selected)
    );
    const correctIndex = q.options.findIndex((o) => o.id === q.correctOptionId);
    const correctLetter = String.fromCharCode(65 + Math.max(0, correctIndex));
    const correctOptionObj = q.options[Math.max(0, correctIndex)];

    setVerdict(ok ? 'AC' : 'WA');
    onVerdict(q.id, ok);
    await stream('sys', `cham-bai --nop-dap-an ${letter} --muc-do "${q.cognitiveLevel}"`);
    if (ok) {
      await stream(
        'ac',
        `Chính xác! Đáp án đúng là **${correctLetter} (${correctOptionObj?.text ?? ''})**. **Lời giải chi tiết:**`
      );
      for (const step of q.stepByStepSolution) {
        await stream('diag', step);
      }
    } else {
      const d = q.options.find((o) => o.id === selected)?.diagnostic;
      await stream(
        'wa',
        `Đáp án ${letter} chưa chính xác${d ? ` — **${d.errorLabel}**` : ''}. Đáp án đúng là **${correctLetter} (${correctOptionObj?.text ?? ''})**.`
      );
      if (d) {
        await stream('diag', `**Câu hỏi gợi mở Socratic:** ${d.socraticPrompt}`);
        await stream('diag', `**Phân tích nguyên nhân:** ${d.whyWrong}`);
        await stream('diag', `**Cách khắc phục:** ${d.correctiveHint}`);
      }
      if (q.stepByStepSolution.length > 0) {
        await stream('diag', `**Lời giải chi tiết sau thử thách:** ${q.stepByStepSolution.join('\n')}`);
      }
    }
    setBusy(false);
  };

  const ask = async () => {
    const text = input.trim();
    if (!text || busy) return;
    setInput('');
    setBusy(true);
    await stream('user', text);
    let reply = '';
    if (apiKey.startsWith('AIza') && apiKey !== 'AIzaSyDemoHighSchoolStemKey2026') {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
            apiKey
          )}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: {
                parts: [
                  {
                    text: `Bạn là Gia sư Socratic tiếng Việt ngắn gọn, súc tích cho học sinh Lớp ${q.grade} môn ${meta.vnName} (Chương trình GDPT 2018, chuyên đề: ${q.topic}). Hãy đặt câu hỏi gợi mở để học sinh tự suy luận, không đưa ngay đáp án cuối cùng. Dùng $...$ cho công thức cùng dòng và $$...$$ cho công thức riêng dòng.`,
                  },
                ],
              },
              contents: [
                {
                  role: 'user',
                  parts: [{ text: `Đề bài: ${q.prompt}\nHọc sinh hỏi: ${text}` }],
                },
              ],
            }),
          }
        );
        if (res.ok) {
          const data = await res.json();
          reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
        }
      } catch {
        /* fall back below */
      }
    }
    if (!reply) {
      const d = q.options.find((o) => o.diagnostic)?.diagnostic;
      reply = `**Gợi ý Socratic (${q.topic}):** ${
        d ? d.socraticPrompt : 'Hãy đối chiếu với công thức trọng tâm bên dưới.'
      }\n$$${q.keyFormulaLatex}$$`;
    }
    await stream('ai', reply);
    setBusy(false);
  };

  const rc = q.reinforcement;
  const correctIdx = Math.max(
    0,
    q.options.findIndex((o) => o.id === q.correctOptionId)
  );
  const correctLetter = String.fromCharCode(65 + correctIdx);
  const correctOptionText = q.options[correctIdx]?.text ?? '';

  /* ---------------- CỘT TRÁI ---------------- */
  const left = (
    <section
      aria-label="Đề bài và cơ sở tri thức GDPT 2018"
      className={`${
        tab === 'problem' ? 'block' : 'hidden'
      } lg:block lg:w-[48%] overflow-y-auto p-3.5 sm:p-5 lg:p-6 space-y-4 lg:border-r border-slate-800`}
    >
      <div className="flex flex-wrap gap-1.5">
        <Tag>GDPT 2018</Tag>
        <Tag>Lớp {q.grade}</Tag>
        <Tag color={color}>{meta.vnName}</Tag>
        {q.chapter && <Tag>{q.chapter}</Tag>}
        <Tag>{q.cognitiveLevel}</Tag>
      </div>

      <h1 className="text-lg font-bold text-white leading-snug">{q.topic}</h1>
      {/* Study Card: Problem Statement uses Grey-White border & Sans-Serif for readability */}
      <div className="text-sm sm:text-base text-white leading-7 border border-[#D4D4D8]/70 bg-[#0A0A0A] p-4 font-sans">
        <RichTextWithMath text={q.prompt} />
      </div>

      {q.contextFormula && (
        <div className="overflow-x-auto py-2.5 bg-sky-950/30 p-4 border border-sky-400/70 font-mono text-sm text-center text-white">
          <MathRenderer latex={q.contextFormula} displayMode={true} />
        </div>
      )}

      {/* Trực quan hóa đa dạng (3 chế độ chuẩn SGK) */}
      <SubjectDiagram subject={q.subject} />

      {/* Mục tiêu cần đạt của chuyên đề (Study Card: Grey-White border) */}
      {q.sourceTopic && (
        <div className="space-y-1.5 border border-[#D4D4D8]/70 bg-[#0A0A0A] p-3.5 sm:p-4">
          <h2 className="font-mono text-xs uppercase tracking-wider text-sky-300 font-bold">
            Yêu cầu cần đạt (GDPT 2018 • Lớp {q.grade})
          </h2>
          <ul className="space-y-1.5 text-sm text-neutral-100 font-sans leading-relaxed">
            {q.sourceTopic.learningObjectives.map((obj, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Công thức & Quy tắc trọng tâm */}
      <div className="space-y-2">
        <h2 className="font-mono text-xs uppercase tracking-wider text-sky-300 font-bold">
          Công thức &amp; Quy tắc trọng tâm
        </h2>
        {topicRules.map((f) => (
          <div key={f.id} className="space-y-1.5">
            <CopyableFormulaBlock
              title={f.title}
              latex={f.latex}
              accentHex={color}
              compact
            />
            <p className="text-xs sm:text-sm font-sans text-sky-100 bg-sky-950/30 border-l-2 border-sky-400 px-3 py-1.5 leading-relaxed">
              {f.variablesNote}
            </p>
          </div>
        ))}
      </div>

      {/* Ví dụ minh họa toàn diện & Khung chat hỏi đáp chuyên đề */}
      {q.sourceTopic && (
        <div className="space-y-4">
          <WorkedExampleSection topic={q.sourceTopic} />
          <TopicChatBox topic={q.sourceTopic} />
        </div>
      )}
    </section>
  );

  /* ---------------- CỘT PHẢI ---------------- */
  const right = (
    <section
      aria-label="Khu vực chọn đáp án và Gia sư Socratic"
      className={`${
        tab === 'tutor' ? 'flex' : 'hidden'
      } lg:flex lg:w-[52%] flex-col min-h-0 flex-1`}
    >
      <div className="p-3.5 sm:p-5 lg:p-6 space-y-3 border-b border-slate-800 lg:max-h-[54%] overflow-y-auto shrink-0">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-sky-300 font-bold">
            Chọn phương án trả lời ({q.cognitiveLevel})
          </h2>
          <button
            type="button"
            onClick={reset}
            className="h-9 px-3 border border-slate-800 bg-[#0A0A0A] text-xs font-mono text-neutral-300 hover:border-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            làm lại
          </button>
        </div>

        <div role="radiogroup" aria-label="Các phương án trả lời" className="space-y-2">
          {q.options.map((o, i) => {
            const on = selected === o.id;
            const isRight = verdict && o.id === q.correctOptionId;
            const isWrong = verdict === 'WA' && on;
            const border = isRight
              ? '#10B981'
              : isWrong
              ? '#F43F5E'
              : on
              ? '#38BDF8'
              : '#262626';
            return (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={on}
                disabled={busy}
                onClick={() => {
                  setSelected(o.id);
                  setVerdict(null);
                }}
                className={`w-full min-h-12 px-3 py-2 border text-left flex items-center gap-3 cursor-pointer transition-colors hover:bg-sky-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  on ? 'bg-sky-950/40' : 'bg-[#0A0A0A]'
                }`}
                style={{ borderColor: border }}
              >
                <span
                  className="w-7 h-7 border font-mono text-xs font-bold flex items-center justify-center shrink-0"
                  style={{
                    borderColor: border,
                    color: on || isRight ? '#38BDF8' : '#E5E5E5',
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="min-w-0 overflow-x-auto text-sm sm:text-[15px] text-white font-sans">
                  {o.latex ? <MathRenderer latex={o.latex} /> : <RichTextWithMath text={o.text} />}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={submit}
          disabled={!selected || busy}
          className="hidden lg:inline-flex h-11 px-5 bg-sky-400 text-black! border border-sky-300 hover:bg-sky-300 disabled:bg-slate-800 disabled:text-[#A3A3A3]! disabled:border-slate-700 disabled:cursor-not-allowed text-sm font-bold items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <Play className="w-4 h-4" aria-hidden="true" />
          Nộp bài &amp; xem đáp án chi tiết
        </button>

        {/* Mở khóa Đáp án & Lời giải chi tiết sau khi học sinh giải xong */}
        {verdict && (
          <div className="border border-[#D4D4D8]/70 bg-[#0A0A0A] p-3.5 sm:p-4 space-y-2.5 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-2">
              <span
                className={`font-mono text-xs font-bold inline-flex items-center gap-1.5 ${
                  verdict === 'AC' ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {verdict === 'AC' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                ) : (
                  <XCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                )}
                <span>
                  {verdict === 'AC'
                    ? 'Chính xác! Đã mở khóa lời giải chuẩn.'
                    : 'Chưa chính xác — Đối chiếu đáp án & lời giải bên dưới.'}
                </span>
              </span>
              <span className="text-xs font-mono font-bold text-sky-300 bg-sky-950/70 border border-sky-400/50 px-2 py-0.5">
                Đáp án đúng: {correctLetter}
              </span>
            </div>
            <div className="text-sm text-sky-100 bg-sky-950/30 border-l-4 border-sky-400 p-3 space-y-1.5 font-sans leading-7">
              <p className="font-mono text-xs font-bold text-sky-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Phương án {correctLetter}: {correctOptionText}</span>
              </p>
              {q.stepByStepSolution.map((step, sIdx) => (
                <div key={sIdx} className="leading-7">
                  <RichTextWithMath text={step} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bảng điều khiển Gia sư Socratic */}
      <div className="relative flex-1 min-h-[300px] lg:min-h-0 flex flex-col bg-[#0A0A0A]">
        <div className="flex items-center justify-between px-4 h-10 border-b border-slate-800 bg-sky-950/20 shrink-0">
          <span className="font-mono text-xs font-bold text-sky-300">
            gia-su-socratic — phân tích &amp; lời giải chi tiết
          </span>
          {verdict && (
            <span
              className="font-mono text-xs font-bold"
              style={{ color: verdict === 'AC' ? '#10B981' : '#F43F5E' }}
            >
              {verdict === 'AC' ? 'Chính xác (AC)' : 'Chưa đúng (WA)'}
            </span>
          )}
        </div>

        <div
          role="log"
          aria-live="polite"
          aria-label="Kết quả phân tích của Gia sư Socratic"
          className="flex-1 overflow-y-auto p-4 pr-16 sm:pr-20 space-y-3 font-mono text-xs sm:text-sm leading-relaxed"
        >
          {lines.map((l) => {
            const s = KIND_STYLE[l.kind];
            return (
              <div key={l.id} className="break-words">
                <span style={{ color: s.color }} className="mr-2 font-bold select-none">
                  {s.prefix}
                </span>
                {l.streaming ? (
                  <span className="text-[#F5F5F5] whitespace-pre-wrap">
                    {l.text}
                    <span className="inline-block w-2 h-4 bg-sky-400 align-middle ml-0.5 animate-pulse" />
                  </span>
                ) : (
                  <RichTextWithMath
                    text={l.text}
                    className="text-[#F5F5F5] whitespace-pre-wrap"
                  />
                )}
              </div>
            );
          })}

          {verdict && !busy && (
            <div className="pt-1">
              {!reinf ? (
                <button
                  type="button"
                  onClick={() => setReinf(true)}
                  className="h-11 px-4 border border-slate-700 bg-sky-950/40 text-xs font-bold text-sky-300 hover:bg-sky-400 hover:text-black cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  $ kiem-tra-cung-co-kien-thuc --reinforcement
                </button>
              ) : (
                <div className="border border-slate-800 bg-[#111111] p-3.5 space-y-2.5">
                  <div className="text-xs font-bold text-sky-300">
                    cau-hoi-cung-co.drill
                  </div>
                  <p className="text-white">{rc.prompt}</p>
                  {rc.latexFormula && (
                    <div className="overflow-x-auto py-2">
                      <MathRenderer latex={rc.latexFormula} displayMode={true} />
                    </div>
                  )}
                  {rc.options.map((o) => {
                    const picked = reinfPick === o.id;
                    const right = o.id === rc.correctOptionId;
                    const c = reinfPick
                      ? right
                        ? '#10B981'
                        : picked
                        ? '#F43F5E'
                        : '#262626'
                      : '#262626';
                    return (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setReinfPick(o.id)}
                        className="w-full min-h-11 px-3 py-2 border bg-[#0A0A0A] text-left text-xs sm:text-sm text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        style={{ borderColor: c }}
                      >
                        {o.latex ? <MathRenderer latex={o.latex} /> : o.text}
                      </button>
                    );
                  })}
                  {reinfPick && (
                    <p className="text-xs text-sky-200 bg-sky-950/40 border-l-4 border-sky-400 p-2.5">
                      {rc.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div
          className="absolute top-12 right-3 w-11 h-11 md:w-14 md:h-14 border border-slate-700 bg-[#111111] flex items-center justify-center"
          aria-hidden="true"
        >
          <Bot className="w-5 h-5 md:w-7 md:h-7 text-sky-400" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask();
          }}
          className="flex items-center gap-2 p-3 border-t border-slate-800 shrink-0"
        >
          <label htmlFor="tutor-input" className="sr-only">
            Đặt câu hỏi cho gia sư
          </label>
          <span
            className="font-mono text-sm font-bold text-sky-400 select-none"
            aria-hidden="true"
          >
            $
          </span>
          <input
            id="tutor-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập câu hỏi hoặc bước giải để nhận gợi ý..."
            autoComplete="off"
            className="flex-1 min-w-0 h-11 px-3 bg-[#111111] border border-slate-700 text-sm sm:text-base font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || busy}
            aria-label="Gửi câu hỏi cho gia sư"
            className="h-11 w-11 border border-sky-300 bg-sky-400 text-black flex items-center justify-center shrink-0 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:border-slate-800 cursor-pointer disabled:cursor-not-allowed hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col lg:h-[calc(100dvh-7rem)] lg:min-h-0 -mx-4 sm:-mx-6 lg:mx-0 lg:border border-slate-800 bg-[#111111] overflow-hidden">
      <div className="flex items-center gap-2 px-4 h-12 border-b border-slate-800 bg-[#0A0A0A] shrink-0">
        <button
          type="button"
          onClick={onBack}
          aria-label="Quay lại danh sách câu hỏi"
          className="h-9 px-2.5 border border-slate-800 flex items-center gap-1.5 text-xs font-mono text-neutral-200 hover:border-sky-400 hover:text-sky-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Danh sách</span>
        </button>
        <span className="font-mono text-xs font-bold text-sky-300 truncate">
          gdpt-2018-lop-{q.grade} / {q.id}
        </span>
      </div>

      <div
        className="lg:hidden grid grid-cols-2 border-b border-slate-800 shrink-0"
        role="tablist"
      >
        {(
          [
            ['problem', 'Đề bài & Lý thuyết', FileText],
            ['tutor', 'Gia sư AI / Chẩn đoán', MessageSquare],
          ] as const
        ).map(([id, label, Icon]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`h-12 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold border-b-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400 ${
              tab === id
                ? 'text-sky-300 border-sky-400 bg-sky-950/30'
                : 'text-neutral-300 border-transparent'
            }`}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row flex-1 min-h-0">
        {left}
        {right}
      </div>

      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 pb-safe bg-[#0A0A0A]/95 backdrop-blur border-t border-slate-800">
        {tab === 'problem' ? (
          <button
            type="button"
            onClick={() => setTab('tutor')}
            className="h-12 w-full bg-sky-400 text-black! border border-sky-300 hover:bg-sky-300 text-sm font-bold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Chọn đáp án &amp; mở Gia sư AI
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!selected || busy}
            className="h-12 w-full bg-sky-400 text-black! border border-sky-300 hover:bg-sky-300 disabled:bg-slate-800 disabled:text-[#A3A3A3]! text-sm font-bold cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {selected ? 'Nộp bài & xem đáp án chi tiết' : 'Hãy chọn một đáp án'}
          </button>
        )}
      </div>
    </div>
  );
};
