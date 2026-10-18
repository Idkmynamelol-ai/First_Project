import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  Atom,
  FlaskConical,
  BookOpenCheck,
  Check,
  Terminal,
} from 'lucide-react';
import {
  PRACTICE_QUESTIONS,
  grade12Curriculum,
  grade12BySubject,
} from './data/curriculum';
import { SubjectId, GradeLevel } from './types/edu';
import { CopyableFormulaBlock } from './components/MathRenderer';
import { WorkedExampleSection, TopicChatBox } from './components/TopicChatBox';
import { SubjectDiagram } from './components/InteractiveDiagrams';

const FOCUS =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]';

const SUBJECTS: {
  id: SubjectId;
  Icon: React.FC<{ className?: string }>;
  name: string;
  blurb: string;
}[] = [
  {
    id: 'math',
    Icon: Calculator,
    name: 'Toán học 10–11–12',
    blurb:
      'Hệ BPT bậc nhất hai ẩn, Vectơ & Conic (10); Lượng giác, Dãy số CSC-CSN, Mũ - Logarit, Hình không gian (11); Khảo sát hàm số, Tích phân, Oxyz & Xác suất Bayes (12).',
  },
  {
    id: 'physics',
    Icon: Atom,
    name: 'Vật lý 10–11–12',
    blurb:
      'Động lực học & Bảo toàn năng lượng (10); Dao động điều hòa, Sóng & Điện trường (11); Vật lí nhiệt, Khí lí tưởng, Từ trường & Hạt nhân (12).',
  },
  {
    id: 'chemistry',
    Icon: FlaskConical,
    name: 'Hóa học 10–11–12',
    blurb:
      'Cấu tạo nguyên tử & Энthalpy phản ứng (10); Cân bằng hóa học, pH & Hydrocarbon - Dẫn xuất (11); Ester - Lipid, Carbohydrate, Amine - Peptide & Pin Galvani - Phức chất (12).',
  },
  {
    id: 'english',
    Icon: BookOpenCheck,
    name: 'Tiếng Anh 10–11–12',
    blurb:
      'Câu bị động & Mệnh đề quan hệ (10); Phân từ hoàn thành & Câu chẻ Cleft sentences (11); So sánh kép, Thể sai khiến Causatives, Subjunctive & Đảo ngữ (12).',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Nắm vững chuẩn GDPT 2018 (Lớp 10–11–12)',
    d: 'Tra cứu yêu cầu cần đạt, công thức LaTeX trọng tâm và ví dụ minh họa phân tích tư duy từng bước theo từng môn học.',
  },
  {
    n: '02',
    t: 'Luyện tập Ngân hàng câu hỏi & Thử thách Ngày',
    d: 'Giải bài tập chọn lọc mức độ Vận dụng – Vận dụng cao (Mục tiêu 9+) và mở khóa đáp án kèm lời giải chi tiết sau khi nộp bài.',
  },
  {
    n: '03',
    t: 'Hỏi đáp trực tiếp & Củng cố Socratic',
    d: 'Đặt câu hỏi trực tiếp trong khung chat của từng thẻ bài học (Study Card) hoặc trao đổi với Gia sư AI Socratic.',
  },
];

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-bold">
    {children}
  </p>
);

