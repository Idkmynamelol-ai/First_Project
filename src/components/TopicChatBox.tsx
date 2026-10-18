import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { CurriculumTopic } from '../../backend/data/curriculum/grade12';
import { RichTextWithMath } from './MathRenderer';

interface WorkedExampleSectionProps {
  topic: CurriculumTopic;
}

export const WorkedExampleSection: React.FC<WorkedExampleSectionProps> = ({
  topic,
}) => {
  const ex = topic.workedExample;
  if (!ex) return null;

  return (
    <div className="border border-[#D4D4D8]/70 bg-[#0A0A0A] p-4 sm:p-5 space-y-4 font-sans-readable">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
        <h4 className="text-xs sm:text-sm uppercase tracking-wider text-sky-300 font-bold flex items-center gap-2 font-mono">
          <Compass className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
          <span className="bg-sky-500/20 border border-sky-400/60 px-2.5 py-0.5 text-sky-200">
            Ví dụ minh họa toàn diện &amp; Phân tích tư duy
          </span>
        </h4>
        <span className="text-[11px] font-mono font-bold text-sky-300 bg-sky-950/80 border border-sky-400/50 px-2.5 py-0.5">
          TRỌNG TÂM BÀI HỌC
        </span>
      </div>

      {/* 1. Đề bài ví dụ */}
      <div className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-sky-400 text-black text-[11px] font-bold">
            1
          </span>
          <span>Bài toán thực tế / Đề bài minh họa</span>
        </p>
        <div className="text-sm sm:text-[15px] text-white leading-7 bg-[#141414] border border-[#D4D4D8]/60 p-3.5 sm:p-4 font-sans">
          <RichTextWithMath text={ex.problemStatement} />
        </div>
      </div>

      {/* 2. Phân tích tư duy & lập luận logic */}
      <div className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-sky-400 text-black text-[11px] font-bold">
            2
          </span>
          <span>Định hướng tư duy &amp; Lập luận logic (Mấu chốt giải quyết)</span>
        </p>
        <div className="text-sm sm:text-[15px] text-sky-100 leading-7 bg-sky-950/40 border border-sky-400/60 border-l-4 border-l-sky-400 p-3.5 sm:p-4 font-sans">
          <RichTextWithMath text={ex.logicReasoning} />
        </div>
      </div>

      {/* 3. Các bước giải chi tiết */}
      <div className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 bg-sky-400 text-black text-[11px] font-bold">
            3
          </span>
          <span>Trình bày các bước giải chi tiết</span>
        </p>
        <ol className="space-y-2.5 text-sm sm:text-[15px] text-neutral-100 font-sans">
          {ex.steps.map((step, idx) => (
            <li
              key={idx}
              className="border border-[#D4D4D8]/50 bg-[#141414] border-l-4 border-l-sky-400 p-3.5 leading-7 flex items-start gap-3"
            >
              <span className="font-mono text-xs font-bold text-sky-300 bg-sky-950/80 border border-sky-400/40 px-2 py-0.5 shrink-0 mt-0.5">
                B{idx + 1}
              </span>
              <div className="min-w-0 flex-1">
                <RichTextWithMath text={step} />
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 4. Kết luận */}
      <div className="border border-sky-400 bg-sky-950/50 p-3.5 sm:p-4 flex items-start gap-3 font-sans">
        <CheckCircle2
          className="w-5 h-5 text-sky-300 shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <div className="text-sm sm:text-[15px] text-white font-semibold leading-7">
          <RichTextWithMath text={ex.finalConclusion} />
        </div>
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
}

export const TopicChatBox: React.FC<TopicChatBoxProps> = ({ topic }) => {
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: 1,
      role: 'assistant',
      text: `Chào bạn! Bạn đang xem chuyên đề **${topic.topicName}** (${topic.chapter}). Bạn có thắc mắc nào về công thức, lập luận logic trong ví dụ trên hay phương pháp giải dạng bài này không?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);

  const quickQuestions = [
    'Giải thích rõ hơn bước lập luận logic trong ví dụ?',
    `Khi nào áp dụng công thức "${topic.keyFormulasAndRules[0]?.name ?? 'trọng tâm'}"?`,
    'Cho mình thêm 1 bài tương tự để tự luyện?',
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
        `**Phân tích sâu lập luận trong ví dụ (${topic.topicName}):**\n` +
        `• **Cốt lõi tư duy:** ${topic.workedExample.logicReasoning}\n` +
        `• **Bước mấu chốt đầu tiên:** ${topic.workedExample.steps[0]}\n` +
        `• **Kết quả cần kiểm tra lại:** ${topic.workedExample.finalConclusion}`
      );
    }

    if (
      qLower.includes('tương tự') ||
      qLower.includes('bài tập') ||
      qLower.includes('luyện') ||
      qLower.includes('thêm')
    ) {
      const sample =
        topic.sampleQuestionTemplates[1] ?? topic.sampleQuestionTemplates[0];
      return (
        `**Bài tập vận dụng tương tự (${sample.cognitiveLevel}):**\n` +
        `${sample.questionText}\n` +
        `• **Gợi ý hướng giải:** ${sample.detailedDerivation}\n` +
        `• **Đáp số đối chiếu:** ${sample.correctAnswer}`
      );
    }

    return (
      `**Giải đáp chuyên đề "${topic.topicName}":**\n` +
      (firstRule
        ? `• **Quy tắc / Công thức cốt lõi (${firstRule.name}):** $${firstRule.latexOrRule}$ — ${firstRule.description}\n`
        : '') +
      (secondRule
        ? `• **Bổ trợ (${secondRule.name}):** $${secondRule.latexOrRule}$ — ${secondRule.description}\n`
        : '') +
      `• **Liên hệ với ví dụ minh họa:** ${topic.workedExample.logicReasoning}`
    );
  };

  const sendQuestion = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || busy) return;
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
                      `Bạn là Gia sư AI chuyên sâu Chương trình GDPT 2018 Lớp 12.\n` +
                      `Chuyên đề hiện tại: ${topic.chapter} - ${topic.topicName}.\n` +
                      `Công thức trọng tâm:\n${formulasContext}\n` +
                      `Ví dụ minh họa trong bài: ${topic.workedExample.problemStatement}\n` +
                      `Lập luận logic của ví dụ: ${topic.workedExample.logicReasoning}\n` +
                      `Hãy giải đáp ngắn gọn, rõ ràng bằng tiếng Việt, giải thích từng bước logic và dùng ký hiệu LaTeX $...$ hoặc $$...$$.`,
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
        /* fallback to local deterministic tutor reply */
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
    <div className="border border-neutral-800 bg-[#0A0A0A] p-3.5 sm:p-4 space-y-3">
      <div className="flex items-center justify-between gap-2 border-b border-neutral-800 pb-2.5">
        <h4 className="text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
          <span>Hỏi đáp trực tiếp về chuyên đề này</span>
        </h4>
        <span className="text-[11px] font-mono text-sky-300 flex items-center gap-1">
          <Sparkles className="w-3 h-3" aria-hidden="true" />
          <span>Gia sư AI</span>
        </span>
      </div>

      {/* Gợi ý câu hỏi nhanh */}
      <div className="flex flex-wrap gap-1.5">
        {quickQuestions.map((qq, idx) => (
          <button
            key={idx}
            type="button"
            disabled={busy}
            onClick={() => sendQuestion(qq)}
            className="text-left text-xs font-mono px-2.5 py-1.5 border border-neutral-800 bg-[#111111] text-neutral-300 hover:text-white hover:border-neutral-600 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            + {qq}
          </button>
        ))}
      </div>

      {/* Lịch sử hội thoại của bài viết */}
      <div
        role="log"
        aria-live="polite"
        aria-label={`Hộp thoại hỏi đáp chuyên đề ${topic.topicName}`}
        className="max-h-60 overflow-y-auto space-y-2.5 pr-1 font-sans"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-3.5 text-sm leading-7 border ${
              m.role === 'user'
                ? 'bg-sky-950/50 text-white border-sky-400/60 ml-4 sm:ml-6 font-medium'
                : 'bg-[#141414] text-neutral-100 border-neutral-800 mr-1 sm:mr-2'
            }`}
          >
            <p className="text-[10px] font-mono uppercase tracking-wider mb-1 text-sky-300">
              {m.role === 'user' ? 'Bạn hỏi' : `Gia sư • ${topic.topicName}`}
            </p>
            <div className="whitespace-pre-line font-sans">
              <RichTextWithMath text={m.text} />
            </div>
          </div>
        ))}
      </div>

      {/* Form nhập câu hỏi */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendQuestion(input);
        }}
        className="flex items-center gap-2 pt-1"
      >
        <label htmlFor={inputId} className="sr-only">
          Đặt câu hỏi về chuyên đề {topic.topicName}
        </label>
        <input
          id={inputId}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Hỏi về "${topic.topicName}"...`}
          autoComplete="off"
          className="flex-1 min-w-0 h-11 px-3.5 bg-[#111111] border border-neutral-700 text-sm sm:text-base font-sans text-white placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        />
        <button
          type="submit"
          disabled={!input.trim() || busy}
          aria-label="Gửi câu hỏi"
          className="h-11 px-4 bg-white text-black text-xs font-bold inline-flex items-center gap-1.5 shrink-0 hover:bg-neutral-300 disabled:bg-neutral-800 disabled:text-neutral-500 cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <span>Hỏi</span>
          <Send className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};
