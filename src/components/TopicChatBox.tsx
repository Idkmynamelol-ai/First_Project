import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Clock,
  BookOpen,
} from 'lucide-react';
import { CurriculumTopic } from '../../backend/data/curriculum/grade12';
import { compileTopicWikiArticle } from '../data/curriculum';
import { CopyableFormulaBlock, MathText } from './MathRenderer';

interface WorkedExampleSectionProps {
  topic: CurriculumTopic;
  defaultOpen?: boolean;
}

/**
 * Sleek Wiki Callout + Collapsible Worked Example Accordion
 */
export const WorkedExampleSection: React.FC<WorkedExampleSectionProps> = ({
  topic,
  defaultOpen = true,
}) => {
  const ex = topic.workedExample;
  if (!ex) return null;

  return (
    <details
      open={defaultOpen}
      className="group bg-zinc-900/60 border-l-2 border-l-sky-500 border border-zinc-800/80 rounded-r-lg my-4 overflow-hidden"
    >
      <summary className="px-4 py-3.5 cursor-pointer list-none flex items-center justify-between gap-3 select-none hover:bg-zinc-900/90 transition-colors">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-medium shrink-0">
            Ví dụ mẫu
          </span>
          <span className="text-sm font-semibold text-zinc-100 truncate">
            Bài giải mẫu và hướng dẫn từng bước
          </span>
        </div>
        <ChevronDown
          className="w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-150 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>

      <div className="p-4 pt-2 border-t border-zinc-800/60 space-y-4 text-[15px] leading-7 text-zinc-300">
        {/* 1. Đề bài minh họa */}
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            1. Đề bài minh họa
          </p>
          <div className="p-3.5 rounded-lg bg-zinc-950/70 border border-zinc-800/80 text-zinc-200">
            <MathText content={ex.problemStatement} />
          </div>
        </div>

        {/* 2. Định hướng tư duy & Lập luận logic */}
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            2. Hướng tư duy và suy luận
          </p>
          <div className="p-3.5 rounded-lg bg-sky-500/[0.06] border border-sky-500/20 text-zinc-200">
            <MathText content={ex.logicReasoning} />
          </div>
        </div>

        {/* 3. Các bước giải chi tiết */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            3. Các bước giải chi tiết
          </p>
          <ol className="space-y-2.5">
            {ex.steps.map((step, idx) => (
              <li
                key={idx}
                className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-md bg-zinc-800/90 border border-zinc-700/60 font-mono text-xs font-medium text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1 text-zinc-200">
                  <MathText content={step} />
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* 4. Kết luận */}
        <div className="p-3.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/30 flex items-start gap-2.5">
          <CheckCircle2
            className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
            aria-hidden="true"
          />
          <div className="text-sm sm:text-[15px] text-emerald-200 font-medium leading-7">
            <MathText content={ex.finalConclusion} />
          </div>
        </div>
      </div>
    </details>
  );
};

interface CompiledWikiArticleViewProps {
  topic: CurriculumTopic;
  collapsibleSections?: boolean;
}

/**
 * Compiled "Modern Wikipedia / Notion" Long-Form Lesson Article
 * - Breadcrumb + Editorial Title + Estimated Reading Time + Inline Mini TOC
 * - Max reading width `max-w-[65ch]` for optimal eye tracking
 * - Structured H2 & H3 sections + Integrated Callout Blocks + Collapsible Worked Example
 */
export const CompiledWikiArticleView: React.FC<CompiledWikiArticleViewProps> = ({
  topic,
  collapsibleSections = false,
}) => {
  const wiki = compileTopicWikiArticle(topic);
  const primaryFormula = topic.keyFormulasAndRules[0];

  return (
    <div className="max-w-[65ch] space-y-6 text-[15px] leading-7 text-zinc-300">
      {/* Article Header */}
      <header className="space-y-3 border-b border-zinc-800/80 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
          <span className="font-medium text-zinc-400">{wiki.breadcrumb}</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
            <span>~{wiki.estimatedReadingMinutes} phút đọc</span>
          </span>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 leading-snug">
          {wiki.title}
        </h1>

        {/* Inline Mini Table of Contents */}
        <nav
          aria-label="Mục lục bài viết"
          className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-3.5 space-y-2"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
            <span>Mục lục bài viết</span>
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-400">
            {wiki.toc.map((item) => (
              <li key={item.id} className="truncate">
                <a
                  href={`#${topic.id}-${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(`${topic.id}-${item.id}`)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:text-zinc-100 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      {/* Wiki Prose Sections */}
      <div className="space-y-6">
        {wiki.sections.map((sec, idx) => {
          const sectionBody = (
            <div className="space-y-3">
              {sec.subheadings.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-200 mt-4 mb-2">
                    {sub.title}
                  </h3>
                  <ul className="space-y-2 text-[15px] leading-7 text-zinc-300 list-disc pl-5 marker:text-zinc-500">
                    {sub.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        <MathText content={b} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {sec.callout && (
                <CopyableFormulaBlock
                  title={sec.callout.title}
                  latex={sec.callout.latex}
                  description={sec.callout.description}
                />
              )}

              {/* Attach the Collapsible Worked Example inside Section 4 (Conservation & Fast Solving) */}
              {idx === wiki.sections.length - 1 && (
                <div className="bg-zinc-900/60 border-l-2 border-l-sky-500 border border-zinc-800/80 rounded-r-lg p-4 my-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                      Định luật then chốt &amp; Phương pháp giải
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      GDPT 2018
                    </span>
                  </div>
                  {primaryFormula && (
                    <CopyableFormulaBlock
                      title={primaryFormula.name}
                      latex={primaryFormula.latexOrRule}
                      description={primaryFormula.description}
                      compact
                    />
                  )}
                  <WorkedExampleSection topic={topic} defaultOpen={!collapsibleSections} />
                </div>
              )}
            </div>
          );

          if (collapsibleSections) {
            return (
              <details
                key={sec.id}
                id={`${topic.id}-${sec.id}`}
                open={idx === 0 || idx === wiki.sections.length - 1}
                className="group border border-zinc-800/80 rounded-xl bg-zinc-900/30 px-4 py-3"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-2 text-base font-semibold text-zinc-100 select-none">
                  <span>{sec.heading}</span>
                  <ChevronDown
                    className="w-4 h-4 text-zinc-400 shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="pt-3 mt-2 border-t border-zinc-800/60">
                  {sectionBody}
                </div>
              </details>
            );
          }

          return (
            <section key={sec.id} id={`${topic.id}-${sec.id}`}>
              <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-800/80 pb-2 mt-6 mb-3">
                {sec.heading}
              </h2>
              {sectionBody}
            </section>
          );
        })}
      </div>
    </div>
  );
};

interface ChatMsg {
  id: number;
  role: 'user' | 'assistant';
  text: string;
}

interface TopicChatBoxProps {
  topic: CurriculumTopic;
  questionContext?: {
    prompt: string;
    selectedOptionText?: string;
    correctOptionText?: string;
    stepByStepSolution?: string[];
  };
  onInteraction?: () => void;
}

/**
 * Unified Context-Aware Socratic Assistant Thread
 * - Replaces dual redundant chat panels with a single sleek thread + pill chips + minimal input bar
 */
export const TopicChatBox: React.FC<TopicChatBoxProps> = ({
  topic,
  questionContext,
  onInteraction,
}) => {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);

  const quickQuestions = [
    'Giải thích rõ bước lập luận logic',
    topic.subject === 'chemistry'
      ? 'Khi nào áp dụng tỉ lệ 1:2 của ester phenol?'
      : `Khi nào áp dụng công thức "${topic.keyFormulasAndRules[0]?.name ?? 'trọng tâm'}"?`,
    'Tạo 1 bài tương tự để tự luyện',
  ];

  const buildLocalReply = (userQuestion: string): string => {
    const qLower = userQuestion.toLowerCase();
    const firstRule = topic.keyFormulasAndRules[0];
    const secondRule = topic.keyFormulasAndRules[1];

    if (
      qLower.includes('lập luận') ||
      qLower.includes('tư duy') ||
      qLower.includes('ví dụ') ||
      qLower.includes('tại sao') ||
      qLower.includes('vì sao')
    ) {
      return (
        `**Phân tích lập luận logic (${topic.topicName}):**\n` +
        `• **Cốt lõi tư duy:** ${topic.workedExample.logicReasoning}\n` +
        `• **Bước mấu chốt đầu tiên:** ${topic.workedExample.steps[0]}\n` +
        `• **Kết luận:** ${topic.workedExample.finalConclusion}`
      );
    }

    if (
      qLower.includes('tương tự') ||
      qLower.includes('bài tập') ||
      qLower.includes('luyện') ||
      qLower.includes('tạo')
    ) {
      const sample =
        topic.sampleQuestionTemplates[1] ?? topic.sampleQuestionTemplates[0];
      return (
        `**Bài tập vận dụng tương tự (${sample.cognitiveLevel}):**\n` +
        `${sample.questionText}\n` +
        `• **Hướng dẫn giải:** ${sample.detailedDerivation}\n` +
        `• **Đáp án chuẩn:** $${sample.correctAnswer}$`
      );
    }

    return (
      `**Gợi mở Socratic cho chuyên đề "${topic.topicName}":**\n` +
      (firstRule
        ? `• **Công thức trọng tâm (${firstRule.name}):** $${firstRule.latexOrRule}$ — ${firstRule.description}\n`
        : '') +
      (secondRule
        ? `• **Quy tắc bổ trợ (${secondRule.name}):** $${secondRule.latexOrRule}$ — ${secondRule.description}\n`
        : '') +
      `• **Lưu ý tránh bẫy:** ${topic.commonPitfalls[0]?.correction ?? topic.workedExample.logicReasoning}`
    );
  };

  const sendQuestion = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || busy) return;
    onInteraction?.();
    setInput('');
    setBusy(true);

    const userMsg: ChatMsg = {
      id: Date.now(),
      role: 'user',
      text,
    };
    setMessages((prev) => [...prev, userMsg]);

    let reply = '';
    const storedKey =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('apexstem_gemini_byok_key') ?? ''
        : '';

    if (
      storedKey.startsWith('AIza') &&
      storedKey !== 'AIzaSyDemoHighSchoolStemKey2026'
    ) {
      try {
        const formulasContext = topic.keyFormulasAndRules
          .map((r) => `- ${r.name}: ${r.latexOrRule} (${r.description})`)
          .join('\n');
        const problemCtx = questionContext
          ? `\nCâu hỏi đang làm: ${questionContext.prompt}\nĐáp án chuẩn: ${questionContext.correctOptionText ?? ''}`
          : '';
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
            storedKey
          )}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: {
                parts: [
                  {
                    text:
                      `Bạn là Gia sư AI Socratic chuyên sâu Chương trình GDPT 2018.\n` +
                      `Chuyên đề: ${topic.chapter} - ${topic.topicName}.\n` +
                      `Công thức trọng tâm:\n${formulasContext}` +
                      problemCtx +
                      `\nHãy giải đáp ngắn gọn, rõ ràng bằng tiếng Việt, phân tích từng bước và dùng LaTeX $...$ hoặc $$...$$.`,
                  },
                ],
              },
              contents: [
                {
                  role: 'user',
                  parts: [{ text }],
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
        /* fallback to deterministic local reply */
      }
    }

    if (!reply) {
      reply = buildLocalReply(text);
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: 'assistant',
        text: reply,
      },
    ]);
    setBusy(false);
  };

  const inputId = `chat-input-${topic.id}`;

  return (
    <div
      onFocusCapture={() => onInteraction?.()}
      onClickCapture={() => onInteraction?.()}
      className="space-y-3 pt-3 border-t border-zinc-800/60"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
          <span>Trợ lý Socratic AI • Hỏi đáp bước giải &amp; lý thuyết</span>
        </span>
      </div>

      {/* Contextual Quick-Prompts (Pills) */}
      <div className="flex flex-wrap gap-2">
        {quickQuestions.map((qq, idx) => (
          <button
            key={idx}
            type="button"
            disabled={busy}
            onClick={() => {
              onInteraction?.();
              sendQuestion(qq);
            }}
            className="text-xs text-zinc-400 bg-zinc-900 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
          >
            {qq}
          </button>
        ))}
      </div>

      {/* Conversation Thread */}
      {messages.length > 0 && (
        <div
          role="log"
          aria-live="polite"
          aria-label={`Hộp thoại Gia sư AI chuyên đề ${topic.topicName}`}
          className="max-h-64 overflow-y-auto space-y-2.5 pr-1"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`p-3.5 rounded-xl text-sm leading-7 border ${
                m.role === 'user'
                  ? 'bg-sky-500/[0.08] text-zinc-100 border-sky-500/30 ml-6'
                  : 'bg-zinc-900/70 text-zinc-200 border-zinc-800/80 mr-2'
              }`}
            >
              <p className="text-[11px] font-mono text-zinc-400 mb-1">
                {m.role === 'user' ? 'Bạn' : 'Gia sư AI Socratic'}
              </p>
              <div className="whitespace-pre-line">
                <MathText content={m.text} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Unified Chat Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onInteraction?.();
          sendQuestion(input);
        }}
        className="bg-zinc-950 border border-zinc-800 focus-within:border-zinc-600 rounded-lg px-3.5 py-2 flex items-center gap-2 transition-colors"
      >
        <label htmlFor={inputId} className="sr-only">
          Hỏi Gia sư AI về bước giải hoặc lý thuyết
        </label>
        <input
          id={inputId}
          type="text"
          value={input}
          onFocus={() => onInteraction?.()}
          onChange={(e) => {
            onInteraction?.();
            setInput(e.target.value);
          }}
          placeholder="Hỏi Gia sư AI về bước giải hoặc lý thuyết..."
          autoComplete="off"
          className="flex-1 min-w-0 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!input.trim() || busy}
          aria-label="Gửi câu hỏi"
          className="w-8 h-8 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 disabled:opacity-40 inline-flex items-center justify-center shrink-0 transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <Send className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};
