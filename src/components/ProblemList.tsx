import React, { useEffect, useState } from 'react';
import {
  ChevronRight,
  BookOpen,
  ListChecks,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { SubjectId, CognitiveLevel, GradeLevel } from '../types/edu';
import {
  SUBJECTS_META,
  PRACTICE_QUESTIONS,
  grade12BySubject,
} from '../data/curriculum';
import { Tag, subjectColor } from './Tag';
import { CopyableFormulaBlock, RichTextWithMath } from './MathRenderer';
import { WorkedExampleSection, TopicChatBox } from './TopicChatBox';
import { SubjectDiagram } from './InteractiveDiagrams';
import { DailyChallengeView } from './DailyChallengeView';
import { AdminTab } from './AdminTab';

interface ProblemListProps {
  solved: Record<string, 'AC' | 'WA'>;
  onOpen: (id: string) => void;
  streak: number;
  onStreakUpdate: (nextStreak: number, isCorrect: boolean) => void;
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
}) => {
  const [viewMode, setViewMode] = useState<
    'daily' | 'problems' | 'knowledge' | 'admin'
  >(() => (window.location.hash === '#/admin' ? 'admin' : 'problems'));
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('math');
  const [gradeFilter, setGradeFilter] = useState<'all' | GradeLevel>('all');
  const [cogFilter, setCogFilter] = useState<'all' | CognitiveLevel>('all');

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
    <div className="space-y-5">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-neutral-800 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-bold mb-1">
            CHƯƠNG TRÌNH GDPT 2018 • LỚP 10 – 11 – 12
          </p>
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
            {viewMode === 'daily'
              ? 'Thử thách Hàng ngày (Daily Deterministic Engine)'
              : viewMode === 'admin'
              ? 'Quản trị Hệ thống: Kho Nguồn Đề THPTQG • HSA • TSA (2025–2026)'
              : viewMode === 'problems'
              ? `${SUBJECTS_META[selectedSubject].vnName}: Tuyển chọn câu hỏi trọng tâm (${rows.length} câu)`
              : `${SUBJECTS_META[selectedSubject].vnName}: Cơ sở tri thức chuyên đề (${topics.length} chuyên đề)`}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            {viewMode === 'admin' ? (
              <>
                Tự động thu thập & lưu trữ các liên kết đề thi thử{' '}
                <span className="text-sky-300 bg-sky-500/20 border-b border-sky-400 px-1 font-bold">
                  THPTQG 2026, HSA 2026, TSA 2026
                </span>{' '}
                (kèm năm 2025) có PDF miễn phí hoặc cấu trúc hiển thị rõ cho Toán Học, Vật Lí, Hóa Học.
              </>
            ) : (
              <>
                Tổ chức chuyên đề theo từng môn học chuẩn{' '}
                <span className="text-sky-300 bg-sky-500/20 border-b border-sky-400 px-1 font-bold">
                  4 mức độ nhận thức
                </span>{' '}
                (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao) — Mở khóa lời giải chi tiết sau khi hoàn thành.
              </>
            )}
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 border border-neutral-800 bg-[#0A0A0A] shrink-0"
          role="tablist"
          aria-label="Chế độ học tập"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'daily'}
            onClick={() => setViewMode('daily')}
            className={`min-h-[44px] px-3 text-xs font-bold inline-flex items-center justify-center gap-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              viewMode === 'daily'
                ? 'bg-sky-400 text-black'
                : 'text-neutral-200 hover:text-sky-300'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Thử thách Ngày</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'problems'}
            onClick={() => setViewMode('problems')}
            className={`min-h-[44px] px-3 text-xs font-bold inline-flex items-center justify-center gap-2 border-l border-neutral-800 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              viewMode === 'problems'
                ? 'bg-sky-400 text-black'
                : 'text-neutral-200 hover:text-sky-300'
            }`}
          >
            <ListChecks className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Ngân hàng đề ({PRACTICE_QUESTIONS.length})</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'knowledge'}
            onClick={() => setViewMode('knowledge')}
            className={`min-h-[44px] px-3 text-xs font-bold inline-flex items-center justify-center gap-2 border-t sm:border-t-0 sm:border-l border-neutral-800 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              viewMode === 'knowledge'
                ? 'bg-sky-400 text-black'
                : 'text-neutral-200 hover:text-sky-300'
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Cơ sở tri thức</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'admin'}
            onClick={() => setViewMode('admin')}
            className={`min-h-[44px] px-3 text-xs font-bold inline-flex items-center justify-center gap-2 border-t sm:border-t-0 border-l border-neutral-800 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              viewMode === 'admin'
                ? 'bg-sky-400 text-black'
                : 'text-neutral-200 hover:text-sky-300'
            }`}
          >
            <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
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
        <>
          {/* Bộ chọn 4 môn học (Đã bỏ danh mục ALL, chia theo từng môn rõ ràng) */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-2"
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
                  className={`min-h-[54px] p-3 border text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    active
                      ? 'bg-sky-950/50 border-sky-400 text-white'
                      : 'bg-[#111111] border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono text-xs sm:text-sm font-bold">
                      {subjMeta.vnName}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-1.5 py-0.5 border ${
                        active
                          ? 'border-sky-400/60 bg-sky-500/20 text-sky-300 font-bold'
                          : 'border-neutral-800 bg-[#0A0A0A] text-neutral-400'
                      }`}
                    >
                      {viewMode === 'problems'
                        ? `${subjQuestionsCount} câu`
                        : `${subjTopicsCount} CĐ`}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 truncate mt-1">
                    {subjMeta.activeTopic}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Bộ lọc Khối lớp (10 - 11 - 12) & Mức độ nhận thức */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5">
            <div
              className="flex flex-wrap gap-1.5"
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
                    className={`min-h-[38px] px-3 border font-mono text-xs cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      active
                        ? 'border-sky-400 text-sky-300 bg-sky-950/60 font-bold'
                        : 'border-neutral-800 text-neutral-300 bg-[#111111] hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    {g === 'all' ? 'Khối 10–11–12' : `Lớp ${g}`}
                  </button>
                );
              })}
            </div>

            {viewMode === 'problems' && (
              <div
                className="flex flex-wrap gap-1.5"
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
                      className={`min-h-[38px] px-3 border font-mono text-xs cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                        active
                          ? 'border-sky-400 text-sky-300 bg-sky-950/60 font-bold'
                          : 'border-neutral-800 text-neutral-300 bg-[#111111] hover:border-neutral-600 hover:text-white'
                      }`}
                    >
                      {lvl === 'all' ? 'Mọi mức độ' : lvl}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {viewMode === 'problems' ? (
            <div className="space-y-4">
              {/* Nhóm câu hỏi theo từng chuyên đề của môn học đang chọn */}
              {topics
                .map((topic) => {
                  const topicQuestions = rows.filter(
                    (q) => q.sourceTopic?.id === topic.id || q.topic === topic.topicName
                  );
                  return { topic, topicQuestions };
                })
                .filter((group) => group.topicQuestions.length > 0)
                .map(({ topic, topicQuestions }, gIdx) => (
                  <section
                    key={topic.id}
                    className="border border-neutral-800 bg-[#111111] overflow-hidden"
                  >
                    <div className="px-3.5 sm:px-4 py-3 bg-[#0A0A0A] border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-mono font-bold text-sky-300 bg-sky-950/60 border border-sky-400/40 px-2 py-0.5">
                            Chuyên đề {String(gIdx + 1).padStart(2, '0')} • Lớp {topic.grade}
                          </span>
                          <span className="text-[11px] font-mono text-neutral-400">
                            {topic.chapter}
                          </span>
                        </div>
                        <h2 className="text-sm sm:text-base font-bold text-white">
                          {topic.topicName}
                        </h2>
                      </div>
                      <span className="text-xs font-mono text-sky-300 shrink-0">
                        {topicQuestions.length} câu hỏi chọn lọc
                      </span>
                    </div>

                    <ul className="divide-y divide-neutral-800">
                      {topicQuestions.map((q, i) => {
                        const status = solved[q.id];
                        return (
                          <li key={q.id}>
                            <button
                              type="button"
                              onClick={() => onOpen(q.id)}
                              className="w-full min-h-[72px] p-3.5 sm:p-4 text-left flex items-center gap-3 hover:bg-sky-950/25 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
                            >
                              <span className="w-7 font-mono text-xs font-bold text-sky-300 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <span className="flex-1 min-w-0 space-y-1.5">
                                <span className="block text-sm sm:text-[15px] text-white line-clamp-2 leading-relaxed font-sans">
                                  <RichTextWithMath text={q.prompt} />
                                </span>
                                <span className="flex flex-wrap gap-1.5 pt-0.5">
                                  <Tag>GDPT 2018</Tag>
                                  <Tag>Lớp {q.grade}</Tag>
                                  <Tag color={subjectColor(q.subject)}>
                                    {SUBJECTS_META[q.subject].vnName}
                                  </Tag>
                                  <Tag>{q.cognitiveLevel}</Tag>
                                </span>
                              </span>
                              <span
                                className="font-mono text-xs shrink-0 w-12 text-right font-bold"
                                style={{
                                  color:
                                    status === 'AC'
                                      ? '#10B981'
                                      : status === 'WA'
                                      ? '#F43F5E'
                                      : '#38BDF8',
                                }}
                              >
                                {status === 'AC'
                                  ? 'ĐÚNG'
                                  : status === 'WA'
                                  ? 'SAI'
                                  : '--'}
                              </span>
                              <ChevronRight
                                className="w-4 h-4 text-neutral-400 shrink-0"
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
            <div className="space-y-6">
              {/* Trực quan hóa đa dạng theo môn học đang chọn */}
              <SubjectDiagram subject={selectedSubject} />

              {topics.map((topic, idx) => {
                const firstQuestionId = `${topic.id}-q1`;
                return (
                  /* STUDY CARD: Uses Grey-White border border-[#D4D4D8]/70 */
                  <article
                    key={topic.id}
                    className="border border-[#D4D4D8]/70 bg-[#111111] p-4 sm:p-5 space-y-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-neutral-800 pb-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap gap-1.5">
                          <Tag>#{String(idx + 1).padStart(2, '0')}</Tag>
                          <Tag>
                            {SUBJECTS_META[topic.subject].vnName} {topic.grade}
                          </Tag>
                          <Tag>{topic.chapter}</Tag>
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-white">
                          {topic.topicName}
                        </h2>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpen(firstQuestionId)}
                        className="h-10 px-4 bg-sky-400 text-black border border-sky-300 text-xs font-bold hover:bg-sky-300 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                      >
                        Luyện tập chuyên đề (
                        {topic.sampleQuestionTemplates.length} câu)
                      </button>
                    </div>

                    {/* Yêu cầu cần đạt (learningObjectives) */}
                    <div className="space-y-1.5 border border-neutral-800 bg-[#0A0A0A] p-3.5 sm:p-4">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                        Yêu cầu cần đạt (GDPT 2018 • Lớp {topic.grade})
                      </h3>
                      <ul className="space-y-1.5 text-sm text-neutral-100 font-sans leading-relaxed">
                        {topic.learningObjectives.map((obj, oIdx) => (
                          <li key={oIdx} className="flex gap-2">
                            <span className="text-sky-400 font-bold">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Công thức & Quy tắc trọng tâm */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                        Công thức &amp; Quy tắc trọng tâm
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {topic.keyFormulasAndRules.map((rule, rIdx) => (
                          <div key={rIdx} className="space-y-1.5">
                            <CopyableFormulaBlock
                              title={rule.name}
                              latex={rule.latexOrRule}
                              compact={true}
                            />
                            <p className="text-xs sm:text-sm font-sans text-sky-100 bg-sky-950/30 border-l-2 border-sky-400 px-3 py-1.5 leading-relaxed">
                              {rule.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ví dụ minh họa toàn diện & Phân tích tư duy */}
                    <WorkedExampleSection topic={topic} />

                    {/* Khung chat hỏi đáp chuyên đề */}
                    <TopicChatBox topic={topic} />
                  </article>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};
