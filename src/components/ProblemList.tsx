import React, { useEffect, useMemo, useState } from 'react';
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
import { DocumentQuizScanner } from './DocumentQuizScanner';
import { PracticeQuestion } from '../types/edu';

interface ProblemListProps {
  solved: Record<string, 'AC' | 'WA'>;
  onOpen: (id: string) => void;
  streak: number;
  onStreakUpdate: (nextStreak: number, isCorrect: boolean) => void;
  externalCogFilter?: 'all' | CognitiveLevel;
  onExternalCogFilterChange?: (lvl: 'all' | CognitiveLevel) => void;
  onStartCustomQuiz?: (questions: PracticeQuestion[], startId: string) => void;
  onOpenByok?: () => void;
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
  onStartCustomQuiz,
  onOpenByok,
}) => {
  const [viewMode, setViewMode] = useState<
    'daily' | 'problems' | 'knowledge' | 'scanner' | 'admin'
  >(() =>
    window.location.hash === '#/admin'
      ? 'admin'
      : window.location.hash === '#/scanner'
      ? 'scanner'
      : 'problems'
  );
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('chemistry');
  const [gradeFilter, setGradeFilter] = useState<'all' | GradeLevel>('all');
  const [localCogFilter, setLocalCogFilter] = useState<
    'all' | CognitiveLevel
  >('all');
  const [topicFilter, setTopicFilter] = useState<'all' | string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const subjectQuestions = useMemo(() => {
    return PRACTICE_QUESTIONS.filter((q) => q.subject === selectedSubject);
  }, [selectedSubject]);

  const allSubjectTopics = grade12BySubject[selectedSubject];
  const topics = allSubjectTopics.filter(
    (t) => gradeFilter === 'all' || t.grade === gradeFilter
  );

  const filteredQuestions = useMemo(() => {
    return subjectQuestions
      .filter((q) => {
        if (gradeFilter !== 'all' && q.grade !== gradeFilter) return false;
        if (cogFilter !== 'all' && q.cognitiveLevel !== cogFilter) return false;
        if (
          topicFilter !== 'all' &&
          q.sourceTopic?.id !== topicFilter &&
          q.topic !== topicFilter
        ) {
          return false;
        }
        if (searchQuery.trim()) {
          const s = searchQuery.toLowerCase();
          const matchPrompt = q.prompt.toLowerCase().includes(s);
          const matchTopic = q.topic.toLowerCase().includes(s);
          const matchChapter = q.chapter ? q.chapter.toLowerCase().includes(s) : false;
          if (!matchPrompt && !matchTopic && !matchChapter) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (b.grade !== a.grade) return b.grade - a.grade;
        const topicA = a.sourceTopic?.id ?? a.topic;
        const topicB = b.sourceTopic?.id ?? b.topic;
        if (topicA !== topicB) return topicA.localeCompare(topicB);
        return (
          DIFFICULTY_TIER_ORDER[a.cognitiveLevel] -
          DIFFICULTY_TIER_ORDER[b.cognitiveLevel]
        );
      });
  }, [subjectQuestions, gradeFilter, cogFilter, topicFilter, searchQuery]);

  const totalPages =
    pageSize === -1
      ? 1
      : Math.max(1, Math.ceil(filteredQuestions.length / pageSize));

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedSubject,
    gradeFilter,
    cogFilter,
    topicFilter,
    searchQuery,
    pageSize,
  ]);

  const displayedQuestions = useMemo(() => {
    if (pageSize === -1) return filteredQuestions;
    const start = (currentPage - 1) * pageSize;
    return filteredQuestions.slice(start, start + pageSize);
  }, [filteredQuestions, currentPage, pageSize]);

  const solvedStats = useMemo(() => {
    let ac = 0;
    let wa = 0;
    filteredQuestions.forEach((q) => {
      if (solved[q.id] === 'AC') ac++;
      else if (solved[q.id] === 'WA') wa++;
    });
    return { ac, wa, total: filteredQuestions.length };
  }, [filteredQuestions, solved]);

  return (
    <div className="space-y-6">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-zinc-800/80 pb-5">
        <div className="space-y-1.5">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            ÔN THI TRỌNG TÂM • LỚP 10 – 12
          </p>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            {viewMode === 'daily'
              ? 'Thử thách mỗi ngày (4 môn thi)'
              : viewMode === 'admin'
              ? 'Kho đề thi THPT, HSA & TSA'
              : viewMode === 'scanner'
              ? 'Tạo bài tập từ ảnh đề thi'
              : viewMode === 'problems'
              ? `${SUBJECTS_META[selectedSubject].vnName}: Bài tập (${filteredQuestions.length} câu)`
              : `${SUBJECTS_META[selectedSubject].vnName}: Lý thuyết (${topics.length} chuyên đề)`}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
            {viewMode === 'admin' ? (
              <>
                Tổng hợp liên kết đề thi thử THPTQG, HSA, TSA 2025–2026 kèm file PDF và barem chuẩn.
              </>
            ) : viewMode === 'scanner' ? (
              <>
                Tải ảnh đề bài để tạo bài trắc nghiệm tương tác và rèn luyện trực tiếp.
              </>
            ) : viewMode === 'daily' ? (
              <>
                Mỗi ngày một bộ câu hỏi chọn lọc giúp rèn phản xạ đọc đề và tư duy giải nhanh.
              </>
            ) : viewMode === 'problems' ? (
              <>
                Bài tập bám sát 4 mức độ nhận thức: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao.
              </>
            ) : (
              <>
                Tóm tắt lý thuyết, công thức then chốt và sơ đồ tư duy theo chuẩn GDPT 2018.
              </>
            )}
          </p>
        </div>

        {/* Segmented Mode Pill Bar */}
        <div
          className="bg-zinc-900/90 border border-zinc-800 p-1 rounded-xl flex items-center gap-1 shrink-0 overflow-x-auto max-w-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]"
          role="tablist"
          aria-label="Chế độ học tập"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'problems'}
            onClick={() => setViewMode('problems')}
            className={`h-9 px-3.5 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 flex items-center justify-center ${
              viewMode === 'problems'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Bài tập ({PRACTICE_QUESTIONS.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'knowledge'}
            onClick={() => setViewMode('knowledge')}
            className={`h-9 px-3.5 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 flex items-center justify-center ${
              viewMode === 'knowledge'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Lý thuyết</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'daily'}
            onClick={() => setViewMode('daily')}
            className={`h-9 px-3.5 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 flex items-center justify-center ${
              viewMode === 'daily'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Đề hôm nay</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'scanner'}
            onClick={() => setViewMode('scanner')}
            className={`h-9 px-3.5 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 flex items-center justify-center ${
              viewMode === 'scanner'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700 text-sky-400'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Tạo đề từ ảnh</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'admin'}
            onClick={() => setViewMode('admin')}
            className={`h-9 px-3.5 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap shrink-0 flex items-center justify-center ${
              viewMode === 'admin'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Kho đề thi</span>
          </button>
        </div>
      </div>

      {viewMode === 'admin' ? (
        <AdminTab />
      ) : viewMode === 'scanner' ? (
        <DocumentQuizScanner
          onStartQuiz={(questions, startId) => {
            if (onStartCustomQuiz) {
              onStartCustomQuiz(questions, startId);
            } else {
              onOpen(startId);
            }
          }}
          onOpenByok={onOpenByok}
        />
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
                      ? 'bg-zinc-850 border-sky-500/60 text-zinc-100 shadow-[0_2px_8px_rgba(56,189,248,0.15),inset_0_1px_0_rgba(255,255,255,0.06)]'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:bg-zinc-850/60 hover:text-zinc-200 shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
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
                  <p className="text-xs text-zinc-400 truncate mt-1.5">
                    {subjMeta.activeTopic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Grade & Difficulty Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div
              className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 sm:flex-wrap"
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
                    className={`h-9 px-3.5 rounded-lg border text-xs font-medium cursor-pointer transition-all shrink-0 whitespace-nowrap flex items-center justify-center ${
                      active
                        ? 'border-zinc-700 bg-zinc-800 text-zinc-100 shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]'
                        : 'border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {g === 'all' ? 'Khối 10–11–12' : `Lớp ${g}`}
                  </button>
                );
              })}
            </div>

            {viewMode === 'problems' && (
              <div
                className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 sm:flex-wrap"
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
                      className={`h-9 px-3.5 rounded-lg border text-xs font-medium cursor-pointer transition-all shrink-0 whitespace-nowrap flex items-center justify-center ${
                        active
                          ? 'border-sky-500/60 bg-sky-500/15 text-sky-200 shadow-[0_0_10px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] font-semibold'
                          : 'border-zinc-800/80 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
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
           * MODE A: STACKED UNIFIED PRACTICE QUESTIONS LIST
           * ================================================================ */}
          {viewMode === 'problems' ? (
            <div className="space-y-4">
              {/* Search & Topic Selector Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm bài tập, công thức..."
                      className="w-full h-9 px-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-700"
                    />
                  </div>

                  <select
                    value={topicFilter}
                    onChange={(e) => setTopicFilter(e.target.value)}
                    className="h-9 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:outline-none focus:border-zinc-700 max-w-[220px] truncate cursor-pointer"
                  >
                    <option value="all">Tất cả chuyên đề ({topics.length})</option>
                    {topics.map((t) => (
                      <option key={t.id} value={t.id}>
                        Lớp {t.grade} • {t.topicName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-zinc-400">Hiển thị:</span>
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="h-9 px-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:outline-none focus:border-zinc-700 cursor-pointer"
                  >
                    <option value={25}>25 câu</option>
                    <option value={50}>50 câu</option>
                    <option value={100}>100 câu</option>
                    <option value={-1}>Tất cả</option>
                  </select>
                </div>
              </div>

              {/* Stacked Unified Questions Container */}
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden">
                {/* Top Bar inside Container */}
                <div className="px-5 py-3.5 bg-zinc-900/70 border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-zinc-100 text-sm">
                      Danh sách bài tập ({filteredQuestions.length} câu)
                    </span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {pageSize === -1
                        ? `Hiển thị tất cả ${filteredQuestions.length} câu`
                        : `Hiển thị ${(currentPage - 1) * pageSize + 1}–${Math.min(
                            currentPage * pageSize,
                            filteredQuestions.length
                          )} trong tổng ${filteredQuestions.length} câu`}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-emerald-400 font-medium">
                      ĐÚNG (AC): {solvedStats.ac}
                    </span>
                    <span className="text-rose-400 font-medium">
                      CHƯA ĐÚNG (WA): {solvedStats.wa}
                    </span>
                  </div>
                </div>

                {/* Stacked Rows */}
                {displayedQuestions.length === 0 ? (
                  <div className="p-12 text-center text-sm text-zinc-400 space-y-2">
                    <p>Không tìm thấy bài tập nào phù hợp với bộ lọc hiện tại.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setGradeFilter('all');
                        setCogFilter('all');
                        setTopicFilter('all');
                        setSearchQuery('');
                      }}
                      className="text-xs text-sky-400 hover:underline cursor-pointer"
                    >
                      Đặt lại tất cả bộ lọc
                    </button>
                  </div>
                ) : (
                  <ul className="divide-y divide-zinc-800/70">
                    {displayedQuestions.map((q, i) => {
                      const globalNumber =
                        pageSize === -1
                          ? i + 1
                          : (currentPage - 1) * pageSize + i + 1;
                      const status = solved[q.id];

                      return (
                        <li key={q.id}>
                          <button
                            type="button"
                            onClick={() => onOpen(q.id)}
                            className="w-full px-5 py-4 text-left flex items-start sm:items-center gap-4 hover:bg-zinc-850/70 cursor-pointer transition-colors"
                          >
                            <span className="w-8 h-8 rounded-lg bg-zinc-850 border border-zinc-700 font-mono text-xs font-bold text-zinc-100 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                              #{globalNumber}
                            </span>

                            <span className="flex-1 min-w-0 space-y-1.5">
                              <span className="block text-[15px] text-zinc-100 line-clamp-2 leading-7">
                                <MathText content={q.prompt} />
                              </span>
                              <span className="flex flex-wrap items-center gap-2">
                                <Tag tier={q.cognitiveLevel}>
                                  {q.cognitiveLevel}
                                </Tag>
                                <Tag>Lớp {q.grade}</Tag>
                                <Tag>{q.topic}</Tag>
                                {q.chapter && (
                                  <span className="text-[11px] font-mono text-zinc-400">
                                    {q.chapter}
                                  </span>
                                )}
                              </span>
                            </span>

                            <div className="shrink-0 flex items-center gap-3 self-center">
                              {status && (
                                <span
                                  className={`px-2.5 py-0.5 rounded-md border font-mono text-xs font-medium ${
                                    status === 'AC'
                                      ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                                      : 'border-rose-500/50 bg-rose-500/10 text-rose-300'
                                  }`}
                                >
                                  {status === 'AC' ? 'ĐÚNG' : 'CHƯA ĐÚNG'}
                                </span>
                              )}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* Pagination Bar */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2 pt-2">
                  <span className="text-xs text-zinc-400 font-mono">
                    Trang {currentPage} / {totalPages} ({filteredQuestions.length}{' '}
                    câu)
                  </span>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      disabled={currentPage <= 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="h-8 px-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 disabled:opacity-40 text-xs font-medium cursor-pointer disabled:cursor-not-allowed transition-colors"
                    >
                      <span>Trước</span>
                    </button>

                    {/* Quick page numbers */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                      let pageNum = idx + 1;
                      if (totalPages > 5 && currentPage > 3) {
                        pageNum = Math.min(totalPages, currentPage - 2 + idx);
                      }
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 rounded-lg text-xs font-mono font-medium cursor-pointer transition-colors ${
                            currentPage === pageNum
                              ? 'bg-zinc-100 text-zinc-950 font-semibold'
                              : 'border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      disabled={currentPage >= totalPages}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      className="h-8 px-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 disabled:opacity-40 text-xs font-medium cursor-pointer disabled:cursor-not-allowed transition-colors"
                    >
                      <span>Tiếp</span>
                    </button>
                  </div>
                </div>
              )}
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
                            Bài tập theo chuyên đề
                          </p>
                          <p className="text-sm font-semibold text-zinc-100">
                            {topic.sampleQuestionTemplates.length} câu hỏi theo mức độ
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
                          className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs px-4 py-2.5 rounded-lg inline-flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <span>Luyện tập chuyên đề này</span>
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
