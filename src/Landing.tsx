import React from 'react';
import { PRACTICE_QUESTIONS, grade12Curriculum } from './data/curriculum';

const FOCUS =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950';

const SUBJECT_HIGHLIGHTS = [
  {
    id: 'math',
    name: 'Toán học',
    grades: 'Lớp 10–12',
    count: '278+ câu',
    topics: 'Giải tích, Tích phân, Oxyz & Xác suất Bayes',
    accent: 'border-sky-500/30 hover:border-sky-500/60',
    tag: 'text-sky-400',
  },
  {
    id: 'physics',
    name: 'Vật lí',
    grades: 'Lớp 10–12',
    count: '166+ câu',
    topics: 'Vật lí nhiệt, Khí lí tưởng & Cảm ứng từ',
    accent: 'border-teal-500/30 hover:border-teal-500/60',
    tag: 'text-teal-400',
  },
  {
    id: 'chemistry',
    name: 'Hóa học',
    grades: 'Lớp 10–12',
    count: '189+ câu',
    topics: 'Ester - Lipid, Pin Galvani & Phức chất',
    accent: 'border-emerald-500/30 hover:border-emerald-500/60',
    tag: 'text-emerald-400',
  },
  {
    id: 'english',
    name: 'Tiếng Anh',
    grades: 'Lớp 10–12',
    count: '119+ câu',
    topics: 'Đảo ngữ, Câu chẻ & Thức giả định',
    accent: 'border-amber-500/30 hover:border-amber-500/60',
    tag: 'text-amber-400',
  },
];