export const Landing: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('math');
  const [gradeFilter, setGradeFilter] = useState<'all' | GradeLevel>('all');
  const [done, setDone] = useState<boolean[]>(
    () => grade12Curriculum.map((_, idx) => idx < 3)
  );

  const count = done.filter(Boolean).length;
  const pct = Math.round((count / grade12Curriculum.length) * 100);
  const toggle = (i: number) =>
    setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

  const totalFormulas = grade12Curriculum.reduce(
    (acc, t) => acc + t.keyFormulasAndRules.length,
    0
  );
  const totalExamples = grade12Curriculum.filter((t) => Boolean(t.workedExample)).length;

  const stats = [
    { v: String(grade12Curriculum.length).padStart(2, '0'), l: 'chuyên đề Lớp 10–11–12 (GDPT 2018)' },
    { v: String(totalFormulas).padStart(2, '0'), l: 'công thức & quy tắc cốt lõi' },
    { v: String(totalExamples).padStart(2, '0'), l: 'ví dụ phân tích tư duy chi tiết' },
    { v: String(PRACTICE_QUESTIONS.length).padStart(2, '0'), l: 'câu hỏi chọn lọc (Mục tiêu 9+)' },
  ];

  const activeSubjectTopics = grade12BySubject[selectedSubject].filter(
    (t) => gradeFilter === 'all' || t.grade === gradeFilter
  );

  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-neutral-100 flex flex-col overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-black px-4 py-2 font-bold"
      >
        Chuyển đến nội dung chính
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <a
            href="#/"
            className={`flex items-center gap-2 h-11 font-extrabold tracking-tight ${FOCUS}`}
          >
            <Terminal className="w-4 h-4 text-sky-400" aria-hidden="true" />
            <span>Scalar</span>
          </a>
          <nav
            aria-label="Điều hướng chính"
            className="hidden md:flex items-center gap-1 text-xs"
          >
            {[
              ['Danh mục môn học', '#courses'],
              ['Cơ sở tri thức 10–11–12', '#knowledge-base'],
              ['Quy trình', '#how'],
              ['Tiến độ', '#progress'],
              ['Admin', '#/admin'],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                className={`h-11 px-3 inline-flex items-center text-neutral-300 hover:text-sky-300 hover:bg-neutral-900 ${FOCUS}`}
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#/admin"
              className={`h-10 sm:h-11 px-3 inline-flex items-center border border-neutral-800 text-neutral-300 hover:border-sky-400 hover:text-sky-300 text-xs font-mono ${FOCUS}`}
            >
              Admin
            </a>
            <a
              href="#/app"
              className={`h-10 sm:h-11 px-3.5 sm:px-4 inline-flex items-center gap-2 bg-sky-400 text-black border border-sky-300 text-xs font-bold hover:bg-sky-300 ${FOCUS}`}
            >
              Vào phòng luyện tập
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="border-b border-neutral-800 bg-grid">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-block border border-sky-400/60 bg-sky-500/15 px-3 py-1 text-xs font-bold text-sky-300">
                CHƯƠNG TRÌNH GDPT 2018 / LỚP 10 – 11 – 12 / TOÁN · LÝ · HÓA · ANH
              </p>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
                Hiểu bản chất.
                <br />
                Luyện thực chiến.
                <br />
                <span className="inline-block bg-sky-400 text-black border border-sky-300 px-2.5 mt-1.5">
                  Chinh phục mục tiêu 9+.
                </span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-300 max-w-prose">
                Tích hợp trọn bộ tóm tắt lý thuyết Lớp 10 – 11 – 12 và ngân hàng câu hỏi trọng tâm theo Chương trình GDPT 2018:{' '}
                <span className="text-sky-300 bg-sky-500/20 border-b border-sky-400 px-1 font-bold">
                  ví dụ minh họa giải thích tư duy từng bước
                </span>
                , thử thách hàng ngày (Daily PRNG) và Gia sư AI Socratic.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#/app"
                  className={`h-12 px-6 inline-flex items-center justify-center gap-2 bg-sky-400 text-black border border-sky-300 text-sm font-bold hover:bg-sky-300 ${FOCUS}`}
                >
                  Bắt đầu giải bài ({PRACTICE_QUESTIONS.length} câu chọn lọc)
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#knowledge-base"
                  className={`h-12 px-6 inline-flex items-center justify-center border border-neutral-700 text-sm font-bold hover:bg-neutral-900 hover:border-sky-400 hover:text-sky-300 ${FOCUS}`}
                >
                  Tra cứu tri thức 10–11–12
                </a>
              </div>
            </div>

            <div
              className="border border-neutral-800 bg-[#0a0a0a] text-sm"
              aria-label="Minh họa giao diện gia sư Socratic"
            >
              <div className="flex items-center justify-between px-4 h-10 border-b border-neutral-800 bg-sky-950/30 text-xs text-sky-300 font-bold">
                <span>gia-su-socratic — gdpt-2018-thpt</span>
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 border border-neutral-600" />
                  <span className="w-2.5 h-2.5 border border-neutral-600" />
                  <span className="w-2.5 h-2.5 bg-sky-400" />
                </span>
              </div>
              <div className="p-4 space-y-3 leading-relaxed">
                <p>
                  <span className="text-sky-400 font-bold">chuyên-đề&gt;</span> Vật lí nhiệt 12 • Định
                  luật I Nhiệt động lực học (ΔU = A + Q)
                </p>
                <p>
                  <span className="text-sky-300 font-bold">bạn&gt;</span> Khí nhận nhiệt 120 J và giãn nở
                  thực hiện công 80 J thì ΔU bằng 200 J hay 40 J?
                </p>
                <p className="border-l-4 border-sky-400 bg-sky-950/30 pl-3 py-1">
                  <span className="text-sky-300 font-bold">gia-sư&gt;</span> Khi hệ thực hiện công đẩy
                  pit-tông ra ngoài, công A mang dấu âm (-80 J) hay dương (+80 J)?
                </p>
                <p className="text-sky-300 font-bold">
                  &gt; kết quả: ΔU = (-80) + 120 = +40 J
                  <span
                    className="inline-block w-2 h-4 bg-sky-400 align-middle ml-1 animate-pulse"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section
          aria-label="Số liệu cơ sở tri thức GDPT 2018"
          className="border-b border-neutral-800"
        >
          <dl className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6">
            {stats.map((s) => (
              <div key={s.l} className="bg-[#0a0a0a] border border-neutral-800 p-4 sm:p-6">
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-2xl sm:text-4xl font-extrabold text-sky-300">{s.v}</dd>
                <p className="text-xs text-neutral-300 mt-1 font-bold" aria-hidden="true">
                  {s.l}
                </p>
              </div>
            ))}
          </dl>
        </section>

        {/* Courses */}
        <section
          id="courses"
          className="border-b border-neutral-800 py-12 sm:py-20"
          aria-labelledby="courses-h"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-2">
              <Label>01 / danh mục môn học lớp 10 – 11 – 12 (gdpt 2018)</Label>
              <h2
                id="courses-h"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              >
                Bốn môn học trọng tâm ôn thi Tốt nghiệp THPT
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-5">
              {SUBJECTS.map(({ id, Icon, name, blurb }, idx) => {
                const topics = grade12BySubject[id];
                const problems = PRACTICE_QUESTIONS.filter(
                  (q) => q.subject === id
                ).length;
                return (
                  <li
                    key={id}
                    className="bg-[#0a0a0a] border border-neutral-800 hover:border-sky-400/70 transition-colors p-4 sm:p-6 flex flex-col gap-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="w-11 h-11 border border-neutral-700 bg-sky-500/15 text-sky-300 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-bold text-sky-300 bg-sky-950/70 border border-sky-400/50 px-2 py-0.5">
                        {String(idx + 1).padStart(2, '0')} / GDPT 2018
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{name}</h3>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1">{blurb}</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-300 border-t border-neutral-800 pt-3 flex-1">
                      {topics.slice(0, 6).map((t) => (
                        <li key={t.id} className="flex gap-2">
                          <span
                            className="text-sky-400 font-bold shrink-0"
                            aria-hidden="true"
                          >
                            ›
                          </span>
                          <span>
                            <strong className="text-sky-300">
                              [Lớp {t.grade}] {t.chapter}:
                            </strong>{' '}
                            {t.topicName}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs flex items-center justify-between border-t border-neutral-800 pt-3">
                      <span className="text-neutral-300 font-bold">
                        {topics.length} chuyên đề • {problems} câu hỏi chọn lọc
                      </span>
                      <a
                        href="#/app"
                        className={`inline-flex items-center gap-1 h-9 px-3 border border-sky-400/50 bg-sky-500/15 text-sky-300 font-bold hover:bg-sky-400 hover:text-black ${FOCUS}`}
                      >
                        Luyện tập{' '}
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Interactive Grade 10-11-12 Knowledge Base Explorer */}
        <section
          id="knowledge-base"
          className="border-b border-neutral-800 py-12 sm:py-20"
          aria-labelledby="kb-h"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="space-y-2">
                <Label>02 / cơ sở tri thức gdpt 2018 (lớp 10 – 11 – 12)</Label>
                <h2
                  id="kb-h"
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                >
                  Thẻ bài học (Study Cards), Trực quan hóa SGK &amp; Ví dụ tư duy
                </h2>
              </div>

              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                role="tablist"
                aria-label="Chọn môn học để xem cơ sở tri thức"
              >
                {SUBJECTS.map((s) => {
                  const active = selectedSubject === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedSubject(s.id)}
                      className={`min-h-[42px] px-3 border text-xs font-bold cursor-pointer transition-colors ${FOCUS} ${
                        active
                          ? 'bg-sky-400 text-black border-sky-300'
                          : 'border-neutral-800 text-neutral-200 bg-[#111111] hover:border-sky-400 hover:text-sky-300'
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bộ lọc khối lớp 10 - 11 - 12 */}
            <div className="flex flex-wrap gap-1.5">
              {(['all', 12, 11, 10] as const).map((g) => {
                const active = gradeFilter === g;
                return (
                  <button
                    key={String(g)}
                    type="button"
                    onClick={() => setGradeFilter(g)}
                    className={`h-9 px-3 border font-mono text-xs cursor-pointer transition-colors ${
                      active
                        ? 'border-sky-400 text-sky-300 bg-sky-950/60 font-bold'
                        : 'border-neutral-800 text-neutral-300 bg-[#111111] hover:border-neutral-600'
                    }`}
                  >
                    {g === 'all' ? 'Tất cả khối (10–11–12)' : `Khối Lớp ${g}`}
                  </button>
                );
              })}
            </div>

            {/* Đa dạng hóa trực quan hóa theo dữ liệu chuẩn SGK */}
            <SubjectDiagram subject={selectedSubject} />

            <div className="grid grid-cols-1 gap-6">
              {activeSubjectTopics.map((topic) => (
                /* STUDY CARD ONLY: Grey-White border border-[#D4D4D8]/70 */
                <article
                  key={topic.id}
                  className="bg-[#0a0a0a] border border-[#D4D4D8]/70 p-4 sm:p-6 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-4">
                    <div className="space-y-1 border-b border-neutral-800 pb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/20 border border-sky-400/60 px-2 py-0.5">
                          Lớp {topic.grade} • {topic.chapter}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-white pt-1">
                        {topic.topicName}
                      </h3>
                    </div>

                    <div className="space-y-1.5 border border-neutral-800 bg-[#111111] p-3.5 sm:p-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                        Yêu cầu cần đạt (Chuẩn kiến thức trọng tâm Lớp {topic.grade}):
                      </p>
                      <ul className="space-y-1.5 text-sm text-neutral-100 font-sans leading-relaxed">
                        {topic.learningObjectives.map((obj, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-sky-400 font-bold">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {topic.keyFormulasAndRules[0] && (
                      <CopyableFormulaBlock
                        title={topic.keyFormulasAndRules[0].name}
                        latex={topic.keyFormulasAndRules[0].latexOrRule}
                        compact={true}
                      />
                    )}

                    {/* Ví dụ minh họa toàn diện & Phân tích tư duy */}
                    <WorkedExampleSection topic={topic} />

                    {/* Khung chat hỏi đáp chuyên đề */}
                    <TopicChatBox topic={topic} />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-800 pt-3 text-xs">
                    <span className="text-sky-300 font-bold">
                      Mức độ câu hỏi:{' '}
                      {Array.from(
                        new Set(topic.sampleQuestionTemplates.map((q) => q.cognitiveLevel))
                      ).join(', ')}
                    </span>
                    <a
                      href="#/app"
                      className={`inline-flex items-center gap-1 px-3 py-1.5 border border-sky-300 bg-sky-400 text-black font-bold hover:bg-sky-300 ${FOCUS}`}
                    >
                      Giải {topic.sampleQuestionTemplates.length} câu hỏi mẫu{' '}
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="border-b border-neutral-800 py-12 sm:py-20"
          aria-labelledby="how-h"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-2">
              <Label>03 / quy trình học tập</Label>
              <h2
                id="how-h"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              >
                Ba bước làm chủ kỳ thi Tốt nghiệp THPT
              </h2>
            </div>
            <ol className="grid md:grid-cols-3 gap-5">
              {STEPS.map((s) => (
                <li key={s.n} className="bg-[#0a0a0a] border border-neutral-800 p-5 sm:p-6 space-y-3">
                  <p className="text-4xl font-extrabold text-sky-400">
                    {s.n}
                  </p>
                  <h3 className="font-bold text-white">{s.t}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Progress demo across all topics */}
        <section
          id="progress"
          className="py-12 sm:py-20"
          aria-labelledby="progress-h"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <Label>04 / theo dõi tiến độ chương trình thpt</Label>
              <h2
                id="progress-h"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              >
                Theo dõi toàn bộ {grade12Curriculum.length} chuyên đề Lớp 10–11–12
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-prose">
                Đánh dấu các chuyên đề GDPT 2018 bạn đã ôn luyện xong để kiểm soát tiến độ trước
                kỳ thi Tốt nghiệp THPT.
              </p>
              <a
                href="#/app"
                className={`h-12 px-6 inline-flex items-center gap-2 bg-sky-400 text-black border border-sky-300 text-sm font-bold hover:bg-sky-300 ${FOCUS}`}
              >
                Mở không gian luyện tập
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="border border-neutral-800 bg-[#0a0a0a]">
              <div className="flex items-center justify-between px-4 h-10 border-b border-neutral-800 bg-sky-950/30 text-xs text-sky-300 font-bold">
                <span>LỘ TRÌNH GDPT 2018 / LỚP 10–11–12</span>
                <span className="border border-sky-400/50 bg-sky-500/20 px-2 py-0.5">
                  {count}/{grade12Curriculum.length} CHUYÊN ĐỀ
                </span>
              </div>
              <div className="p-4 sm:p-5 space-y-5">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-4xl font-extrabold text-sky-300">{pct}%</p>
                  <p className="text-xs text-neutral-300 font-bold">
                    Đã hoàn thành {count}/{grade12Curriculum.length} chuyên đề
                  </p>
                </div>
                <div
                  className="h-3 border border-neutral-800 bg-[#111111]"
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Tiến độ hoàn thành chuyên đề"
                >
                  <div
                    className="h-full bg-sky-400 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <ul className="max-h-80 overflow-y-auto divide-y divide-neutral-800 border border-neutral-800">
                  {grade12Curriculum.map((t, i) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={done[i]}
                        onClick={() => toggle(i)}
                        className={`w-full min-h-12 px-3 py-2 bg-[#0a0a0a] hover:bg-neutral-900 flex items-center gap-3 text-left text-xs sm:text-sm cursor-pointer ${FOCUS}`}
                      >
                        <span
                          className={`w-5 h-5 border border-neutral-600 flex items-center justify-center shrink-0 ${
                            done[i] ? 'bg-sky-400 text-black border-sky-300' : ''
                          }`}
                          aria-hidden="true"
                        >
                          {done[i] && (
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          )}
                        </span>
                        <span
                          className={
                            done[i] ? 'text-neutral-500 line-through' : 'text-white'
                          }
                        >
                          <strong className="text-sky-300">
                            [{t.subject.toUpperCase()} {t.grade}]
                          </strong>{' '}
                          {t.topicName}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-400">
        Scalar / Cơ sở tri thức GDPT 2018 (Lớp 10–11–12) &amp; Gia sư AI Socratic
      </footer>
    </div>
  );
};
