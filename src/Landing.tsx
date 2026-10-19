import React, { useState } from 'react';
import {
  PRACTICE_QUESTIONS,
  grade12Curriculum,
  grade12BySubject,
} from './data/curriculum';
import { SubjectId, GradeLevel } from './types/edu';
import { CompiledWikiArticleView, TopicChatBox } from './components/TopicChatBox';
import { SubjectDiagram } from './components/InteractiveDiagrams';
import { getDifficultyBadgeClasses } from './components/Tag';

const FOCUS =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950';

const SUBJECTS: {
  id: SubjectId;
  name: string;
  blurb: string;
}[] = [
  {
    id: 'chemistry',
    name: 'Hóa học 10–11–12',
    blurb:
      'Cấu tạo nguyên tử & Enthalpy phản ứng (10); Cân bằng hóa học, pH & Hydrocarbon (11); Ester – Lipid, Carbohydrate, Amine – Peptide & Pin Galvani – Phức chất (12).',
  },
  {
    id: 'math',
    name: 'Toán học 10–11–12',
    blurb:
      'Hệ BPT bậc nhất hai ẩn, Vectơ & Conic (10); Lượng giác, Dãy số CSC-CSN, Mũ - Logarit, Hình không gian (11); Khảo sát hàm số, Tích phân, Oxyz & Xác suất Bayes (12).',
  },
  {
    id: 'physics',
    name: 'Vật lý 10–11–12',
    blurb:
      'Động lực học & Bảo toàn năng lượng (10); Dao động điều hòa, Sóng & Điện trường (11); Vật lí nhiệt, Khí lí tưởng, Từ trường & Hạt nhân (12).',
  },
  {
    id: 'english',
    name: 'Tiếng Anh 10–11–12',
    blurb:
      'Câu bị động & Mệnh đề quan hệ (10); Phân từ hoàn thành & Câu chẻ Cleft sentences (11); So sánh kép, Thể sai khiến Causatives, Subjunctive & Đảo ngữ (12).',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Nắm chắc khái niệm và công thức cốt lõi',
    d: 'Mỗi bài học được tóm tắt mạch lạc: làm rõ bản chất lý thuyết, nêu bật công thức then chốt và phân tích ví dụ giải mẫu từng bước.',
  },
  {
    n: '02',
    t: 'Luyện bài tập từ cơ bản đến nâng cao',
    d: 'Rèn luyện phản xạ qua 4 mức độ: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao. Hỗ trợ phím tắt A–D / 1–4 và xem lời giải ngay sau khi chọn.',
  },
  {
    n: '03',
    t: 'Nhận gợi ý tư duy khi gặp câu hỏi khó',
    d: 'Trợ lý học tập đưa ra gợi ý từng bước thay vì giải hộ, giúp bạn tự tìm ra đáp án, hiểu sâu bản chất và nhớ bài lâu hơn.',
  },
];