export const Landing: React.FC = () => {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 flex flex-col justify-between overflow-x-hidden selection:bg-sky-500 selection:text-zinc-950">
      {/* Top Header */}
      <header className="sticky top-0 z-40 h-14 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
          <a
            href="#/"
            className={`text-base font-semibold tracking-tight text-zinc-100 font-mono ${FOCUS}`}
          >
            Scalar
          </a>

          <nav
            aria-label="Điều hướng chính"
            className="hidden sm:flex items-center gap-1 text-xs"
          >
            <a
              href="#/intro"
              className={`px-3 py-1.5 rounded-md text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 transition-colors ${FOCUS}`}
            >
              Giới thiệu chi tiết
            </a>
            <a
              href="#/admin"
              className={`px-3 py-1.5 rounded-md text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 transition-colors ${FOCUS}`}
            >
              Kho đề thi (35 bộ)
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="#/intro"
              className={`sm:hidden text-xs text-zinc-400 hover:text-zinc-200 px-2 py-1 ${FOCUS}`}
            >
              Giới thiệu
            </a>
            <a
              href="#/app"
              className={`h-9 px-4 rounded-lg inline-flex items-center bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold tracking-tight transition-all ${FOCUS}`}
            >
              <span>Vào ứng dụng ngay →</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Focus Hero Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14 flex-1 flex flex-col justify-center">
        {/* Hero Title & Primary CTAs */}
        <section className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/20 text-sky-400 text-xs font-mono">
            CHUẨN GDPT 2018 • BẢO MẬT & TỐI ƯU CHI PHÍ
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Nền tảng Luyện thi STEM THPT phân tầng theo năng lực
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Hơn 860 câu hỏi chọn lọc 4 môn Toán, Lý, Hóa, Tiếng Anh. Tự động quét đề từ ảnh bằng AI Vision, ngẫu nhiên hóa vị trí A–B–C–D và gia sư Socratic định hướng tư duy từng bước.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#/app"
              className={`w-full sm:w-auto h-12 px-8 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 text-sm font-semibold tracking-tight transition-all inline-flex items-center justify-center shadow-lg shadow-sky-500/10 ${FOCUS}`}
            >
              Bắt đầu luyện tập ngay →
            </a>
            <a
              href="#/intro"
              className={`w-full sm:w-auto h-12 px-6 rounded-xl border border-zinc-750 hover:border-zinc-600 bg-zinc-900/80 hover:bg-zinc-850 text-zinc-200 text-sm font-medium transition-colors inline-flex items-center justify-center ${FOCUS}`}
            >
              Tìm hiểu chi tiết (Giới thiệu)
            </a>
          </div>
        </section>

        {/* 4 Subject Direct-Access Cards */}
        <section className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
            <span>CHỌN MÔN ĐỂ BẮT ĐẦU LUYỆN TẬP</span>
            <span>{PRACTICE_QUESTIONS.length}+ CÂU HỎI TRẮC NGHIỆM</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SUBJECT_HIGHLIGHTS.map((subj) => (
              <a
                key={subj.id}
                href="#/app"
                className={`p-4 rounded-xl border bg-zinc-900/50 hover:bg-zinc-850 transition-all text-left space-y-2 group cursor-pointer ${subj.accent} ${FOCUS}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold uppercase ${subj.tag}`}>
                    {subj.name}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {subj.count}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-medium leading-snug">
                  {subj.topics}
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>{subj.grades}</span>
                  <span className="text-sky-400 group-hover:translate-x-0.5 transition-transform">
                    Luyện tập →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 3 Key Pillars: Short & Concise */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800/80 pt-10">
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-1.5">
            <span className="text-xs font-mono text-sky-400 font-semibold">[01]</span>
            <h3 className="text-sm font-semibold text-zinc-100">
              Đảo ngẫu nhiên A–B–C–D
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Mỗi lượt làm lại tự động hoán vị đáp án sang vị trí mới để rèn luyện phản xạ đọc đề, loại bỏ thói quen học vẹt.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-1.5">
            <span className="text-xs font-mono text-sky-400 font-semibold">[02]</span>
            <h3 className="text-sm font-semibold text-zinc-100">
              Quét đề từ ảnh bằng AI
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dán ảnh đề bài (Ctrl+V) để trích xuất câu hỏi, mã hóa công thức LaTeX và tạo quiz tương tác chạy trên gói tiết kiệm chi phí tối đa.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-1.5">
            <span className="text-xs font-mono text-sky-400 font-semibold">[03]</span>
            <h3 className="text-sm font-semibold text-zinc-100">
              Gia sư Socratic từng bước
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Trợ lý AI gợi mở tư duy thay vì giải hộ, giúp học sinh nhận diện bản chất lỗi sai và tự tìm ra lời giải.
            </p>
          </div>
        </section>

        {/* Telemetry Bar */}
        <section className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 flex flex-wrap items-center justify-around gap-4 text-center text-xs font-mono text-zinc-400">
          <div>
            <strong className="text-zinc-100 text-sm">860+</strong> Câu hỏi ngân hàng
          </div>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <div>
            <strong className="text-zinc-100 text-sm">{grade12Curriculum.length}</strong> Chuyên đề GDPT 2018
          </div>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <div>
            <strong className="text-zinc-100 text-sm">35</strong> Đề thi THPT/HSA/TSA
          </div>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <div>
            <strong className="text-emerald-400 text-sm">Free Tier Ready</strong> Tối ưu chi phí AI
          </div>
        </section>

        {/* Bottom Banner Focused on Launching the App */}
        <section className="text-center pt-2">
          <a
            href="#/app"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-semibold tracking-tight transition-all ${FOCUS}`}
          >
            <span>Mở không gian luyện thi trên ứng dụng ngay →</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-5 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 w-full gap-2">
        <p>Scalar • Nền tảng học tập và luyện thi Toán, Lý, Hóa, Tiếng Anh THPT</p>
        <div className="flex items-center gap-4 text-xs font-mono">
          <a href="#/intro" className="text-zinc-400 hover:text-zinc-200">
            Giới thiệu
          </a>
          <a href="#/admin" className="text-zinc-400 hover:text-zinc-200">
            Kho đề thi
          </a>
          <a href="#/app" className="text-sky-400 hover:text-sky-300">
            Vào ứng dụng →
          </a>
        </div>
      </footer>
    </div>
  );
};
