import React, { useState } from 'react';
import { BarChart3, GitBranch, Table2, BookOpenCheck } from 'lucide-react';
import { SubjectId } from '../types/edu';

interface SubjectDiagramProps {
  subject: SubjectId;
}

type VizMode = 'chart' | 'diagram' | 'table';

const MODES: {
  id: VizMode;
  label: string;
  Icon: React.FC<{ className?: string }>;
}[] = [
  { id: 'chart', label: '1. Đồ thị / Biểu đồ', Icon: BarChart3 },
  { id: 'diagram', label: '2. Sơ đồ tư duy / Cấu trúc', Icon: GitBranch },
  { id: 'table', label: '3. Bảng số liệu chuẩn SGK', Icon: Table2 },
];

export const SubjectDiagram: React.FC<SubjectDiagramProps> = ({ subject }) => {
  const [mode, setMode] = useState<VizMode>('chart');

  return (
    <div className="bg-[#0A0A0A] border border-[#D4D4D8]/70 p-3.5 sm:p-4 space-y-3">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-neutral-800 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-sky-400 shrink-0" aria-hidden="true" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 bg-sky-500/15 border border-sky-400/50 px-2 py-0.5">
            Trực quan hóa đa dạng (Dữ liệu chuẩn SGK 12)
          </span>
        </div>

        <div
          className="flex flex-wrap gap-1.5"
          role="tablist"
          aria-label="Chọn dạng trực quan hóa kiến thức"
        >
          {MODES.map(({ id, label, Icon }) => {
            const active = mode === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setMode(id)}
                className={`h-8 px-2.5 text-[11px] font-mono font-bold inline-flex items-center gap-1.5 border cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  active
                    ? 'bg-sky-400 text-black border-sky-300'
                    : 'bg-[#111111] text-neutral-300 border-neutral-800 hover:border-neutral-600 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= TOÁN 12 ================= */}
      {subject === 'math' && (
        <>
          {mode === 'chart' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span className="font-bold text-white">
                  Ứng dụng hình học của tích phân: Diện tích S dưới đồ thị y = x·sin(x) trên [0, π/2]
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  S = ∫₀^(π/2) x·sin(x)dx = 1
                </span>
              </div>
              <div className="border border-neutral-800 bg-[#111111] p-3">
                <svg
                  viewBox="0 0 340 135"
                  className="w-full h-36 overflow-visible"
                  role="img"
                  aria-label="Đồ thị hàm số y bằng x nhân sin x từ 0 đến pi trên 2 thể hiện diện tích hình phẳng bằng 1"
                >
                  <defs>
                    <linearGradient id="mathAreaGradBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <line x1="36" y1="16" x2="36" y2="110" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="36" y1="110" x2="310" y2="110" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line
                    x1="36"
                    y1="30"
                    x2="260"
                    y2="30"
                    stroke="#38BDF8"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <line
                    x1="260"
                    y1="30"
                    x2="260"
                    y2="110"
                    stroke="#38BDF8"
                    strokeDasharray="4 3"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 36 110 C 98 109, 170 82, 260 30 L 260 110 Z"
                    fill="url(#mathAreaGradBlue)"
                  />
                  <path
                    d="M 36 110 C 98 109, 170 82, 260 30"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="260" cy="30" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="24" y="116" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono">
                    O
                  </text>
                  <text x="240" y="125" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                    x = π/2
                  </text>
                  <text x="135" y="86" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                    S = [-x·cosx + sinx]₀^(π/2) = 1
                  </text>
                  <text x="200" y="22" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono">
                    M(π/2; π/2)
                  </text>
                </svg>
              </div>
            </div>
          )}

          {mode === 'diagram' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Sơ đồ hình cây Công thức Bayes (Luyện tập 5 trang 77 SGK Toán 12 Tập 2 KNTT)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  P(A|B) ≈ 0,16 (16,0%)
                </span>
              </div>
              <div className="border border-neutral-800 bg-[#111111] p-3 overflow-x-auto">
                <svg
                  viewBox="0 0 460 165"
                  className="w-full min-w-[400px] h-40"
                  role="img"
                  aria-label="Sơ đồ hình cây công thức Bayes Luyện tập 5 trang 77 Toán 12 Kết nối tri thức"
                >
                  {/* Root node */}
                  <rect x="8" y="62" width="76" height="36" fill="#0A0A0A" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="16" y="78" fill="#FFFFFF" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    Dân số (Ω)
                  </text>
                  <text x="16" y="91" fill="#38BDF8" fontSize="8.5" fontFamily="JetBrains Mono">
                    Xét nghiệm X
                  </text>

                  {/* Branches to A and A_bar */}
                  <line x1="84" y1="80" x2="155" y2="38" stroke="#38BDF8" strokeWidth="2" />
                  <line x1="84" y1="80" x2="155" y2="125" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="92" y="50" fill="#38BDF8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">
                    P(A)=0,002
                  </text>
                  <text x="90" y="116" fill="#E5E5E5" fontSize="9" fontFamily="JetBrains Mono">
                    P(Ā)=0,998
                  </text>

                  {/* Node A: Mắc bệnh */}
                  <rect x="155" y="18" width="108" height="38" fill="#082F49" stroke="#38BDF8" strokeWidth="1.8" />
                  <text x="163" y="34" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    A: Mắc bệnh X
                  </text>
                  <text x="163" y="48" fill="#FFFFFF" fontSize="8.5" fontFamily="JetBrains Mono">
                    Tỉ lệ: 0,2%
                  </text>

                  {/* Node A_bar: Không mắc bệnh */}
                  <rect x="155" y="106" width="108" height="38" fill="#0A0A0A" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="163" y="122" fill="#FFFFFF" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    Ā: Không bệnh
                  </text>
                  <text x="163" y="136" fill="#A3A3A3" fontSize="8.5" fontFamily="JetBrains Mono">
                    Tỉ lệ: 99,8%
                  </text>

                  {/* Sub-branches to B (Dương tính) */}
                  <line x1="263" y1="37" x2="335" y2="37" stroke="#38BDF8" strokeWidth="2" />
                  <line x1="263" y1="125" x2="335" y2="125" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
                  <text x="268" y="29" fill="#38BDF8" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    P(B|A)=0,95
                  </text>
                  <text x="268" y="117" fill="#E5E5E5" fontSize="8.5" fontFamily="JetBrains Mono">
                    P(B|Ā)=0,01
                  </text>

                  {/* Leaf nodes */}
                  <rect x="335" y="16" width="118" height="42" fill="#082F49" stroke="#38BDF8" strokeWidth="1.8" />
                  <text x="342" y="32" fill="#38BDF8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">
                    Dương tính thật
                  </text>
                  <text x="342" y="48" fill="#FFFFFF" fontSize="8.5" fontFamily="JetBrains Mono">
                    0,002×0,95=0,0019
                  </text>

                  <rect x="335" y="104" width="118" height="42" fill="#0A0A0A" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="342" y="120" fill="#FFFFFF" fontSize="9" fontFamily="JetBrains Mono">
                    Dương tính giả
                  </text>
                  <text x="342" y="136" fill="#A3A3A3" fontSize="8.5" fontFamily="JetBrains Mono">
                    0,998×0,01=0,00998
                  </text>
                </svg>
              </div>
            </div>
          )}

          {mode === 'table' && (
            <div className="space-y-2">
              <p className="text-xs font-bold text-white">
                Bảng phân tích xác suất thực nghiệm (SGK Toán 12 Tập 2 KNTT - Bài 19, Trang 77):
              </p>
              <div className="overflow-x-auto border border-neutral-800">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-sky-950/60 text-sky-300 border-b border-neutral-800">
                      <th className="p-2.5 border-r border-neutral-800/60">Đại lượng xác suất</th>
                      <th className="p-2.5 border-r border-neutral-800/60">Ký hiệu</th>
                      <th className="p-2.5 border-r border-neutral-800/60">Giá trị SGK</th>
                      <th className="p-2.5">Ý nghĩa thực tiễn y học</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-[#111111] text-neutral-100">
                    <tr>
                      <td className="p-2.5 border-r border-neutral-800/40">Tỉ lệ mắc bệnh X</td>
                      <td className="p-2.5 border-r border-neutral-800/40 text-sky-300 font-bold">P(A)</td>
                      <td className="p-2.5 border-r border-neutral-800/40">0,2% = 0,002</td>
                      <td className="p-2.5">Xác suất tiền nghiệm trước khi xét nghiệm</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-neutral-800/40">Độ nhạy xét nghiệm</td>
                      <td className="p-2.5 border-r border-neutral-800/40 text-sky-300 font-bold">P(B | A)</td>
                      <td className="p-2.5 border-r border-neutral-800/40">95% = 0,95</td>
                      <td className="p-2.5">Dương tính đúng khi người đó thực sự mắc bệnh</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-neutral-800/40">Tỉ lệ dương tính giả</td>
                      <td className="p-2.5 border-r border-neutral-800/40 text-sky-300 font-bold">P(B | Ā)</td>
                      <td className="p-2.5 border-r border-neutral-800/40">1% = 0,01</td>
                      <td className="p-2.5">Dương tính nhầm ở người không mắc bệnh</td>
                    </tr>
                    <tr className="bg-sky-950/40 text-sky-100 font-bold">
                      <td className="p-2.5 border-r border-neutral-800/40">Xác suất hậu nghiệm Bayes</td>
                      <td className="p-2.5 border-r border-neutral-800/40 text-sky-300">P(A | B)</td>
                      <td className="p-2.5 border-r border-neutral-800/40 text-sky-300">0,0019 / 0,01188 ≈ 0,16</td>
                      <td className="p-2.5">Tăng từ 0,2% lên ~16% sau 1 lần dương tính</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-[11px] font-mono text-sky-300 flex items-center gap-1.5 pt-1 border-t border-neutral-800/30">
            <BookOpenCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
            <span>
              Nguồn dữ liệu chuẩn: SGK Toán 12 Kết nối tri thức (Tập 2, Bài 13 &amp; Bài 19 Luyện tập 5 trang 77 - vietjack.com)
            </span>
          </p>
        </>
      )}

      {/* ================= VẬT LÝ 12 ================= */}
      {subject === 'physics' && (
        <>
          {mode === 'chart' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Đồ thị nhiệt độ – nhiệt lượng nung chảy 2 kg Đồng từ 30°C (Câu hỏi 2 trang 24 SGK Vật lí 12 KNTT)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  t_nc = 1084°C • t = 83,7 s
                </span>
              </div>
              <div className="border border-neutral-800 bg-[#111111] p-3">
                <svg
                  viewBox="0 0 360 140"
                  className="w-full h-36 overflow-visible"
                  role="img"
                  aria-label="Đồ thị sự phụ thuộc nhiệt độ của 2 kg đồng từ 30 độ C lên điểm nóng chảy 1084 độ C theo SGK Vật lí 12 trang 24"
                >
                  <line x1="42" y1="14" x2="42" y2="112" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="42" y1="112" x2="335" y2="112" stroke="#FFFFFF" strokeWidth="1.5" />
                  {/* Melting point dashed line at 1084°C */}
                  <line
                    x1="42"
                    y1="34"
                    x2="310"
                    y2="34"
                    stroke="#38BDF8"
                    strokeDasharray="4 3"
                    strokeWidth="1.2"
                  />
                  {/* Stage 1: Heating from 30C to 1084C (Q1 = 801,040 J) */}
                  <line x1="42" y1="98" x2="205" y2="34" stroke="#38BDF8" strokeWidth="2.8" />
                  {/* Stage 2: Melting at constant 1084C (Q2 = 3,6.10^5 J) */}
                  <line x1="205" y1="34" x2="310" y2="34" stroke="#FFFFFF" strokeWidth="3" />
                  <circle cx="42" cy="98" r="4" fill="#FFFFFF" />
                  <circle cx="205" cy="34" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="310" cy="34" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />

                  <text x="8" y="38" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    1084°C
                  </text>
                  <text x="14" y="102" fill="#FFFFFF" fontSize="9.5" fontFamily="JetBrains Mono">
                    30°C
                  </text>
                  <text x="85" y="78" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    Q₁ = mcΔt = 801 040 J
                  </text>
                  <text x="210" y="24" fill="#FFFFFF" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    Q₂ = λm = 3,6·10⁵ J
                  </text>
                  <text x="175" y="126" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono">
                    Bắt đầu nóng chảy
                  </text>
                </svg>
              </div>
            </div>
          )}

          {mode === 'diagram' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Sơ đồ truyền năng lượng Lò nung điện P = 20 000 W, H = 50% (SGK Vật lí 12 KNTT trang 24)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  H = Q_có_ích / Q_toàn_phần = 50%
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div className="border border-neutral-800 bg-[#111111] p-3 space-y-1">
                  <p className="text-sky-300 font-bold">1. ĐIỆN NĂNG LÒ NUNG</p>
                  <p className="text-white font-bold text-sm">P = 20 000 W</p>
                  <p className="text-neutral-300">
                    Hiệu suất truyền nhiệt cho đồng: <strong className="text-sky-300">H = 50%</strong> (Công suất có ích P_ích = 10 000 W).
                  </p>
                </div>
                <div className="border-2 border-sky-400 bg-sky-950/30 p-3 space-y-1">
                  <p className="text-sky-300 font-bold">2. TĂNG NHIỆT ĐỘ (30°C → 1084°C)</p>
                  <p className="text-white font-bold text-sm">Q₁ = 801 040 J</p>
                  <p className="text-sky-100">
                    m = 2 kg, c_đồng = 380 J/(kg·K), Δt = 1084 - 30 = 1054 K.
                  </p>
                </div>
                <div className="border border-neutral-800 bg-[#111111] p-3 space-y-1">
                  <p className="text-sky-300 font-bold">3. NÓNG CHẢY HOÀN TOÀN</p>
                  <p className="text-white font-bold text-sm">Q₂ = 3,6·10⁵ J</p>
                  <p className="text-neutral-300">
                    λ_đồng = 1,8·10⁵ J/kg tại nhiệt độ không đổi 1084°C.
                  </p>
                </div>
              </div>
            </div>
          )}

          {mode === 'table' && (
            <div className="space-y-2">
              <p className="text-xs font-bold text-white">
                Bảng hằng số Nhiệt dung riêng (Bài 4) &amp; Nhiệt nóng chảy riêng (Bài 5) chuẩn SGK Vật lí 12 KNTT:
              </p>
              <div className="overflow-x-auto border border-neutral-800">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-sky-950/60 text-sky-300 border-b border-neutral-800">
                      <th className="p-2.5 border-r border-neutral-800/60">Chất khảo sát</th>
                      <th className="p-2.5 border-r border-neutral-800/60">Nhiệt độ nóng chảy</th>
                      <th className="p-2.5 border-r border-neutral-800/60">Nhiệt dung riêng c</th>
                      <th className="p-2.5">Nhiệt nóng chảy riêng λ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-[#111111] text-neutral-100">
                    <tr className="bg-sky-950/30">
                      <td className="p-2.5 border-r border-neutral-800/40 font-bold text-sky-300">Nước đá / Nước lỏng</td>
                      <td className="p-2.5 border-r border-neutral-800/40">0 °C (273 K)</td>
                      <td className="p-2.5 border-r border-neutral-800/40">c_nước = 4180 J/(kg·K)</td>
                      <td className="p-2.5 font-bold text-sky-300">3,34 · 10⁵ J/kg</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 border-r border-neutral-800/40 font-bold text-white">Đồng (Copper - Cu)</td>
                      <td className="p-2.5 border-r border-neutral-800/40">1084 °C</td>
                      <td className="p-2.5 border-r border-neutral-800/40">c_đồng = 380 J/(kg·K)</td>
                      <td className="p-2.5 font-bold text-sky-300">1,8 · 10⁵ J/kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-[11px] font-mono text-sky-300 flex items-center gap-1.5 pt-1 border-t border-neutral-800/30">
            <BookOpenCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
            <span>
              Nguồn dữ liệu chuẩn: SGK Vật lí 12 Kết nối tri thức (Bài 4 &amp; Bài 5 Câu hỏi 2 trang 24 - vietjack.com)
            </span>
          </p>
        </>
      )}

      {/* ================= HÓA HỌC 12 ================= */}
      {subject === 'chemistry' && (
        <>
          {mode === 'chart' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Biểu đồ so sánh nhiệt độ sôi Ester – Alcohol – Carboxylic Acid (Câu hỏi 3 trang 8 SGK Hóa 12 KNTT)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  M ≈ 74 g/mol
                </span>
              </div>
              <div className="border border-neutral-800 bg-[#111111] p-3">
                <svg
                  viewBox="0 0 360 135"
                  className="w-full h-36 overflow-visible"
                  role="img"
                  aria-label="Biểu đồ so sánh nhiệt độ sôi của methyl acetate 57 độ C, butan-1-ol 118 độ C và propanoic acid 141 độ C theo SGK Hóa 12 trang 8"
                >
                  <line x1="44" y1="12" x2="44" y2="108" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="44" y1="108" x2="340" y2="108" stroke="#FFFFFF" strokeWidth="1.5" />

                  {/* Bar 1: methyl acetate (57°C) */}
                  <rect x="70" y="69" width="54" height="39" fill="#082F49" stroke="#38BDF8" strokeWidth="2" />
                  <text x="80" y="63" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                    57°C
                  </text>
                  <text x="58" y="123" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    methyl acetate
                  </text>

                  {/* Bar 2: butan-1-ol (118°C) */}
                  <rect x="168" y="30" width="54" height="78" fill="#1E293B" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="176" y="24" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                    118°C
                  </text>
                  <text x="165" y="123" fill="#FFFFFF" fontSize="9.5" fontFamily="JetBrains Mono">
                    butan-1-ol
                  </text>

                  {/* Bar 3: propanoic acid (141°C) */}
                  <rect x="264" y="15" width="54" height="93" fill="#0369A1" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="272" y="10" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                    141°C
                  </text>
                  <text x="250" y="123" fill="#FFFFFF" fontSize="9.5" fontFamily="JetBrains Mono">
                    propanoic acid
                  </text>
                </svg>
              </div>
            </div>
          )}

          {mode === 'diagram' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Sơ đồ Pin Galvani Cu–Ag ở điều kiện chuẩn (Câu hỏi 6 trang 75 SGK Hóa 12 KNTT - Bài 15)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  E°_pin = 0,799 - 0,34 = 0,459 V
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div className="border border-neutral-800 bg-[#111111] p-3 space-y-1">
                  <p className="text-sky-300 font-bold">ANODE (-) • THANH ĐỒNG (Cu)</p>
                  <p className="text-white font-bold">Cu → Cu²⁺ + 2e</p>
                  <p className="text-neutral-300">E°(Cu²⁺/Cu) = +0,34 V (Nhường electron)</p>
                </div>
                <div className="border-2 border-sky-400 bg-sky-950/40 p-3 space-y-1 text-center flex flex-col justify-center">
                  <p className="text-sky-300 font-bold">CHIỀU DÒNG ELECTRON</p>
                  <p className="text-white font-bold text-sm">Anode (Cu) ➔ Cathode (Ag)</p>
                  <p className="text-sky-200">Vôn kế hiện đúng: 0,459 V</p>
                </div>
                <div className="border border-neutral-800 bg-[#111111] p-3 space-y-1">
                  <p className="text-sky-300 font-bold">CATHODE (+) • THANH BẠC (Ag)</p>
                  <p className="text-white font-bold">Ag⁺ + 1e → Ag</p>
                  <p className="text-neutral-300">E°(Ag⁺/Ag) = +0,799 V (Nhận electron)</p>
                </div>
              </div>
            </div>
          )}

          {mode === 'table' && (
            <div className="space-y-2">
              <p className="text-xs font-bold text-white">
                Dãy cặp Oxi hóa – Khử &amp; Thế điện cực chuẩn (SGK Hóa 12 KNTT - Câu hỏi 3 trang 71 &amp; Câu 6 trang 75):
              </p>
              <div className="overflow-x-auto border border-neutral-800">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-sky-950/60 text-sky-300 border-b border-neutral-800">
                      <th className="p-2 border-r border-neutral-800/60">Thứ tự tính khử giảm dần (Trang 71)</th>
                      <th className="p-2 border-r border-neutral-800/60">Cặp tiêu biểu</th>
                      <th className="p-2 border-r border-neutral-800/60">E° chuẩn (V)</th>
                      <th className="p-2">Vai trò trong Pin Cu–Ag</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-[#111111] text-neutral-100">
                    <tr>
                      <td className="p-2 border-r border-neutral-800/40" colSpan={4}>
                        <span className="text-sky-300 font-bold">Chiều giảm tính khử: </span>
                        Na⁺/Na &gt; Mg²⁺/Mg &gt; Al³⁺/Al &gt; Zn²⁺/Zn &gt; Fe²⁺/Fe &gt; 2H⁺/H₂ &gt; Cu²⁺/Cu &gt; Ag⁺/Ag
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-neutral-800/40">Điện cực chuẩn Hydrogen</td>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300 font-bold">2H⁺ / H₂</td>
                      <td className="p-2 border-r border-neutral-800/40">0,000 V</td>
                      <td className="p-2">Mốc quy ước chuẩn</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-neutral-800/40">Cặp Đồng (Copper)</td>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300 font-bold">Cu²⁺ / Cu</td>
                      <td className="p-2 border-r border-neutral-800/40">+0,340 V</td>
                      <td className="p-2">Cực âm (Anode): Cu → Cu²⁺ + 2e</td>
                    </tr>
                    <tr className="bg-sky-950/30 font-bold">
                      <td className="p-2 border-r border-neutral-800/40">Cặp Bạc (Silver)</td>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300">Ag⁺ / Ag</td>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300">+0,799 V</td>
                      <td className="p-2 text-sky-200">Cực dương (Cathode): Ag⁺ + 1e → Ag</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-[11px] font-mono text-sky-300 flex items-center gap-1.5 pt-1 border-t border-neutral-800/30">
            <BookOpenCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
            <span>
              Nguồn dữ liệu chuẩn: SGK Hóa học 12 Kết nối tri thức (Bài 1 trang 8 &amp; Bài 15 trang 71, 75 - vietjack.com)
            </span>
          </p>
        </>
      )}

      {/* ================= TIẾNG ANH 12 ================= */}
      {subject === 'english' && (
        <>
          {mode === 'chart' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Sơ đồ cấu trúc Causatives &amp; Đảo ngữ Điều kiện (SGK Tiếng Anh 12 Global Success - Unit 6 trang 79)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  Active ↔ Passive Causative
                </span>
              </div>
              <div className="border border-neutral-800 bg-[#111111] p-3">
                <svg
                  viewBox="0 0 360 125"
                  className="w-full h-32 overflow-visible"
                  role="img"
                  aria-label="Sơ đồ chuyển đổi giữa thể cầu khiến chủ động và bị động theo Tiếng Anh 12 Global Success Unit 6 trang 79"
                >
                  <rect
                    x="12"
                    y="16"
                    width="148"
                    height="44"
                    fill="#082F49"
                    stroke="#38BDF8"
                    strokeWidth="1.8"
                  />
                  <text x="20" y="33" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    ACTIVE CAUSATIVE
                  </text>
                  <text x="20" y="49" fill="#FFFFFF" fontSize="9" fontFamily="JetBrains Mono">
                    have + sb + V_bare
                  </text>

                  <path
                    d="M 164 38 L 196 38"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />

                  <rect
                    x="200"
                    y="16"
                    width="148"
                    height="44"
                    fill="#0A0A0A"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                  />
                  <text x="208" y="33" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="bold">
                    PASSIVE CAUSATIVE
                  </text>
                  <text x="208" y="49" fill="#FFFFFF" fontSize="9" fontFamily="JetBrains Mono">
                    have/get + sth + V3/ed
                  </text>

                  <rect x="12" y="74" width="336" height="38" fill="#0A0A0A" stroke="#38BDF8" strokeWidth="1.2" />
                  <text x="20" y="90" fill="#38BDF8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">
                    Ví dụ SGK trang 79: &quot;I have a robot clean my house every day&quot;
                  </text>
                  <text x="20" y="104" fill="#FFFFFF" fontSize="9" fontFamily="JetBrains Mono">
                    ➔ &quot;I have my house cleaned every day (by a robot).&quot;
                  </text>
                </svg>
              </div>
            </div>
          )}

          {mode === 'diagram' && (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-white">
                  Sơ đồ tương quan Double Comparatives (Unit 4: Urbanisation - Trang 51 SGK Tiếng Anh 12 Global Success)
                </span>
                <span className="font-mono text-[11px] font-bold text-sky-300 bg-sky-950/80 border border-sky-400 px-2 py-0.5">
                  The + comparative + S + V, the + comparative + S + V
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="border-2 border-sky-400 bg-sky-950/30 p-3 space-y-1.5">
                  <p className="text-sky-300 font-bold">TƯƠNG QUAN THUẬN (CÙNG TĂNG)</p>
                  <p className="text-white font-bold">
                    &quot;The more people move into big cities, the higher the unemployment is.&quot;
                  </p>
                  <p className="text-sky-100">
                    (Càng nhiều người chuyển đến các thành phố lớn thì tỷ lệ thất nghiệp càng cao — Bài 2 trang 51).
                  </p>
                </div>
                <div className="border border-neutral-800 bg-[#111111] p-3 space-y-1.5">
                  <p className="text-sky-300 font-bold">TƯƠNG QUAN NGHỊCH (TĂNG – GIẢM)</p>
                  <p className="text-white font-bold">
                    &quot;The more houses are built, the less space we have for plants and trees.&quot;
                  </p>
                  <p className="text-neutral-300">
                    (Càng xây nhiều nhà, chúng ta càng có ít không gian cho cây cối — Bài 2 trang 51).
                  </p>
                </div>
              </div>
            </div>
          )}

          {mode === 'table' && (
            <div className="space-y-2">
              <p className="text-xs font-bold text-white">
                Bảng đối chiếu câu gốc &amp; câu viết lại chuẩn SGK Tiếng Anh 12 Global Success (Unit 4 trang 51 &amp; Unit 6 trang 79):
              </p>
              <div className="overflow-x-auto border border-neutral-800">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-sky-950/60 text-sky-300 border-b border-neutral-800">
                      <th className="p-2 border-r border-neutral-800/60">Chủ điểm (Unit)</th>
                      <th className="p-2 border-r border-neutral-800/60">Câu gốc trong SGK</th>
                      <th className="p-2">Cấu trúc biến đổi chuẩn đáp án SGK</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 bg-[#111111] text-neutral-100">
                    <tr>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300 font-bold">
                        Unit 6 (Trang 79 - Câu 2)
                      </td>
                      <td className="p-2 border-r border-neutral-800/40">
                        My dad arranged for someone to repair our robot vacuum cleaner.
                      </td>
                      <td className="p-2 text-sky-200 font-bold">
                        My dad had / got our robot vacuum cleaner repaired.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300 font-bold">
                        Unit 6 (Trang 79 - Câu 3)
                      </td>
                      <td className="p-2 border-r border-neutral-800/40">
                        The shop arranged for a robot to put together our furniture in 10 minutes.
                      </td>
                      <td className="p-2 text-sky-200 font-bold">
                        We had a robot put together / got a robot to put together our new furniture in 10 minutes.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-neutral-800/40 text-sky-300 font-bold">
                        Unit 4 (Trang 51 - Câu 1)
                      </td>
                      <td className="p-2 border-r border-neutral-800/40">
                        Housing is getting more and more expensive in big cities...
                      </td>
                      <td className="p-2">
                        ...housing is becoming more expensive every day (Double comparative chỉ sự thay đổi).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-[11px] font-mono text-sky-300 flex items-center gap-1.5 pt-1 border-t border-neutral-800/30">
            <BookOpenCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />
            <span>
              Nguồn dữ liệu chuẩn: SGK Tiếng Anh 12 Global Success (Unit 4 Language trang 51 &amp; Unit 6 Language trang 79 - vietjack.com)
            </span>
          </p>
        </>
      )}
    </div>
  );
};
