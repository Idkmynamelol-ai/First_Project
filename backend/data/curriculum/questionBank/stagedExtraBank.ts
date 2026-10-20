import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

/**
 * STAGED EXTRA QUESTIONS (GDPT 2018)
 * Merged into the active question bank during the scheduled checkpoint cycle.
 */
export const STAGED_EXTRA_QUESTIONS: Record<string, SampleQuestionTemplate[]> = {
  // ==========================================
  // TOÁN HỌC 12
  // ==========================================
  'math12-ch1-monotonicity-extrema': [
    {
      questionText:
        'Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$. Khoảng nghịch biến của hàm số là:',
      options: ['(-1; 3) \\setminus {1}', '(-1; 1) và (1; 3)', '(-\\infty; -1)', '(3; +\\infty)'],
      correctAnswer: '(-1; 1) và (1; 3)',
      detailedDerivation:
        'Tập xác định: $D = \\mathbb{R} \\setminus \\{1\\}$. Đạo hàm: $y\' = \\frac{(2x - 3)(x - 1) - (x^2 - 3x + 6)}{(x - 1)^2} = \\frac{x^2 - 2x - 3}{(x - 1)^2}$. Cho $y\' = 0 \\iff x = -1$ hoặc $x = 3$. Vì $(x-1)^2 > 0, \\forall x \\neq 1$, dấu của $y\'$ phụ thuộc vào tử thức. $y\' < 0 \\iff -1 < x < 3$ và $x \\neq 1$. Vậy hàm số nghịch biến trên từng khoảng $(-1; 1)$ và $(1; 3)$.',
      cognitiveLevel: 'Thông hiểu',
    },
  ],
  'math12-ch3-integrals-antiderivatives': [
    {
      questionText:
        'Một vật chuyển động với gia tốc $a(t) = 3t^2 + 2t\\text{ (m/s}^2)$. Biết tại thời điểm ban đầu $t = 0$, vận tốc của vật là $v(0) = 5\\text{ m/s}$. Quãng đường vật đi được trong 3 giây đầu tiên là:',
      options: ['44.25 m', '48.00 m', '36.50 m', '52.75 m'],
      correctAnswer: '44.25 m',
      detailedDerivation:
        'Vận tốc của vật là nguyên hàm của gia tốc: $v(t) = \\int a(t)dt = \\int (3t^2 + 2t)dt = t^3 + t^2 + C$. Do $v(0) = 5\\text{ m/s} \\implies C = 5 \\implies v(t) = t^3 + t^2 + 5\\text{ (m/s)}$. Vì $v(t) > 0, \\forall t \\in [0; 3]$, quãng đường vật đi được trong 3 giây đầu tiên là: $S = \\int_0^3 v(t)dt = \\int_0^3 (t^3 + t^2 + 5)dt = \\left[ \\frac{t^4}{4} + \\frac{t^3}{3} + 5t \\right]_0^3 = \\frac{81}{4} + \\frac{27}{3} + 15 = 20.25 + 9 + 15 = 44.25\\text{ m}$.',
      cognitiveLevel: 'Vận dụng',
    },
  ],
  'math12-ch5-vectors-coordinate-space-oxyz': [
    {
      questionText:
        'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - 2y + z + 5 = 0$ và điểm $A(1; 2; 3)$. Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng:',
      options: ['2', '3', '4', '1'],
      correctAnswer: '2',
      detailedDerivation:
        'Áp dụng công thức khoảng cách từ điểm $A(x_0; y_0; z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$: $d(A, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$. Thay tọa độ điểm $A(1; 2; 3)$ và phương trình mặt phẳng: $d(A, (P)) = \\frac{|2(1) - 2(2) + 1(3) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 + 3 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{6}{\\sqrt{9}} = \\frac{6}{3} = 2$.',
      cognitiveLevel: 'Nhận biết',
    },
  ],
  'math12-ch6-conditional-probability-bayes': [
    {
      questionText:
        'Tại một cơ sở y tế, tỷ lệ người mắc bệnh X trong cộng đồng là 2%. Một xét nghiệm chẩn đoán có độ nhạy 95% (nếu có bệnh thì 95% xét nghiệm dương tính) và độ đặc hiệu 90% (nếu không có bệnh thì 90% xét nghiệm âm tính). Một người xét nghiệm có kết quả dương tính. Xác suất người này thực sự mắc bệnh X xấp xỉ bằng:',
      options: ['16.2%', '95.0%', '2.0%', '50.0%'],
      correctAnswer: '16.2%',
      detailedDerivation:
        'Gọi $A$ là biến cố người đó mắc bệnh, $B$ là biến cố xét nghiệm dương tính. Ta có $P(A) = 0.02, P(\\bar{A}) = 0.98$. $P(B|A) = 0.95, P(B|\\bar{A}) = 1 - 0.90 = 0.10$. Xác suất toàn phần: $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A}) = 0.02 \\times 0.95 + 0.98 \\times 0.10 = 0.019 + 0.098 = 0.117$. Áp dụng công thức Bayes: $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0.019}{0.117} \\approx 16.24\\%$.',
      cognitiveLevel: 'Vận dụng cao',
    },
  ],

  // ==========================================
  // VẬT LÍ 12
  // ==========================================
  'physics12-ch1-thermal-physics': [
    {
      questionText:
        'Một xilanh chứa $0.2\\text{ mol}$ khí lí tưởng ở nhiệt độ $300\\text{ K}$. Khối khí nhận một nhiệt lượng $Q = 500\\text{ J}$ và thực hiện công $A = 200\\text{ J}$ đẩy pittông di chuyển. Độ biến thiên nội năng $\\Delta U$ của khối khí là:',
      options: ['300 J', '700 J', '-300 J', '200 J'],
      correctAnswer: '300 J',
      detailedDerivation:
        'Theo định luật I Nhiệt động lực học: $\\Delta U = Q + A$. Quy ước dấu: khối khí nhận nhiệt lượng nên $Q > 0 \\implies Q = +500\\text{ J}$. Khối khí sinh công đẩy pittông nên công hệ nhận là $A < 0 \\implies A = -200\\text{ J}$. Suy ra $\\Delta U = 500 - 200 = 300\\text{ J}$.',
      cognitiveLevel: 'Thông hiểu',
    },
  ],
  'physics12-ch2-ideal-gas-laws': [
    {
      questionText:
        'Một bình kín có dung tích $10\\text{ lít}$ chứa khí heli ở áp suất $2\\text{ atm}$ và nhiệt độ $27^\\circ\\text{C}$. Khối lượng khí heli trong bình xấp xỉ bằng (biết $R = 0.0821\\text{ atm.l/(mol.K)}$, $M_{\\text{He}} = 4\\text{ g/mol}$):',
      options: ['3.25 g', '6.50 g', '1.62 g', '4.00 g'],
      correctAnswer: '3.25 g',
      detailedDerivation:
        'Đổi nhiệt độ sang Kelvin: $T = 27 + 273 = 300\\text{ K}$. Áp dụng phương trình trạng thái Clapeyron - Mendeleev: $pV = nRT = \\frac{m}{M}RT \\implies m = \\frac{pVM}{RT} = \\frac{2 \\times 10 \\times 4}{0.0821 \\times 300} = \\frac{80}{24.63} \\approx 3.25\\text{ g}$.',
      cognitiveLevel: 'Vận dụng',
    },
  ],
  'physics12-ch3-magnetic-fields-induction': [
    {
      questionText:
        'Một khung dây dẫn phẳng có diện tích $S = 50\\text{ cm}^2$ gồm $100\\text{ vòng dây}$ đặt trong từ trường đều có cảm ứng từ $B = 0.04\\text{ T}$. Vectơ pháp tuyến $\\vec{n}$ của mặt phẳng khung hợp với $\\vec{B}$ một góc $60^\\circ$. Từ thông qua khung dây bằng:',
      options: ['0.01 Wb', '0.02 Wb', '0.017 Wb', '0.005 Wb'],
      correctAnswer: '0.01 Wb',
      detailedDerivation:
        'Đổi đơn vị diện tích: $S = 50\\text{ cm}^2 = 50 \\times 10^{-4}\\text{ m}^2 = 5 \\times 10^{-3}\\text{ m}^2$. Công thức từ thông qua khung dây gồm $N$ vòng: $\\Phi = NBS \\cos\\alpha = 100 \\times 0.04 \\times (5 \\times 10^{-3}) \\times \\cos 60^\\circ = 0.02 \\times 0.5 = 0.01\\text{ Wb}$.',
      cognitiveLevel: 'Nhận biết',
    },
  ],
  'physics12-ch4-nuclear-physics': [
    {
      questionText:
        'Hạt nhân đồng vị phóng xạ $^{131}_{53}\\text{I}$ có chu kỳ bán rã là 8 ngày. Ban đầu có một mẫu chứa $100\\text{ mg}$ $^{131}\\text{I}$. Sau 24 ngày, khối lượng $^{131}\\text{I}$ còn lại trong mẫu là:',
      options: ['12.5 mg', '25.0 mg', '6.25 mg', '50.0 mg'],
      correctAnswer: '12.5 mg',
      detailedDerivation:
        'Thời gian phóng xạ: $t = 24\\text{ ngày} = 3T$ (3 chu kỳ bán rã). Khối lượng còn lại: $m = m_0 2^{-t/T} = 100 \\times 2^{-3} = \\frac{100}{8} = 12.5\\text{ mg}$.',
      cognitiveLevel: 'Thông hiểu',
    },
  ],

  // ==========================================
  // HÓA HỌC 12
  // ==========================================
  'chemistry12-ch1-ester-lipid': [
    {
      questionText:
        'Thủy phân hoàn toàn $8.8\\text{ gam}$ ethyl acetate $(\\text{CH}_3\\text{COOC}_2\\text{H}_5)$ bằng dung dịch $\\text{NaOH}$ vừa đủ, đun nóng. Khối lượng muối acetate thu được sau khi cô cạn dung dịch là:',
      options: ['8.2 gam', '6.8 gam', '9.6 gam', '7.4 gam'],
      correctAnswer: '8.2 gam',
      detailedDerivation:
        'Phương trình hóa học: $\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}$. Khối lượng mol ethyl acetate: $M = 88\\text{ g/mol} \\implies n = \\frac{8.8}{88} = 0.1\\text{ mol}$. Khối lượng muối sodium acetate $(\\text{CH}_3\\text{COONa}, M = 82\\text{ g/mol})$: $m = 0.1 \\times 82 = 8.2\\text{ gam}$.',
      cognitiveLevel: 'Thông hiểu',
    },
  ],
  'chemistry12-ch2-carbohydrates': [
    {
      questionText:
        'Chất nào sau đây không tham gia phản ứng tráng bạc (phản ứng với thuốc thử Tollens) ở điều kiện thường?',
      options: ['Sucrose (Saccarozơ)', 'Glucose', 'Fructose', 'Maltose'],
      correctAnswer: 'Sucrose (Saccarozơ)',
      detailedDerivation:
        'Glucose và Maltose có nhóm aldehyde tự do $-\\text{CHO}$ nên có phản ứng tráng bạc. Fructose trong môi trường kiềm chuyển hóa thành glucose nên cũng tráng bạc. Sucrose là disaccharide liên kết $\\alpha,\\beta-1,2$-glycosidic giữa hai gốc glucose và fructose không còn nhóm $-\\text{OH}$ hemiacetal tự do nên không có tính khử và không tráng bạc.',
      cognitiveLevel: 'Nhận biết',
    },
  ],
  'chemistry12-ch3-amine-amino-acid-peptide': [
    {
      questionText:
        'Cho peptide mạch hở có công thức cấu tạo: $\\text{Gly-Ala-Val}$. Số liên kết peptide trong phân tử là:',
      options: ['2', '3', '1', '4'],
      correctAnswer: '2',
      detailedDerivation:
        'Tripeptide gồm 3 gốc $\\alpha$-amino acid liên kết với nhau bằng 2 liên kết peptide $-\\text{CO-NH}-$.',
      cognitiveLevel: 'Nhận biết',
    },
  ],
  'chemistry12-ch4-galvanic-cells-complexes': [
    {
      questionText:
        'Khi cho dung dịch ammonia $(\\text{NH}_3)$ dư vào ống nghiệm chứa kết tủa $\\text{Cu(OH)}_2$, kết tủa tan ra tạo thành dung dịch có màu xanh lam thẫm. Hiện tượng này xảy ra do sự hình thành phức chất nào sau đây?',
      options: ['[Cu(NH3)4](OH)2', '[Cu(NH3)2]OH', 'Cu(NH3)4', '[Cu(H2O)4]2+'],
      correctAnswer: '[Cu(NH3)4](OH)2',
      detailedDerivation:
        'Kết tủa $\\text{Cu(OH)}_2$ tan trong dung dịch $\\text{NH}_3$ dư nhờ tạo thành phức chất tan tetraamminecopper(II) hydroxide: $\\text{Cu(OH)}_2 + 4\\text{NH}_3 \\rightarrow [\\text{Cu(NH}_3)_4](\\text{OH})_2$.',
      cognitiveLevel: 'Thông hiểu',
    },
  ],

  // ==========================================
  // TIẾNG ANH 12
  // ==========================================
  'eng12-unit1-3-tenses-articles-prepositions': [
    {
      questionText:
        'By the time the international environmental summit concludes next Friday, the delegates ______ on a binding agreement regarding renewable energy transition targets.',
      options: ['will have agreed', 'have agreed', 'will agree', 'agreed'],
      correctAnswer: 'will have agreed',
      detailedDerivation:
        'Dấu hiệu thời gian: "By the time + S + V(hiện tại đơn)" chỉ một mốc thời gian trong tương lai. Mệnh đề chính phải dùng thì tương lai hoàn thành (Future Perfect: will have + V3/ed) để diễn tả hành động sẽ hoàn tất trước mốc đó.',
      cognitiveLevel: 'Thông hiểu',
    },
  ],
  'eng12-unit4-7-comparatives-causatives': [
    {
      questionText:
        'The more rigorous the experimental verification procedures are, ______ the statistical anomalies in high-throughput materials screening.',
      options: ['the fewer', 'the less', 'fewer than', 'the more few'],
      correctAnswer: 'the fewer',
      detailedDerivation:
        'Cấu trúc so sánh kép (Double comparative): "The + comparative..., the + comparative...". Danh từ "anomalies" là danh từ đếm được số nhiều, nên dạng so sánh phù hợp là "the fewer", không dùng "the less" (dành cho danh từ không đếm được).',
      cognitiveLevel: 'Vận dụng',
    },
  ],
  'eng12-unit8-10-conditionals-inversion': [
    {
      questionText:
        '______ that the catalyst was prone to rapid thermal degradation, the engineering team would have opted for a more resilient titanium matrix.',
      options: ['Had they known', 'Were they to know', 'Should they know', 'If they know'],
      correctAnswer: 'Had they known',
      detailedDerivation:
        'Mệnh đề chính dùng cấu trúc điều kiện loại 3: "would have + V3/ed". Khi đảo ngữ câu điều kiện loại 3, ta bỏ "If" và đảo "Had + S + V3/ed" lên đầu câu: "Had they known that...".',
      cognitiveLevel: 'Vận dụng',
    },
  ],
  'eng11-perfect-participles-cleft-modals': [
    {
      questionText:
        '______ the preliminary thermodynamic equations, the students proceeded to calibrate the spectrophotometer for the kinetic experiment.',
      options: [
        'Having derived',
        'Derived',
        'Being derived',
        'To have derived',
      ],
      correctAnswer: 'Having derived',
      detailedDerivation:
        'Phân từ hoàn thành (Perfect Participle: Having + V3/ed) được sử dụng để nhấn mạnh một hành động chủ động đã hoàn tất trước khi hành động trong mệnh đề chính diễn ra ("proceeded to calibrate").',
      cognitiveLevel: 'Thông hiểu',
    },
  ],
};
