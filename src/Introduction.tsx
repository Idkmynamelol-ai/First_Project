import React, { useState } from 'react';
import {
  PRACTICE_QUESTIONS,
  grade12Curriculum,
  grade12BySubject,
} from './data/curriculum';
import { SubjectId, GradeLevel } from './types/edu';
import { SubjectDiagram } from './components/InteractiveDiagrams';
import { CompiledWikiArticleView } from './components/TopicChatBox';

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

const PEDAGOGY_LEVELS = [
  {
    lvl: 'Nhận biết',
    color: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300',
    desc: 'Nhận diện khái niệm, định luật cơ bản, công thức trọng tâm và danh pháp chuẩn IUPAC không đòi hỏi biến đổi phức tạp.',
  },
  {
    lvl: 'Thông hiểu',
    color: 'border-sky-500/30 bg-sky-950/20 text-sky-300',
    desc: 'Giải thích hiện tượng, đọc hiểu bảng biến thiên, đồ thị chu trình nhiệt, cấu trúc phức chất và phân tích mệnh đề ngữ pháp.',
  },
  {
    lvl: 'Vận dụng',
    color: 'border-amber-500/30 bg-amber-950/20 text-amber-300',
    desc: 'Tính toán định lượng, liên kết nhiều bước giải trong giải tích, bài toán mạch dao động và cân bằng ion trong dung dịch.',
  },
  {
    lvl: 'Vận dụng cao',
    color: 'border-rose-500/30 bg-rose-950/20 text-rose-300',
    desc: 'Ứng dụng tối ưu hóa thực tế, phân tích dữ liệu thực nghiệm đề thi HSA/TSA và bài toán xác suất Bayes phức hợp.',
  },
];

