import React, { useEffect, useState } from 'react';
import { SUBJECTS_META, PRACTICE_QUESTIONS, grade12Curriculum } from '../data/curriculum';
import { MathRenderer, MathText } from './MathRenderer';
import { SubjectDiagram } from './InteractiveDiagrams';
import { getDifficultyBadgeClasses } from './Tag';
import { CompiledWikiArticleView, TopicChatBox } from './TopicChatBox';
import { OptionDiagnostic, PracticeQuestion } from '../types/edu';

export interface ActiveShuffledOption {
  id: string;
  keycap: string;
  text: string;
  latex?: string;
  diagnostic?: OptionDiagnostic;
  isCorrect: boolean;
}

export interface ActiveReinforcement {
  id: string;
  prompt: string;
  latexFormula?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  correctOptionId: string;
  explanation: string;
}

export interface DynamicAttemptState {
  options: ActiveShuffledOption[];
  correctOptionId: string;
  reinforcement?: ActiveReinforcement;
  shuffleKey: number;
}

/**
 * Generates a dynamic attempt with shuffled options.
 * If prevCorrectIdx is supplied, guarantees that the correct answer
 * shifts to a DIFFERENT position (A/B/C/D) on redo.
 */
function generateDynamicAttempt(
  question: PracticeQuestion,
  prevCorrectIdx?: number
): DynamicAttemptState {
  const baseCorrect =
    question.options.find((o) => o.id === question.correctOptionId) ??
    question.options[0];
  const correctText = baseCorrect.text;

  // Clone options
  const items = question.options.map((o) => ({ ...o }));

  // Fisher-Yates shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // If redoing, shift the correct answer to a different slot if possible
  if (prevCorrectIdx !== undefined && items.length > 1) {
    const currentIdx = items.findIndex((o) => o.text === correctText);
    if (currentIdx === prevCorrectIdx) {
      const otherIndices = items
        .map((_, idx) => idx)
        .filter((idx) => idx !== prevCorrectIdx);
      const swapWith =
        otherIndices[Math.floor(Math.random() * otherIndices.length)];
      [items[currentIdx], items[swapWith]] = [
        items[swapWith],
        items[currentIdx],
      ];
    }
  }

  // Assign clean option IDs opt-a, opt-b, opt-c, opt-d with keycaps A, B, C, D
  const options: ActiveShuffledOption[] = items.map((item, idx) => {
    const isCorrect = item.text === correctText;
    return {
      id: `opt-${String.fromCharCode(97 + idx)}`,
      keycap: String.fromCharCode(65 + idx),
      text: item.text,
      latex: item.latex,
      diagnostic: isCorrect ? undefined : item.diagnostic,
      isCorrect,
    };
  });

  const correctIdx = Math.max(
    0,
    options.findIndex((o) => o.isCorrect)
  );
  const correctOptionId = options[correctIdx].id;

  // Dynamic reinforcement question shuffle (A vs B)
  let reinforcement: ActiveReinforcement | undefined = undefined;
  if (question.reinforcement) {
    const rc = question.reinforcement;
    const correctRuleText =
      rc.options.find((o) => o.id === rc.correctOptionId)?.text ??
      rc.options[0].text;
    const wrongRuleText =
      rc.options.find((o) => o.id !== rc.correctOptionId)?.text ??
      rc.options[1]?.text ??
      '';

    const pickAIsCorrect = Math.random() < 0.5;
    reinforcement = {
      id: rc.id,
      prompt: rc.prompt,
      latexFormula: rc.latexFormula,
      options: pickAIsCorrect
        ? [
            { id: 'r-a', text: correctRuleText, isCorrect: true },
            { id: 'r-b', text: wrongRuleText, isCorrect: false },
          ]
        : [
            { id: 'r-a', text: wrongRuleText, isCorrect: false },
            { id: 'r-b', text: correctRuleText, isCorrect: true },
          ],
      correctOptionId: pickAIsCorrect ? 'r-a' : 'r-b',
      explanation: rc.explanation,
    };
  }

  return {
    options,
    correctOptionId,
    reinforcement,
    shuffleKey: Date.now(),
  };
}

