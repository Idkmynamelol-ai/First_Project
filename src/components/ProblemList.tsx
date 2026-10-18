import React, { useEffect, useState } from 'react';
import {
  ChevronRight,
  BookOpen,
  ListChecks,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { SubjectId, CognitiveLevel, GradeLevel } from '../types/edu';
import {
  SUBJECTS_META,
  PRACTICE_QUESTIONS,
  grade12BySubject,
  DIFFICULTY_TIER_ORDER,
} from '../data/curriculum';
import { Tag, getDifficultyBadgeClasses } from './Tag';
import { MathText } from './MathRenderer';
import { CompiledWikiArticleView, TopicChatBox } from './TopicChatBox';
import { SubjectDiagram } from './InteractiveDiagrams';
import { DailyChallengeView } from './DailyChallengeView';
import { AdminTab } from './AdminTab';

interface ProblemListProps {
  solved: Record<string, 'AC' | 'WA'>;
  onOpen: (id: string) => void;
  streak: number;
  onStreakUpdate: (nextStreak: number, isCorrect: boolean) => void;
  externalCogFilter?: 'all' | CognitiveLevel;
  onExternalCogFilterChange?: (lvl: 'all' | CognitiveLevel) => void;
}

const SUBJECT_KEYS: SubjectId[] = ['math', 'physics', 'chemistry', 'english'];

const COGNITIVE_LEVELS: ('all' | CognitiveLevel)[] = [
  'all',
  'Nhận biết',
  'Thông hiểu',
  'Vận dụng',
  'Vận dụng cao',
];

const GRADE_LEVELS: ('all' | GradeLevel)[] = ['all', 12, 11, 10];

export const ProblemList: React.FC<ProblemListProps> = ({
  solved,
  onOpen,
  streak,
  onStreakUpdate,
  externalCogFilter,
  onExternalCogFilterChange,
}) => {
  const [viewMode, setViewMode] = useState<
    'daily' | 'problems' | 'knowledge' | 'admin'
  >(() => (window.location.hash === '#/admin' ? 'admin' : 'problems'));
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('chemistry');
  const [gradeFilter, setGradeFilter] = useState<'all' | GradeLevel>('all');
  const [localCogFilter, setLocalCogFilter] = useState<
    'all' | CognitiveLevel
  >('all');

  const cogFilter = externalCogFilter ?? localCogFilter;
  const setCogFilter = onExternalCogFilterChange ?? setLocalCogFilter;

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash === '#/admin') {
        setViewMode('admin');
      }
    };
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const subjectQuestions = PRACTICE_QUESTIONS.filter(
    (q) => q.subject === selectedSubject
  );

  const rows = subjectQuestions.filter(
    (q) =>
      (gradeFilter === 'all' || q.grade === gradeFilter) &&
      (cogFilter === 'all' || q.cognitiveLevel === cogFilter)
  );

  const allSubjectTopics = grade12BySubject[selectedSubject];
  const topics = allSubjectTopics.filter(
    (t) => gradeFilter === 'all' || t.grade === gradeFilter
  );

  return (
    <div className="space-y-6">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-zinc-800/80 pb-5">
        <div className="space-y-1.5">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            CHƯƠNG TRÌNH GDPT 2018 • LỚP 10 – 11 – 12
          </p>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            {viewMode === 'daily'
              ? 'Thử thách Hàng ngày (Daily Deterministic Engine)'
              : viewMode === 'admin'
              ? 'Quản trị Hệ thống: Kho Nguồn Đề THPTQG • HSA • TSA (2025–2026)'
              : viewMode === 'problems'
              ? `${SUBJECTS_META[selectedSubject].vnName}: Chuyên đề & Bài tập theo mức độ (${rows.length} câu)`
              : `${SUBJECTS_META[selectedSubject].vnName}: Cẩm nang Lý thuyết Wiki (${topics.length} chuyên đề)`}
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            {viewMode === 'admin' ? (
              <>
                Tự động thu thập &amp; lưu trữ các liên kết đề thi thử{' '}
                <span className="font-semibold text-zinc-200">
                  THPTQG 2026, HSA 2026, TSA 2026
                </span>{' '}
                (kèm năm 2025) có PDF miễn phí hoặc cấu trúc hiển thị rõ.
              </>
            ) : (
              <>
                Phân cấp theo cấu trúc{' '}
                <span className="font-semibold text-zinc-200">
                  Môn học &gt; Chuyên đề Wiki &gt; 4 Mức độ nhận thức
                </span>{' '}
                (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).
              </>
            )}
          </p>
        </div>

        {/* Segmented Mode Pill Bar */}
        <div
          className="bg-zinc-900/90 border border-zinc-800/80 p-1 rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-1 shrink-0"
          role="tablist"
          aria-label="Chế độ học tập"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'problems'}
            onClick={() => setViewMode('problems')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              viewMode === 'problems'
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Luyện tập ({PRACTICE_QUESTIONS.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'knowledge'}
            onClick={() => setViewMode('knowledge')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              viewMode === 'knowledge'
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Lý thuyết (Wiki)</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'daily'}
            onClick={() => setViewMode('daily')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              viewMode === 'daily'
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Thử thách Ngày</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'admin'}
            onClick={() => setViewMode('admin')}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              viewMode === 'admin'
                ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>Admin</span>
          </button>
        </div>
      </div>

      {viewMode === 'admin' ? (
        <AdminTab />
      ) : viewMode === 'daily' ? (
        <DailyChallengeView
          selectedSubject={selectedSubject}
          onSelectSubject={setSelectedSubject}
          streak={streak}
          onStreakUpdate={onStreakUpdate}
        />
      ) : (
        <div className="space-y-6">
          {/* Level 1: Subject Selector (4 Subjects) */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            role="tablist"
            aria-label="Chọn môn học"
          >
            {SUBJECT_KEYS.map((subj) => {
              const active = selectedSubject === subj;
              const subjMeta = SUBJECTS_META[subj];
              const subjTopicsCount = grade12BySubject[subj].length;
              const subjQuestionsCount = PRACTICE_QUESTIONS.filter(
                (q) => q.subject === subj
              ).length;

              return (
                <button
                  key={subj}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedSubject(subj)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-zinc-900 border-sky-500/60 text-zinc-100 shadow-xs'
                      : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-zinc-100">
                      {subjMeta.vnName}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-zinc-400">
                      {viewMode === 'problems'
                        ? `${subjQuestionsCount} câu`
                        : `${subjTopicsCount} CĐ`}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 truncate mt-1.5">
                    {subjMeta.activeTopic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Grade & Difficulty Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="group"
              aria-label="Lọc theo khối lớp"
            >
              {GRADE_LEVELS.map((g) => {
                const active = gradeFilter === g;
                return (
                  <button
                    key={String(g)}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setGradeFilter(g)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                      active
                        ? 'border-zinc-700 bg-zinc-800 text-zinc-100'
                        : 'border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {g === 'all' ? 'Khối 10–11–12' : `Lớp ${g}`}
                  </button>
                );
              })}
            </div>

            {viewMode === 'problems' && (
              <div
                className="flex flex-wrap items-center gap-1.5"
                role="group"
                aria-label="Lọc theo mức độ nhận thức"
              >
                {COGNITIVE_LEVELS.map((lvl) => {
                  const active = cogFilter === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setCogFilter(lvl)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                        active
                          ? 'border-sky-500/60 bg-sky-500/10 text-sky-300'
                          : 'border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {lvl === 'all' ? 'Tất cả mức độ' : lvl}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ================================================================
           * MODE A: PRACTICE CONSOLE DIRECTORY (Sorted by Topic > Difficulty Tier)
           * ================================================================ */}
          {viewMode === 'problems' ? (
            <div className="space-y-6">
              {topics
                .map((topic) => {
                  const topicQuestions = rows
                    .filter(
                      (q) =>
                        q.sourceTopic?.id === topic.id ||
                        q.topic === topic.topicName
                    )
                    .sort(
                      (a, b) =>
                        DIFFICULTY_TIER_ORDER[a.cognitiveLevel] -
                        DIFFICULTY_TIER_ORDER[b.cognitiveLevel]
                    );
                  return { topic, topicQuestions };
                })
                .filter((group) => group.topicQuestions.length > 0)
                .map(({ topic, topicQuestions }, gIdx) => (
                  <section
                    key={topic.id}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden"
                  >
                    {/* Topic Header */}
                    <div className="px-5 py-4 bg-zinc-900/70 border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                          <span className="font-mono text-zinc-300 font-medium">
                            Chuyên đề {String(gIdx + 1).padStart(2, '0')} • Lớp{' '}
                            {topic.grade}
                          </span>
                          <span>/</span>
                          <span>{topic.chapter}</span>
                        </div>
                        <h2 className="text-base sm:text-lg font-semibold text-zinc-100">
                          {topic.topicName}
                        </h2>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 shrink-0">
                        {topicQuestions.length} bài tập phân bậc
                      </span>
                    </div>

                    {/* Sorted Problems List */}
                    <ul className="divide-y divide-zinc-800/70">
                      {topicQuestions.map((q, i) => {
                        const status = solved[q.id];
                        return (
                          <li key={q.id}>
                            <button
                              type="button"
                              onClick={() => onOpen(q.id)}
                              className="w-full px-5 py-4 text-left flex items-center gap-4 hover:bg-zinc-900/80 cursor-pointer transition-colors"
                            >
                              <span className="w-7 h-7 rounded-lg bg-zinc-800/80 border border-zinc-700/50 font-mono text-xs font-medium text-zinc-400 flex items-center justify-center shrink-0">
                                {i + 1}
                              </span>

                              <span className="flex-1 min-w-0 space-y-2">
                                <span className="block text-[15px] text-zinc-200 line-clamp-2 leading-7">
                                  <MathText content={q.prompt} />
                                </span>
                                <span className="flex flex-wrap items-center gap-2">
                                  <Tag tier={q.cognitiveLevel}>
                                    {q.cognitiveLevel}
                                  </Tag>
                                  <Tag>Lớp {q.grade}</Tag>
                                  <Tag>{q.chapter}</Tag>
                                </span>
                              </span>

                              {status && (
                                <span
                                  className={`px-2.5 py-0.5 rounded-md border font-mono text-xs font-medium shrink-0 ${
                                    status === 'AC'
                                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                                      : 'border-rose-500/50 bg-rose-500/10 text-rose-300'
                                  }`}
                                >
                                  {status === 'AC' ? 'ĐÚNG' : 'CHƯA ĐÚNG'}
                                </span>
                              )}

                              <ChevronRight
                                className="w-4 h-4 text-zinc-500 shrink-0"
                                aria-hidden="true"
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
            </div>
          ) : (
            /* ================================================================
             * MODE B: COMPILED MODERN WIKIPEDIA LESSON VIEW
             * ================================================================ */
            <div className="space-y-8">
              <SubjectDiagram subject={selectedSubject} />

              {topics.map((topic) => {
                const firstQuestionId = `${topic.id}-q1`;
                return (
                  <article
                    key={topic.id}
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 space-y-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <CompiledWikiArticleView topic={topic} />

                      {/* Right Side Mini Practice Card inside Wiki View */}
                      <div className="lg:w-72 shrink-0 rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-5 space-y-4">
                        <div className="space-y-1">
                          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                            Thực hành chuyên đề
                          </p>
                          <p className="text-sm font-semibold text-zinc-100">
                            {topic.sampleQuestionTemplates.length} câu hỏi phân bậc
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {Array.from(
                            new Set(
                              topic.sampleQuestionTemplates.map(
                                (q) => q.cognitiveLevel
                              )
                            )
                          ).map((lvl) => (
                            <span
                              key={lvl}
                              className={`px-2 py-0.5 rounded-md border text-xs font-mono ${getDifficultyBadgeClasses(
                                lvl
                              )}`}
                            >
                              {lvl}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => onOpen(firstQuestionId)}
                          className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs px-4 py-2.5 rounded-lg inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>Mở Bảng luyện tập</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="max-w-[65ch]">
                      <TopicChatBox topic={topic} />
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