export const Introduction: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('math');
  const [gradeFilter, setGradeFilter] = useState<'all' | GradeLevel>('all');
  const [done, setDone] = useState<boolean[]>(
    () => grade12Curriculum.map((_, idx) => idx < 3)
  );

  const count = done.filter(Boolean).length;
  const pct = Math.round((count / grade12Curriculum.length) * 100);
  const toggle = (i: number) =>
    setDone((d) => d.map((v, idx) => (idx === i ? !v : v)));

  const activeSubjectTopics = grade12BySubject[selectedSubject].filter(
    (t) => gradeFilter === 'all' || t.grade === gradeFilter
  );

  const totalFormulas = grade12Curriculum.reduce(
    (acc, t) => acc + t.keyFormulasAndRules.length,
    0
  );

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 flex flex-col overflow-x-hidden">
      {/* Top Header */}
      <header className="sticky top-0 z-40 h-12 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href="#/"
              className={`text-xs text-zinc-400 hover:text-zinc-100 px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900 transition-colors ${FOCUS}`}
            >
              ← Về Trang chủ
            </a>
            <span className="text-sm font-semibold tracking-tight text-zinc-100 font-mono">
              Scalar • Giới thiệu
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#/admin"
              className={`h-8 px-3 rounded-md inline-flex items-center border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-zinc-100 text-xs font-medium transition-colors ${FOCUS}`}
            >
              Kho đề (35 bộ)
            </a>
            <a
              href="#/app"
              className={`h-8 px-4 rounded-md inline-flex items-center bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold tracking-tight transition-all ${FOCUS}`}
            >
              Vào ứng dụng ngay →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-16 flex-1">
        {/* Section 1: Hero & Purpose */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/20 text-sky-400 text-xs font-mono">
            TỔNG QUAN CHƯƠNG TRÌNH & PHƯƠNG PHÁP SƯ PHẠM
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Giới thiệu Nền tảng Luyện thi STEM THPT Scalar
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            Scalar được xây dựng bám sát Chương trình Giáo dục Phổ thông mới (GDPT 2018), hỗ trợ học sinh ôn thi Tốt nghiệp THPT và các kỳ thi Đánh giá năng lực (HSA), Đánh giá tư duy (TSA). Nền tảng tổng hợp hơn 860 câu hỏi theo 4 mức độ nhận thức, công cụ tạo bài tập từ ảnh chụp đề thi và Trợ lý gợi ý giải bài từng bước.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <p className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
                {grade12Curriculum.length}
              </p>
              <p className="text-xs text-zinc-400">Chuyên đề Lớp 10–12</p>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <p className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
                {totalFormulas}+
              </p>
              <p className="text-xs text-zinc-400">Công thức then chốt</p>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <p className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
                {PRACTICE_QUESTIONS.length}+
              </p>
              <p className="text-xs text-zinc-400">Câu hỏi rèn luyện</p>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <p className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">
                35
              </p>
              <p className="text-xs text-zinc-400">Đề thi thử THPT/HSA/TSA</p>
            </div>
          </div>
        </section>

        {/* Section 2: Pedagogical Framework (4 Cognitive Levels) */}
        <section className="space-y-6 border-t border-zinc-800/80 pt-10">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
              Phân loại bài tập theo 4 mức độ nhận thức
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
              Đề thi chính thức của Bộ Giáo dục và Đào tạo được thiết kế theo thang đo năng lực 4 bậc. Scalar chuẩn hóa từng câu hỏi vào đúng mức độ để người học theo dõi chính xác mức độ tiến bộ của mình.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PEDAGOGY_LEVELS.map((item) => (
              <div
                key={item.lvl}
                className={`p-4 rounded-xl border ${item.color} space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider">
                    {item.lvl}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Learning Flow & Features */}
        <section className="space-y-6 border-t border-zinc-800/80 pt-10">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
              3 Trọng tâm cốt lõi trong trải nghiệm học tập
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Các tính năng được thiết kế có chủ đích nhằm rèn luyện tư duy tự thân, giảm phụ thuộc vào việc chép lời giải có sẵn.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-xs font-mono text-sky-400 font-semibold">[01]</span>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                Xáo trộn đáp án ngẫu nhiên (Dynamic Shuffle) ở mỗi lượt làm lại
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Khi làm lại một câu hỏi, hệ thống đảm bảo vị trí đáp án đúng tự động đổi sang một chữ cái khác (A, B, C, D). Điều này ngăn ngừa thói quen học vẹt theo vị trí phím và buộc học sinh phải đọc kỹ đề bài để đưa ra suy luận.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-xs font-mono text-sky-400 font-semibold">[02]</span>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                Tạo bài làm trực tiếp từ ảnh chụp đề thi
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Bạn có thể chụp ảnh hoặc dán trực tiếp ảnh chụp màn hình (Ctrl+V) từ sách bài tập hay đề kiểm tra. Hệ thống tự động đọc câu hỏi, giữ nguyên các công thức toán học và tạo thành đề trắc nghiệm tương tác để bạn luyện giải ngay lập tức.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 space-y-2">
              <span className="text-xs font-mono text-sky-400 font-semibold">[03]</span>
              <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                Gợi ý phương pháp giải từng bước
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Khi gặp câu hỏi khó, hệ thống không chỉ đưa ra đáp án suông mà gợi mở các công thức trọng tâm và định hướng suy luận, giúp bạn tự tìm ra hướng giải bài.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Subject Explorer & Interactive Diagrams */}
        <section className="space-y-6 border-t border-zinc-800/80 pt-10">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
              Chương trình chi tiết 4 môn học
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Bao quát toàn diện 3 năm THPT theo Chương trình Giáo dục Phổ thông 2018.
            </p>
          </div>

          {/* Subject Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SUBJECTS.map((s) => {
              const active = selectedSubject === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedSubject(s.id)}
                  className={`p-3 rounded-lg border text-left transition-colors cursor-pointer space-y-1 ${
                    active
                      ? 'border-sky-500/50 bg-zinc-900 text-zinc-100'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                  }`}
                >
                  <p className="text-xs font-semibold font-mono uppercase">
                    {s.name}
                  </p>
                  <p className="text-[11px] text-zinc-500 line-clamp-1">
                    {s.blurb}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive diagram for active subject */}
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono uppercase text-sky-400 font-semibold">
                Sơ đồ tư duy & Trực quan hóa môn học
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {activeSubjectTopics.length} chuyên đề
              </span>
            </div>
            <SubjectDiagram subject={selectedSubject} />
          </div>
        </section>

        {/* Section 5: Progress Checklist */}
        <section className="space-y-6 border-t border-zinc-800/80 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
                Bảng tiến độ 32 chuyên đề GDPT 2018
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Đánh dấu các chuyên đề bạn đã ôn vững để kiểm soát kế hoạch ôn thi.
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold font-mono text-zinc-100">{pct}%</p>
              <p className="text-xs text-zinc-400">
                Đã xong {count}/{grade12Curriculum.length} chuyên đề
              </p>
            </div>
          </div>

          <div className="h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>

          <ul className="max-h-72 overflow-y-auto divide-y divide-zinc-800/70 rounded-xl border border-zinc-800 bg-zinc-900/30">
            {grade12Curriculum.map((t, i) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-zinc-900/80 transition-colors cursor-pointer"
                >
                  <span
                    className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 text-[10px] font-bold ${
                      done[i]
                        ? 'bg-emerald-500 text-zinc-950 border-emerald-400'
                        : 'border-zinc-700 bg-zinc-900'
                    }`}
                  >
                    {done[i] && '✓'}
                  </span>
                  <span
                    className={`text-xs ${
                      done[i] ? 'text-zinc-500 line-through' : 'text-zinc-300'
                    }`}
                  >
                    <strong className="font-mono text-zinc-400 mr-2">
                      [{t.subject.toUpperCase()} {t.grade}]
                    </strong>
                    {t.topicName}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6: Bottom Call to Action */}
        <section className="p-8 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
            Bắt đầu kế hoạch ôn luyện ngay hôm nay
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Vào làm bài tập theo chuyên đề, thử sức với các bộ đề thi mẫu hoặc tạo bài kiểm tra nhanh từ ảnh chụp đề thi.
          </p>
          <div className="pt-2">
            <a
              href="#/app"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 text-sm font-semibold tracking-tight transition-all"
            >
              Vào ứng dụng luyện tập ngay →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        Scalar • Nền tảng học tập và luyện thi Toán, Lý, Hóa, Tiếng Anh cho học sinh THPT
      </footer>
    </div>
  );
};