interface WorkspaceProps {
  questionId: string;
  apiKey: string;
  onBack: () => void;
  onVerdict: (id: string, correct: boolean) => void;
  onSelectQuestion?: (id: string) => void;
  ac?: number;
  streak?: number;
  customQuestions?: PracticeQuestion[];
}

export const Workspace: React.FC<WorkspaceProps> = ({
  questionId,
  apiKey,
  onBack,
  onVerdict,
  onSelectQuestion,
  ac = 0,
  streak = 0,
  customQuestions,
}) => {
  const allPool = customQuestions && customQuestions.length > 0
    ? [...customQuestions, ...PRACTICE_QUESTIONS]
    : PRACTICE_QUESTIONS;

  const q = allPool.find((p) => p.id === questionId) ?? allPool[0];
  const meta = SUBJECTS_META[q.subject];

  const isCustom = customQuestions?.some((cq) => cq.id === q.id);
  const activeQuizPool = isCustom ? (customQuestions || []) : PRACTICE_QUESTIONS;

  // Sibling questions in the same Topic or Custom Quiz
  const topicQuestions = isCustom
    ? (customQuestions || [])
    : PRACTICE_QUESTIONS.filter(
        (item) =>
          (q.sourceTopic && item.sourceTopic?.id === q.sourceTopic.id) ||
          item.topic === q.topic
      );

  const currentTopicIndex = Math.max(
    0,
    topicQuestions.findIndex((item) => item.id === q.id)
  );
  const globalIndex = Math.max(
    0,
    activeQuizPool.findIndex((item) => item.id === q.id)
  );

  const effectiveTopic =
    q.sourceTopic ||
    grade12Curriculum.find((t) => t.subject === q.subject) ||
    grade12Curriculum[0];

  const goToNextQuestion = () => {
    if (!onSelectQuestion) return;
    if (currentTopicIndex < topicQuestions.length - 1) {
      onSelectQuestion(topicQuestions[currentTopicIndex + 1].id);
    } else if (activeQuizPool.length > 0) {
      const nextGlobal = (globalIndex + 1) % activeQuizPool.length;
      onSelectQuestion(activeQuizPool[nextGlobal].id);
    }
  };

  const goToPrevQuestion = () => {
    if (!onSelectQuestion) return;
    if (currentTopicIndex > 0) {
      onSelectQuestion(topicQuestions[currentTopicIndex - 1].id);
    } else if (activeQuizPool.length > 0) {
      const prevGlobal =
        (globalIndex - 1 + activeQuizPool.length) % activeQuizPool.length;
      onSelectQuestion(activeQuizPool[prevGlobal].id);
    }
  };

  // Mobile segmented tab ('wiki' | 'practice') & Mobile slide-up Socratic sheet
  const [mobileTab, setMobileTab] = useState<'wiki' | 'practice'>('practice');
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  // Dynamic Practice Attempt State (reshuffled per entry & redo)
  const [attempt, setAttempt] = useState<DynamicAttemptState>(() =>
    generateDynamicAttempt(q)
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<'AC' | 'WA' | null>(null);
  const [reinfPick, setReinfPick] = useState<string | null>(null);

  // Auto-advance configuration & timer state
  const COUNTDOWN_SECONDS = 4;
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('scalar_auto_advance_enabled');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });
  const [autoAdvancePaused, setAutoAdvancePaused] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(COUNTDOWN_SECONDS);

  const pauseAutoAdvance = () => {
    setAutoAdvancePaused(true);
  };

  const toggleAutoAdvance = () => {
    setAutoAdvanceEnabled((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('scalar_auto_advance_enabled', String(next));
      }
      return next;
    });
  };

  // Reshuffle & reset timer on every questionId change (new problem entry)
  useEffect(() => {
    setAttempt(generateDynamicAttempt(q));
    setSelected(null);
    setVerdict(null);
    setReinfPick(null);
    setAutoAdvancePaused(false);
    setCountdown(COUNTDOWN_SECONDS);
  }, [questionId]);

  // Redo handler: shifts correct answer to a different position
  const handleRedo = () => {
    const prevIdx = attempt.options.findIndex((o) => o.isCorrect);
    setAttempt(generateDynamicAttempt(q, prevIdx));
    setSelected(null);
    setVerdict(null);
    setReinfPick(null);
    setAutoAdvancePaused(false);
    setCountdown(COUNTDOWN_SECONDS);
  };

  const submit = () => {
    if (!selected) return;
    const ok = selected === attempt.correctOptionId;
    setVerdict(ok ? 'AC' : 'WA');
    onVerdict(q.id, ok);
    setCountdown(COUNTDOWN_SECONDS);
    setAutoAdvancePaused(false);
  };

  // Auto-advance countdown timer when question is finished (verdict is set)
  useEffect(() => {
    if (!verdict || !autoAdvanceEnabled || autoAdvancePaused) {
      return;
    }

    if (countdown <= 0) {
      goToNextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          goToNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [verdict, autoAdvanceEnabled, autoAdvancePaused, countdown, questionId]);

  // Keyboard shortcuts: 1/2/3/4 or A/B/C/D to select option, Enter to submit or next
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      const key = e.key.toUpperCase();
      if (['1', '2', '3', '4'].includes(key)) {
        const idx = Number(key) - 1;
        const opt = attempt.options[idx];
        if (opt) {
          e.preventDefault();
          setSelected(opt.id);
          setVerdict(null);
        }
      } else if (['A', 'B', 'C', 'D'].includes(key)) {
        const idx = key.charCodeAt(0) - 65;
        const opt = attempt.options[idx];
        if (opt) {
          e.preventDefault();
          setSelected(opt.id);
          setVerdict(null);
        }
      } else if (e.key === 'Enter') {
        if (selected && !verdict) {
          e.preventDefault();
          submit();
        } else if (verdict && autoAdvancePaused) {
          e.preventDefault();
          goToNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [q.id, selected, verdict, attempt, autoAdvancePaused]);

  const correctIdx = Math.max(
    0,
    attempt.options.findIndex((o) => o.id === attempt.correctOptionId)
  );
  const correctLetter = attempt.options[correctIdx]?.keycap ?? String.fromCharCode(65 + correctIdx);
  const correctOptionText = attempt.options[correctIdx]?.text ?? '';
  const selectedDiag = attempt.options.find((o) => o.id === selected)?.diagnostic;
  const rc = attempt.reinforcement ?? q.reinforcement;

  /* ============================================================================
   * LEFT PANE: COMPILED "MODERN WIKIPEDIA" LESSON VIEW
   * ============================================================================ */
  const renderWikiPane = (isMobile: boolean) => (
    <div className="space-y-6">
      {q.sourceTopic ? (
        <CompiledWikiArticleView
          topic={q.sourceTopic}
          collapsibleSections={isMobile}
        />
      ) : (
        <div className="max-w-[65ch] space-y-4">
          <p className="text-xs text-zinc-500">
            {meta.vnName} {q.grade} / {q.chapter}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            {q.topic}
          </h1>
        </div>
      )}

      {/* Interactive Textbook Visualization inside Wiki flow */}
      <div className="max-w-[65ch] pt-2">
        <SubjectDiagram subject={q.subject} />
      </div>
    </div>
  );

  /* ============================================================================
   * RIGHT PANE: CODECADEMY-STYLE PRACTICE CONSOLE
   * ============================================================================ */
  const renderPracticePane = () => (
    <div className="flex flex-col justify-between min-h-full space-y-6">
      <div className="space-y-6">
        {/* 1. Problem Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-md px-2.5 py-0.5 text-xs font-medium border ${getDifficultyBadgeClasses(
                q.cognitiveLevel
              )}`}
            >
              Câu {currentTopicIndex + 1}/{topicQuestions.length} •{' '}
              {q.cognitiveLevel}
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              Lớp {q.grade}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Auto-advance toggle switch */}
            <button
              type="button"
              onClick={toggleAutoAdvance}
              className={`text-xs px-2.5 py-1 rounded-md border transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                autoAdvanceEnabled
                  ? 'border-sky-500/30 bg-sky-500/10 text-sky-300'
                  : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
              }`}
              title={
                autoAdvanceEnabled
                  ? 'Tự động chuyển câu sau khi hoàn thành: Đang Bật (Bấm để tắt)'
                  : 'Tự động chuyển câu: Đang Tắt (Bấm để bật)'
              }
            >
              <span className="hidden sm:inline">Tự động chuyển:</span>
              <span>{autoAdvanceEnabled ? 'Bật' : 'Tắt'}</span>
            </button>

            {onSelectQuestion && (
              <div className="flex items-center gap-1 mr-1">
                <button
                  type="button"
                  onClick={goToPrevQuestion}
                  aria-label="Câu trước"
                  className="px-2 py-1 text-xs rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 cursor-pointer"
                >
                  Trước
                </button>
                <button
                  type="button"
                  onClick={goToNextQuestion}
                  aria-label="Câu tiếp theo"
                  className="px-2 py-1 text-xs rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 cursor-pointer"
                >
                  Tiếp
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={handleRedo}
              className="text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              title="Làm lại với vị trí đáp án được đảo ngẫu nhiên"
            >
              <span>Làm lại (Đảo đáp án)</span>
            </button>
          </div>
        </div>

        {/* 2. Problem Prompt Card */}
        <div className="text-[15px] leading-7 text-zinc-200 mb-6 bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-5">
          <MathText content={q.prompt} />
        </div>

        {/* 3. Interactive Answer Radio Cards (A, B, C, D) */}
        <div
          role="radiogroup"
          aria-label="Các phương án trả lời"
          className="space-y-2.5"
        >
          {attempt.options.map((o) => {
            const isSelected = selected === o.id;
            const isRight = Boolean(verdict && o.id === attempt.correctOptionId);
            const isWrong = Boolean(verdict === 'WA' && isSelected);

            let cardStateClasses =
              'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/60 hover:border-zinc-700 text-zinc-200';
            let badgeClasses =
              'bg-zinc-800 border border-zinc-700 text-zinc-300';

            if (isRight) {
              cardStateClasses =
                'border-emerald-500/50 bg-emerald-950/20 text-emerald-200';
              badgeClasses =
                'bg-emerald-600 border border-emerald-500 text-white';
            } else if (isWrong) {
              cardStateClasses =
                'border-rose-500/50 bg-rose-950/20 text-rose-200';
              badgeClasses =
                'bg-rose-600 border border-rose-500 text-white';
            } else if (isSelected) {
              cardStateClasses =
                'border-sky-500/60 bg-sky-950/20 text-zinc-100';
              badgeClasses =
                'bg-sky-600 border border-sky-500 text-white';
            }

            return (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => {
                  setSelected(o.id);
                  setVerdict(null);
                }}
                className={`w-full min-h-[52px] flex items-center gap-3.5 px-4 py-3.5 rounded-xl border transition-colors cursor-pointer text-left ${cardStateClasses}`}
              >
                <span
                  className={`w-7 h-7 rounded-lg font-mono text-xs font-semibold flex items-center justify-center shrink-0 tracking-tight ${badgeClasses}`}
                >
                  {o.keycap}
                </span>
                <span className="min-w-0 flex-1 overflow-x-auto text-[15px] leading-7">
                  {o.latex ? (
                    <MathRenderer latex={o.latex} />
                  ) : (
                    <MathText content={o.text} />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4. Primary Action Bar (Desktop) */}
        <div className="hidden lg:flex items-center justify-between gap-4 pt-1">
          {verdict ? (
            <div className="w-full flex items-center justify-between gap-4">
              {autoAdvancePaused || !autoAdvanceEnabled ? (
                <button
                  type="button"
                  onClick={goToNextQuestion}
                  className="min-h-[44px] bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Câu hỏi tiếp theo
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goToNextQuestion}
                    className="min-h-[44px] bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Chuyển ngay
                  </button>
                  <button
                    type="button"
                    onClick={pauseAutoAdvance}
                    className="text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    Tạm dừng để xem kỹ
                  </button>
                </div>
              )}
              <span className="text-xs text-zinc-500 font-mono">
                {autoAdvancePaused || !autoAdvanceEnabled
                  ? 'Nhấn [Enter] hoặc click nút để sang câu tiếp theo'
                  : `Tự động chuyển câu sau ${countdown}s...`}
              </span>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={submit}
                disabled={!selected}
                className="w-full sm:w-auto bg-zinc-100 hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                Nộp bài &amp; Kiểm tra đáp án
              </button>
              <span className="text-xs text-zinc-500 font-mono">
                Phím tắt: A–D hoặc 1–4 • Enter để nộp
              </span>
            </>
          )}
        </div>

        {/* 5. Unified Solution & Socratic Tutor Card */}
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
          {verdict ? (
            <>
              {/* Status Banner */}
              <div
                className={
                  verdict === 'AC'
                    ? 'bg-emerald-950/40 border-b border-emerald-500/20 px-4 py-2.5 text-sm font-medium text-emerald-300'
                    : 'bg-rose-950/40 border-b border-rose-500/20 px-4 py-2.5 text-sm font-medium text-rose-300'
                }
              >
                <div className="min-w-0 flex-1">
                  {verdict === 'AC' ? (
                    <span>
                      [ĐÚNG] Chính xác! Đáp án đúng là {correctLetter} (
                      <MathText content={correctOptionText} />)
                    </span>
                  ) : (
                    <span>
                      [CHƯA ĐÚNG] Đáp án chuẩn là {correctLetter} (
                      <MathText content={correctOptionText} />)
                    </span>
                  )}
                </div>
              </div>

              {/* Auto-Advance Countdown Bar OR Bigger Next Question Button */}
              {autoAdvanceEnabled && !autoAdvancePaused ? (
                <div className="bg-sky-950/40 border-b border-sky-500/25 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2.5 text-sky-200">
                    <span className="font-medium text-xs sm:text-sm">
                      Tự động chuyển câu tiếp theo sau{' '}
                      <span className="font-mono text-sky-300 font-bold px-1.5 py-0.5 rounded-md bg-sky-500/20 border border-sky-500/30">
                        {countdown}s
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={pauseAutoAdvance}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
                      title="Tạm dừng tự động chuyển câu để xem lời giải hoặc hỏi AI"
                    >
                      <span>Tạm dừng</span>
                    </button>
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>Chuyển ngay</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-900/80 border-b border-sky-500/30 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-sky-300">
                    <span className="font-medium">
                      <span>Tự động chuyển câu đã tạm dừng để bạn đối thoại cùng Gia sư AI</span>
                    </span>
                    <span className="font-mono text-zinc-400 text-[11px] hidden sm:inline">
                      Nhấn [Enter] để chuyển tiếp
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={goToNextQuestion}
                    className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-base sm:text-lg transition-colors cursor-pointer"
                  >
                    <span>Câu hỏi tiếp theo</span>
                  </button>
                </div>
              )}

              {/* Step-by-Step Derivation & Socratic Diagnostic */}
              <div className="p-5 space-y-4">
                {verdict === 'WA' && selectedDiag && (
                  <div className="p-3.5 rounded-lg bg-rose-500/[0.06] border border-rose-500/20 space-y-1.5 text-sm text-zinc-200 leading-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">
                      Chẩn đoán lỗi sai &amp; Gợi ý khắc phục
                    </p>
                    <p>
                      <strong className="font-semibold text-zinc-100">
                        Nguyên nhân:
                      </strong>{' '}
                      <MathText content={selectedDiag.whyWrong} />
                    </p>
                    <p>
                      <strong className="font-semibold text-zinc-100">
                        Cách khắc phục:
                      </strong>{' '}
                      <MathText content={selectedDiag.correctiveHint} />
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Lời giải chi tiết từng bước
                  </p>
                  <div className="space-y-2.5 text-[15px] leading-7 text-zinc-200">
                    {q.stepByStepSolution.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80"
                      >
                        <MathText content={step} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Reinforcement Check */}
                <details className="group border border-zinc-800/80 rounded-lg bg-zinc-950/50 p-3.5">
                  <summary className="cursor-pointer list-none flex items-center justify-between text-xs font-semibold text-sky-400 select-none">
                    <span>Câu hỏi củng cố kiến thức nhanh</span>
                    <span className="font-mono text-[11px] text-zinc-500">
                      [Mở rộng]
                    </span>
                  </summary>
                  <div className="pt-3 mt-2 border-t border-zinc-800/60 space-y-2.5 text-sm">
                    <p className="text-zinc-200">
                      <MathText content={rc.prompt} />
                    </p>
                    <div className="space-y-2">
                      {rc.options.map((ro) => {
                        const picked = reinfPick === ro.id;
                        const right = ro.id === rc.correctOptionId;
                        let cls = 'border-zinc-800 bg-zinc-900/50 text-zinc-300';
                        if (reinfPick) {
                          if (right)
                            cls =
                              'border-emerald-500/60 bg-emerald-500/[0.08] text-emerald-300';
                          else if (picked)
                            cls =
                              'border-rose-500/60 bg-rose-500/[0.08] text-rose-300';
                        }
                        return (
                          <button
                            key={ro.id}
                            type="button"
                            onClick={() => setReinfPick(ro.id)}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-left text-sm transition-colors cursor-pointer ${cls}`}
                          >
                            <MathText content={ro.text} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </details>

                {/* Redo with fresh shuffled answers */}
                <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleRedo}
                    className="px-3.5 py-2 rounded-lg bg-zinc-800/90 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-200 text-xs font-medium cursor-pointer transition-colors"
                  >
                    <span>Làm lại câu này với vị trí đáp án mới (A–B–C–D)</span>
                  </button>
                  <span className="text-[11px] font-mono text-zinc-500">
                    * Phương án tự động đảo ngẫu nhiên ở mỗi lượt làm lại
                  </span>
                </div>

                {/* Unified Socratic Assistant Thread inside the same card */}
                {effectiveTopic && (
                  <TopicChatBox
                    topic={effectiveTopic}
                    questionContext={{
                      prompt: q.prompt,
                      correctOptionText,
                      stepByStepSolution: q.stepByStepSolution,
                    }}
                    onInteraction={pauseAutoAdvance}
                  />
                )}

                {/* Big Next Question button at bottom of card after discussing with AI */}
                {(autoAdvancePaused || !autoAdvanceEnabled) && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm sm:text-base shadow-sm transition-colors cursor-pointer"
                    >
                      <span>Làm câu hỏi tiếp theo</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-5">
              {effectiveTopic && (
                <TopicChatBox
                  topic={effectiveTopic}
                  questionContext={{
                    prompt: q.prompt,
                  }}
                  onInteraction={pauseAutoAdvance}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:h-[calc(100dvh-3rem)] lg:overflow-hidden bg-zinc-950">
      {/* ====================================================================
       * 6. SLEEK MOBILE STICKY HEADER & 2-TAB SEGMENTED SWITCHER (< 1024px)
       * ==================================================================== */}
      <div className="lg:hidden bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 sticky top-12 z-30 px-4 py-2.5 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <button
              type="button"
              onClick={onBack}
              aria-label="Quay lại danh sách"
              className="px-2.5 py-1 text-xs rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 shrink-0 cursor-pointer"
            >
              ← Quay lại
            </button>
            <span className="text-xs font-semibold text-zinc-100 truncate">
              {q.topic}
            </span>
          </div>
          <span className="bg-zinc-900 border border-zinc-800 rounded-full px-2.5 py-0.5 text-[11px] font-mono text-zinc-300 shrink-0">
            <span className="text-emerald-400">AC: {ac}</span> •{' '}
            <span className="text-amber-400">Streak: {streak}</span>
          </span>
        </div>

        {/* 2-Tab Segmented Pill Switcher */}
        <div
          className="bg-zinc-900 p-1 rounded-lg grid grid-cols-2 text-xs font-medium"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === 'wiki'}
            onClick={() => setMobileTab('wiki')}
            className={`py-1.5 rounded-md transition-colors cursor-pointer ${
              mobileTab === 'wiki'
                ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Lý thuyết (Wiki)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === 'practice'}
            onClick={() => setMobileTab('practice')}
            className={`py-1.5 rounded-md transition-colors cursor-pointer ${
              mobileTab === 'practice'
                ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Luyện tập (Bài tập)
          </button>
        </div>
      </div>

      {/* ====================================================================
       * DESKTOP 12-COLUMN SPLIT-SCREEN WORKSPACE (`lg:grid-cols-12`)
       * ==================================================================== */}
      <div className="hidden lg:grid lg:grid-cols-12 flex-1 overflow-hidden">
        {/* Left Pane (Wiki & Theory): col-span-6 */}
        <section
          aria-label="Bài viết lý thuyết chuyên đề (Wiki)"
          className="col-span-6 xl:col-span-6 overflow-y-auto px-8 py-6 border-r border-zinc-800/80 space-y-5"
        >
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/80 rounded-lg px-3 py-1.5 transition-colors cursor-pointer"
            >
              <span>← Tổng quan chuyên đề</span>
            </button>
            <span className="text-xs font-mono text-zinc-500">
              {meta.vnName} {q.grade} • GDPT 2018
            </span>
          </div>

          {renderWikiPane(false)}
        </section>

        {/* Right Pane (Codecademy Practice Console): col-span-6 */}
        <section
          aria-label="Bảng luyện tập tương tác và Gia sư Socratic"
          className="col-span-6 xl:col-span-6 overflow-y-auto px-8 py-6 bg-zinc-950/50 flex flex-col justify-between"
        >
          {renderPracticePane()}
        </section>
      </div>

      {/* ====================================================================
       * MOBILE TABBED VIEWS (< 1024px)
       * ==================================================================== */}
      <div className="lg:hidden flex-1 pb-24">
        {mobileTab === 'wiki' ? (
          <div className="px-4 py-5 text-[15px] leading-7">
            {renderWikiPane(true)}
          </div>
        ) : (
          <div className="px-4 py-5">{renderPracticePane()}</div>
        )}
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      {mobileTab === 'practice' && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 p-3 pb-safe bg-zinc-950/95 backdrop-blur border-t border-zinc-800 z-20 flex items-center gap-2.5">
          {verdict ? (
            <>
              <button
                type="button"
                onClick={goToNextQuestion}
                className="flex-1 h-12 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-sm sm:text-base rounded-xl transition-colors flex items-center justify-center cursor-pointer"
              >
                <span>Câu hỏi tiếp theo</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  pauseAutoAdvance();
                  setMobileSheetOpen(true);
                }}
                className="h-12 px-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-100 text-xs font-medium inline-flex items-center shrink-0 cursor-pointer"
              >
                <span>Hỏi Gia sư</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={submit}
                disabled={!selected}
                className="flex-1 h-11 bg-zinc-100 hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium text-sm rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
              >
                {selected ? 'Nộp bài' : 'Chọn một đáp án'}
              </button>
              <button
                type="button"
                onClick={() => {
                  pauseAutoAdvance();
                  setMobileSheetOpen(true);
                }}
                className="h-11 px-4 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-100 text-xs font-medium inline-flex items-center shrink-0 cursor-pointer"
              >
                <span>Hỏi Gia sư</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Slide-Up Socratic Tutor Bottom Sheet (Mobile) */}
      {mobileSheetOpen && effectiveTopic && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Trợ lý Gia sư Socratic"
        >
          <div
            className="flex-1"
            onClick={() => setMobileSheetOpen(false)}
            aria-hidden="true"
          />
          <div className="max-h-[80vh] overflow-y-auto rounded-t-2xl bg-zinc-900 border-t border-zinc-800 p-4 pb-safe space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <span className="text-sm font-semibold text-zinc-100">
                <span>Gia sư AI Socratic • {effectiveTopic.topicName}</span>
              </span>
              <div className="flex items-center gap-2">
                {verdict && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileSheetOpen(false);
                      goToNextQuestion();
                    }}
                    className="px-2.5 py-1 rounded-md bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold inline-flex items-center cursor-pointer"
                  >
                    <span>Câu tiếp</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setMobileSheetOpen(false)}
                  aria-label="Đóng khung chat Gia sư"
                  className="px-2 py-1 text-xs rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
            <TopicChatBox
              topic={effectiveTopic}
              questionContext={{
                prompt: q.prompt,
                correctOptionText,
                stepByStepSolution: q.stepByStepSolution,
              }}
              onInteraction={pauseAutoAdvance}
            />
          </div>
        </div>
      )}
    </div>
  );
};