export const Landing: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('chemistry');
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
  const totalExamples = grade12Curriculum.filter((t) =>
    Boolean(t.workedExample)
  ).length;

  const stats = [
    {
      v: String(grade12Curriculum.length).padStart(2, '0'),
      l: 'chuyên đề trọng tâm Lớp 10–12',
    },
    {
      v: String(totalFormulas).padStart(2, '0'),
      l: 'công thức & định luật then chốt',
    },
    {
      v: String(totalExamples).padStart(2, '0'),
      l: 'ví dụ mẫu giải chi tiết từng bước',
    },
    {
      v: String(PRACTICE_QUESTIONS.length).padStart(2, '0'),
      l: 'câu hỏi rèn luyện có giải thích',
    },
  ];

  const activeSubjectTopics = grade12BySubject[selectedSubject].filter(
    (t) => gradeFilter === 'all' || t.grade === gradeFilter
  );

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 flex flex-col overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-zinc-100 text-zinc-950 px-4 py-2 rounded-md font-semibold"
      >
        Chuyển đến nội dung chính
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 h-12 bg-zinc-950/95 backdrop-blur border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-3">
          <a
            href="#/"
            className={`text-sm font-semibold tracking-tight text-zinc-100 ${FOCUS}`}
          >
            Scalar
          </a>
          <nav
            aria-label="Điều hướng chính"
            className="hidden md:flex items-center gap-1 text-xs"
          >
            {[
              ['Môn học', '#courses'],
              ['Lý thuyết trọng tâm', '#knowledge-base'],
              ['Cách học', '#how'],
              ['Tiến độ', '#progress'],
              ['Kho đề thi', '#/admin'],
            ].map(([l, h]) => (
              <a
                key={h}
                href={h}
                className={`px-3 py-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors ${FOCUS}`}
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#/admin"
              className={`h-8 px-3 rounded-md inline-flex items-center border border-zinc-800/80 bg-zinc-900/60 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 text-xs font-medium transition-colors ${FOCUS}`}
            >
              Kho đề
            </a>
            <a
              href="#/app"
              className={`h-8 px-3.5 rounded-md inline-flex items-center bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-colors ${FOCUS}`}
            >
              <span>Vào học ngay</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="border-b border-zinc-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
                Toán · Vật lý · Hóa học · Tiếng Anh • Lớp 10 – 12
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold leading-[1.15] tracking-tight text-zinc-100">
                Học chắc lý thuyết.
                <br />
                <span className="text-zinc-400">
                  Luyện đúng trọng tâm, hiểu rõ từng bước.
                </span>
              </h1>
              <p className="text-[15px] leading-7 text-zinc-300 max-w-[62ch]">
                Không cần học vẹt hay giải đề tràn lan. Scalar gom gọn kiến thức cốt lõi theo từng chuyên đề, sắp xếp bài tập từ dễ đến khó và hỗ trợ gợi ý tư duy ngay khi bạn gặp vướng mắc.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#/app"
                  className={`h-11 px-6 rounded-lg inline-flex items-center justify-center bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium transition-colors shadow-sm ${FOCUS}`}
                >
                  <span>Bắt đầu luyện tập</span>
                </a>
                <a
                  href="#knowledge-base"
                  className={`h-11 px-6 rounded-lg inline-flex items-center justify-center border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-sm font-medium text-zinc-200 transition-colors ${FOCUS}`}
                >
                  Xem tóm tắt lý thuyết
                </a>
              </div>
            </div>

            {/* Right Hero Summary Card */}
            <div className="lg:col-span-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Nội dung trọng tâm
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  GDPT 2018
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-zinc-950/70 border border-zinc-800/80 space-y-1"
                  >
                    <p className="text-2xl font-semibold font-mono text-zinc-100">
                      {s.v}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses / Subjects Taxonomy */}
        <section
          id="courses"
          className="border-b border-zinc-800/80 py-14 sm:py-20"
          aria-labelledby="courses-h"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                01 / Môn học
              </p>
              <h2
                id="courses-h"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100"
              >
                Bốn môn học nền tảng cho các kỳ thi lớn
              </h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-6">
              {SUBJECTS.map(({ id, name, blurb }, idx) => {
                const topics = grade12BySubject[id];
                const problems = PRACTICE_QUESTIONS.filter(
                  (q) => q.subject === id
                ).length;
                return (
                  <li
                    key={id}
                    className="rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors p-6 flex flex-col gap-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900 font-mono text-xs font-semibold text-sky-400">
                        {id.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md px-2.5 py-0.5">
                        {String(idx + 1).padStart(2, '0')} • GDPT 2018
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {name}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                        {blurb}
                      </p>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/80 pt-4 flex-1">
                      {topics.slice(0, 5).map((t) => (
                        <li key={t.id} className="flex gap-2">
                          <span
                            className="text-zinc-500 font-mono shrink-0"
                            aria-hidden="true"
                          >
                            •
                          </span>
                          <span>
                            <strong className="font-semibold text-zinc-200">
                              [Lớp {t.grade}] {t.chapter}:
                            </strong>{' '}
                            {t.topicName}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs flex items-center justify-between border-t border-zinc-800/80 pt-4">
                      <span className="text-zinc-400 font-mono">
                        {topics.length} chuyên đề • {problems} câu hỏi
                      </span>
                      <a
                        href="#/app"
                        className={`inline-flex items-center px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition-colors ${FOCUS}`}
                      >
                        <span>Luyện tập</span>
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Compiled Modern Wikipedia Knowledge Base Explorer */}
        <section
          id="knowledge-base"
          className="border-b border-zinc-800/80 py-14 sm:py-20"
          aria-labelledby="kb-h"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  02 / Lý thuyết cô đọng
                </p>
                <h2
                  id="kb-h"
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100"
                >
                  Kiến thức súc tích, trình bày rõ ràng, dễ tra cứu
                </h2>
              </div>

              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label="Chọn môn học để xem cẩm nang lý thuyết"
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
                      className={`px-3.5 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${FOCUS} ${
                        active
                          ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                          : 'border-zinc-800/80 text-zinc-300 bg-zinc-900/50 hover:bg-zinc-900'
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grade Filter */}
            <div className="flex flex-wrap gap-1.5">
              {(['all', 12, 11, 10] as const).map((g) => {
                const active = gradeFilter === g;
                return (
                  <button
                    key={String(g)}
                    type="button"
                    onClick={() => setGradeFilter(g)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                      active
                        ? 'border-sky-500/60 text-sky-300 bg-sky-500/10'
                        : 'border-zinc-800/80 text-zinc-400 bg-zinc-900/40 hover:text-zinc-200'
                    }`}
                  >
                    {g === 'all' ? 'Tất cả khối (10–11–12)' : `Khối Lớp ${g}`}
                  </button>
                );
              })}
            </div>

            <SubjectDiagram subject={selectedSubject} />

            <div className="grid grid-cols-1 gap-6">
              {activeSubjectTopics.map((topic) => (
                <article
                  key={topic.id}
                  className="rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <CompiledWikiArticleView topic={topic} />

                    <div className="lg:w-72 shrink-0 rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-5 space-y-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Bài tập theo chuyên đề
                      </p>
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
                            className={`px-2.5 py-0.5 rounded-md border text-xs font-mono ${getDifficultyBadgeClasses(
                              lvl
                            )}`}
                          >
                            {lvl}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#/app"
                        className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-colors ${FOCUS}`}
                      >
                        <span>
                          Luyện tập {topic.sampleQuestionTemplates.length} câu hỏi mẫu
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="max-w-[65ch]">
                    <TopicChatBox topic={topic} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="border-b border-zinc-800/80 py-14 sm:py-20"
          aria-labelledby="how-h"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                03 / Cách học hiệu quả
              </p>
              <h2
                id="how-h"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100"
              >
                Học bài bản qua ba bước đơn giản
              </h2>
            </div>
            <ol className="grid md:grid-cols-3 gap-6">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-6 space-y-3"
                >
                  <p className="text-2xl font-mono font-semibold text-sky-400">
                    {s.n}
                  </p>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {s.t}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Progress Tracker */}
        <section
          id="progress"
          className="py-14 sm:py-20"
          aria-labelledby="progress-h"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                04 / Tiến độ cá nhân
              </p>
              <h2
                id="progress-h"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100"
              >
                Biết rõ mình đã nắm vững những gì
              </h2>
              <p className="text-[15px] text-zinc-300 leading-7 max-w-prose">
                Đánh dấu các chuyên đề bạn đã ôn xong để luôn tự tin và chủ động kiểm soát kế hoạch ôn thi.
              </p>
              <a
                href="#/app"
                className={`h-11 px-6 rounded-lg inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium transition-all ${FOCUS}`}
              >
                <span>Bắt đầu luyện tập ngay →</span>
              </a>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden">
              <div className="flex items-center justify-between px-5 h-11 border-b border-zinc-800/80 bg-zinc-900/80 text-xs text-zinc-300 font-medium">
                <span>Danh sách chuyên đề đã học</span>
                <span className="font-mono text-zinc-400">
                  {count}/{grade12Curriculum.length} chuyên đề
                </span>
              </div>
              <div className="p-5 space-y-5">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-3xl font-semibold font-mono text-zinc-100">
                    {pct}%
                  </p>
                  <p className="text-xs text-zinc-400">
                    Đã hoàn thành {count}/{grade12Curriculum.length} chuyên đề
                  </p>
                </div>
                <div
                  className="h-2.5 rounded-full bg-zinc-950 border border-zinc-800 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Tiến độ hoàn thành chuyên đề"
                >
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <ul className="max-h-80 overflow-y-auto divide-y divide-zinc-800/70 rounded-lg border border-zinc-800/80">
                  {grade12Curriculum.map((t, i) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={done[i]}
                        onClick={() => toggle(i)}
                        className={`w-full px-3.5 py-2.5 bg-zinc-950/60 hover:bg-zinc-900 flex items-center gap-3 text-left text-xs sm:text-sm cursor-pointer transition-colors ${FOCUS}`}
                      >
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 text-[10px] font-bold ${
                            done[i]
                              ? 'bg-emerald-500 text-zinc-950 border-emerald-400'
                              : 'border-zinc-700 bg-zinc-900'
                          }`}
                          aria-hidden="true"
                        >
                          {done[i] && '✓'}
                        </span>
                        <span
                          className={
                            done[i]
                              ? 'text-zinc-500 line-through'
                              : 'text-zinc-200'
                          }
                        >
                          <strong className="font-mono text-xs text-zinc-400 mr-1.5">
                            [{t.subject.toUpperCase()} {t.grade}]
                          </strong>
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

      <footer className="border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
        Scalar • Nền tảng học tập và luyện thi Toán, Lý, Hóa, Tiếng Anh cho học sinh THPT
      </footer>
    </div>
  );
};
