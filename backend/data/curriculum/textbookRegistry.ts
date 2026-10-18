import { CurriculumTopic } from './grade12/schema';
import { grade12Curriculum } from './grade12/index';

export type TextbookSeries =
  | 'Kết nối tri thức với cuộc sống'
  | 'Cánh Diều'
  | 'Chân trời sáng tạo'
  | 'Global Success';

export interface OfficialTextbookEntry {
  code: string;
  subject: 'math' | 'physics' | 'chemistry' | 'english';
  grade: 10 | 11 | 12;
  series: TextbookSeries[];
  chapterNumber: string;
  chapterTitle: string;
  mappedTopicId: string | null;
  coreCompetencyStandard: string;
  isIntegrated: boolean;
}

export interface TextbookAuditReport {
  timestamp: string;
  totalOfficialChapters: number;
  integratedChaptersCount: number;
  coveragePercentage: number;
  subjectBreakdown: Record<
    'math' | 'physics' | 'chemistry' | 'english',
    {
      total: number;
      integrated: number;
      percentage: number;
    }
  >;
  integratedChapters: OfficialTextbookEntry[];
  pendingChapters: OfficialTextbookEntry[];
}

/**
 * MASTER CATALOG OF OFFICIAL VIETNAMESE GDPT 2018 TEXTBOOKS
 * (Kết nối tri thức với cuộc sống, Cánh Diều, Chân trời sáng tạo & Global Success)
 */
export const OFFICIAL_GDPT2018_TEXTBOOK_CATALOG: Omit<OfficialTextbookEntry, 'isIntegrated'>[] = [
  // ==========================================
  // TOÁN HỌC 10 - 11 - 12 (KNTT / Cánh Diều)
  // ==========================================
  {
    code: 'MATH-10-CH1',
    subject: 'math',
    grade: 10,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương II',
    chapterTitle: 'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
    mappedTopicId: 'math10-ch1-linear-inequality-systems',
    coreCompetencyStandard: 'Biểu diễn miền nghiệm trên Oxy, xác định đỉnh đa giác lồi và giải bài toán quy hoạch tuyến tính tối ưu.',
  },
  {
    code: 'MATH-10-CH4',
    subject: 'math',
    grade: 10,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương IV',
    chapterTitle: 'Hệ thức lượng trong tam giác & Vectơ',
    mappedTopicId: 'math10-ch4-trig-vectors',
    coreCompetencyStandard: 'Định lý Cosin, định lý Sin, diện tích tam giác Heron, tích vô hướng của hai vectơ và bài toán đo đạc thực tế.',
  },
  {
    code: 'MATH-10-CH8-9',
    subject: 'math',
    grade: 10,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương VIII & IX',
    chapterTitle: 'Đại số tổ hợp & Ba đường Conic trong mặt phẳng Oxy',
    mappedTopicId: 'math10-ch8-9-combinatorics-conics',
    coreCompetencyStandard: 'Quy tắc đếm, Hoán vị, Chỉnh hợp, Tổ hợp, Nhị thức Newton và Phương trình chuẩn tắc Elip, Hypebol, Parabol.',
  },
  {
    code: 'MATH-11-CH1-2',
    subject: 'math',
    grade: 11,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I & II',
    chapterTitle: 'Hàm số lượng giác, Cấp số cộng & Cấp số nhân',
    mappedTopicId: 'math11-ch2-3-trigonometry-sequences',
    coreCompetencyStandard: 'Công thức biến đổi lượng giác, phương trình lượng giác cơ bản, số hạng tổng quát và tổng n số hạng của CSC & CSN.',
  },
  {
    code: 'MATH-11-CH6',
    subject: 'math',
    grade: 11,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương VI',
    chapterTitle: 'Hàm số mũ và Hàm số logarit',
    mappedTopicId: 'math11-ch4-exponential-logarithmic',
    coreCompetencyStandard: 'Quy tắc logarit, đổi cơ số, phương trình - bất phương trình mũ & logarit, mô hình lãi kép ngân hàng.',
  },
  {
    code: 'MATH-11-CH8-9',
    subject: 'math',
    grade: 11,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương VIII & IX',
    chapterTitle: 'Quan hệ vuông góc trong không gian, Thể tích khối đa diện',
    mappedTopicId: 'math11-ch10-spatial-geometry-volumes',
    coreCompetencyStandard: 'Đường thẳng vuông góc mặt phẳng, hai mặt phẳng vuông góc, góc phẳng nhị diện, khoảng cách và thể tích khối chóp, lăng trụ.',
  },
  {
    code: 'MATH-12-CH1',
    subject: 'math',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I (Phần 1)',
    chapterTitle: 'Ứng dụng đạo hàm: Tính đơn điệu, cực trị & GTLN - GTNN',
    mappedTopicId: 'math12-ch1-monotonicity-extrema',
    coreCompetencyStandard: 'Khảo sát biến thiên, cực trị, bài toán tối ưu thực tiễn bằng bảng biến thiên và đạo hàm cấp một, cấp hai.',
  },
  {
    code: 'MATH-12-CH1-ASYM',
    subject: 'math',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I (Phần 2)',
    chapterTitle: 'Đường tiệm cận và khảo sát đồ thị hàm số (Đứng, Ngang, Xiên)',
    mappedTopicId: 'math12-ch1-asymptotes-graphs',
    coreCompetencyStandard: 'Tiệm cận đứng, ngang, tiệm cận xiên y = ax + b của hàm phân thức hữu tỉ và nhận diện đồ thị hàm số.',
  },
  {
    code: 'MATH-12-CH3',
    subject: 'math',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương III',
    chapterTitle: 'Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm',
    mappedTopicId: 'math12-ch3-grouped-data-dispersion',
    coreCompetencyStandard: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai s² và độ lệch chuẩn s của mẫu số liệu ghép nhóm.',
  },
  {
    code: 'MATH-12-CH4',
    subject: 'math',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương IV',
    chapterTitle: 'Nguyên hàm, Tích phân xác định & Ứng dụng hình học',
    mappedTopicId: 'math12-ch4-integrals-applications',
    coreCompetencyStandard: 'Phương pháp đổi biến, từng phần, tính diện tích hình phẳng và thể tích khối tròn xoay quanh trục Ox.',
  },
  {
    code: 'MATH-12-CH2-5',
    subject: 'math',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương II & V',
    chapterTitle: 'Phương pháp tọa độ trong không gian Oxyz',
    mappedTopicId: 'math12-ch5-oxyz-geometry',
    coreCompetencyStandard: 'Phương trình mặt phẳng, đường thẳng, mặt cầu, góc và khoảng cách trong không gian ba chiều Oxyz.',
  },
  {
    code: 'MATH-12-CH6',
    subject: 'math',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương VI',
    chapterTitle: 'Xác suất có điều kiện, Công thức xác suất toàn phần & Bayes',
    mappedTopicId: 'math12-ch6-conditional-probability-bayes',
    coreCompetencyStandard: 'Quy tắc nhân xác suất P(A∩B) = P(A)P(B|A), công thức xác suất toàn phần và công thức Bayes trong chẩn đoán y tế, kiểm định.',
  },

  // ==========================================
  // VẬT LÍ 10 - 11 - 12 (KNTT / Cánh Diều)
  // ==========================================
  {
    code: 'PHYS-10-CH1',
    subject: 'physics',
    grade: 10,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I',
    chapterTitle: 'Mô tả chuyển động & Động học chất điểm',
    mappedTopicId: 'phys10-kinematics-motion',
    coreCompetencyStandard: 'Vận tốc, gia tốc, phương trình chuyển động thẳng biến đổi đều v² - v0² = 2ad và sự rơi tự do.',
  },
  {
    code: 'PHYS-10-CH2-3',
    subject: 'physics',
    grade: 10,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương II & III',
    chapterTitle: 'Động lực học & Bảo toàn năng lượng',
    mappedTopicId: 'phys10-mechanics-energy-momentum',
    coreCompetencyStandard: 'Định luật II Newton, lực ma sát, định lý động năng, bảo toàn cơ năng và va chạm mềm/đàn hồi.',
  },
  {
    code: 'PHYS-11-CH1-2',
    subject: 'physics',
    grade: 11,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I & II',
    chapterTitle: 'Dao động điều hòa & Sóng cơ',
    mappedTopicId: 'phys11-oscillations-waves-electricity',
    coreCompetencyStandard: 'Phương trình dao động x = A cos(ωt + φ), năng lượng dao động, giao thoa sóng cơ và sóng dừng hai đầu cố định.',
  },
  {
    code: 'PHYS-12-CH1',
    subject: 'physics',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I',
    chapterTitle: 'Vật lí nhiệt (Nội năng, Định luật I & Nhiệt chuyển thể)',
    mappedTopicId: 'phys12-ch1-thermal-physics',
    coreCompetencyStandard: 'Nội năng, biến thiên nội năng ΔU = A + Q, nhiệt dung riêng c, nhiệt nóng chảy riêng và nhiệt hóa hơi riêng.',
  },
  {
    code: 'PHYS-12-CH2',
    subject: 'physics',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương II',
    chapterTitle: 'Khí lí tưởng (Boyle, Charles & Phương trình Clapeyron-Mendeleev)',
    mappedTopicId: 'phys12-ch2-ideal-gas',
    coreCompetencyStandard: 'Định luật Boyle, Charles, phương trình trạng thái khí lí tưởng pV = nRT và động học phân tử chất khí.',
  },
  {
    code: 'PHYS-12-CH3',
    subject: 'physics',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương III',
    chapterTitle: 'Từ trường, Cảm ứng điện từ & Dòng điện xoay chiều',
    mappedTopicId: 'phys12-ch3-magnetic-field-em-induction',
    coreCompetencyStandard: 'Lực từ Lorentz, từ thông Φ = BS cos α, định luật Faraday e = -dΦ/dt và giá trị hiệu dụng dòng điện xoay chiều.',
  },
  {
    code: 'PHYS-12-CH4',
    subject: 'physics',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương IV',
    chapterTitle: 'Vật lí hạt nhân (Năng lượng liên kết & Định luật phóng xạ)',
    mappedTopicId: 'phys12-ch4-nuclear-physics',
    coreCompetencyStandard: 'Độ hụt khối Δm, năng lượng liên kết riêng E_lk/A, định luật phóng xạ N(t) = N0 2^(-t/T) và phản ứng hạt nhân.',
  },

  // ==========================================
  // HÓA HỌC 10 - 11 - 12 (KNTT / Cánh Diều)
  // ==========================================
  {
    code: 'CHEM-10-CH4-5',
    subject: 'chemistry',
    grade: 10,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương IV & V',
    chapterTitle: 'Phản ứng oxi hóa - khử & Năng lượng hóa học',
    mappedTopicId: 'chem10-redox-thermochemistry',
    coreCompetencyStandard: 'Bảo toàn electron, biến thiên enthalpy chuẩn Δ_r H°_298, phản ứng tỏa nhiệt và thu nhiệt.',
  },
  {
    code: 'CHEM-11-CH1-4',
    subject: 'chemistry',
    grade: 11,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương I & IV',
    chapterTitle: 'Cân bằng hóa học & Dẫn xuất Hydrocarbon',
    mappedTopicId: 'chem11-equilibrium-ph-organic',
    coreCompetencyStandard: 'Nguyên lý Le Chatelier, thuyết acid-base Brønsted-Lowry, pH và tính chất hóa học nhóm chức alcohol, carboxylic acid.',
  },
  {
    code: 'CHEM-12-CH1',
    subject: 'chemistry',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương 1',
    chapterTitle: 'Ester – Lipid & Xà phòng hóa chất béo',
    mappedTopicId: 'chem12-ch1-ester-lipid',
    coreCompetencyStandard: 'Danh pháp IUPAC, phản ứng thủy phân thuận nghịch (acid) và một chiều (kiềm), bảo toàn khối lượng chất béo.',
  },
  {
    code: 'CHEM-12-CH2',
    subject: 'chemistry',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương 2',
    chapterTitle: 'Carbohydrate (Glucose, Fructose, Saccharose, Tinh bột & Cellulose)',
    mappedTopicId: 'chem12-ch2-carbohydrate',
    coreCompetencyStandard: 'Cấu tạo mạch hở/vòng, phản ứng tráng bạc Tollens, thủy phân polysaccharide và lên men rượu.',
  },
  {
    code: 'CHEM-12-CH3',
    subject: 'chemistry',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương 3',
    chapterTitle: 'Hợp chất chứa Nitrogen (Amine, Amino acid, Peptide & Protein)',
    mappedTopicId: 'chem12-ch3-nitrogen-compounds',
    coreCompetencyStandard: 'Tính base của amine, điểm đẳng điện amino acid, phản ứng màu biuret và thủy phân liên kết peptide.',
  },
  {
    code: 'CHEM-12-CH4',
    subject: 'chemistry',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương 4',
    chapterTitle: 'Polymer và Vật liệu polymer (Chất dẻo, Tơ sợi & Cao su)',
    mappedTopicId: 'chem12-ch4-polymer',
    coreCompetencyStandard: 'Phản ứng trùng hợp (PE, PVC), trùng ngưng (tơ nilon-6,6), tơ bán tổng hợp visco/acetate và hiệu suất polymer hóa.',
  },
  {
    code: 'CHEM-12-CH5',
    subject: 'chemistry',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương 5',
    chapterTitle: 'Pin điện và Điện phân (Suất điện động Pin Galvani & Faraday)',
    mappedTopicId: 'chem12-ch5-electrochemistry',
    coreCompetencyStandard: 'Thế điện cực chuẩn E°, suất điện động pin Galvani, định luật Faraday m = (A·I·t)/(n·F) và cấu tạo phức chất.',
  },
  {
    code: 'CHEM-12-CH6',
    subject: 'chemistry',
    grade: 12,
    series: ['Kết nối tri thức với cuộc sống', 'Cánh Diều', 'Chân trời sáng tạo'],
    chapterNumber: 'Chương 6',
    chapterTitle: 'Đại cương về kim loại & Các phương pháp chống ăn mòn',
    mappedTopicId: 'chem12-ch6-metal-general',
    coreCompetencyStandard: 'Thuyết electron tự do, dãy điện hóa kim loại, quy tắc alpha, ăn mòn hóa học & điện hóa học, bảo vệ cathode.',
  },

  // ==========================================
  // TIẾNG ANH 10 - 11 - 12 (Global Success)
  // ==========================================
  {
    code: 'ENG-10-UNIT6-8',
    subject: 'english',
    grade: 10,
    series: ['Global Success'],
    chapterNumber: 'Unit 6–8',
    chapterTitle: 'Passive Voice, Conditionals & Relative Clauses',
    mappedTopicId: 'eng10-passive-conditionals-relatives',
    coreCompetencyStandard: 'Bị động khách quan với động từ tường thuật, câu điều kiện hỗn hợp 3-2 và mệnh đề quan hệ xác định/không xác định.',
  },
  {
    code: 'ENG-11-UNIT4-6',
    subject: 'english',
    grade: 11,
    series: ['Global Success'],
    chapterNumber: 'Unit 4–6',
    chapterTitle: 'Participle Clauses, Cleft Sentences & Modal Verbs',
    mappedTopicId: 'eng11-perfect-participles-cleft-modals',
    coreCompetencyStandard: 'Phân từ hoàn thành Having + V3/ed, câu chẻ nhấn mạnh It is/was... that... và động từ khuyết thiếu quá khứ.',
  },
  {
    code: 'ENG-12-UNIT1-3',
    subject: 'english',
    grade: 12,
    series: ['Global Success'],
    chapterNumber: 'Unit 1–3',
    chapterTitle: 'Past Tenses, Articles & Relative Clauses with Which',
    mappedTopicId: 'eng12-unit1-3-tenses-articles-prepositions',
    coreCompetencyStandard: 'Quá khứ đơn vs quá khứ tiếp diễn, mạo từ a/an/the và mệnh đề quan hệ thay thế cho cả mệnh đề phía trước.',
  },
  {
    code: 'ENG-12-UNIT4-7',
    subject: 'english',
    grade: 12,
    series: ['Global Success'],
    chapterNumber: 'Unit 4–7',
    chapterTitle: 'Double Comparatives, Causatives & Adverbial Clauses',
    mappedTopicId: 'eng12-unit4-7-comparatives-causatives',
    coreCompetencyStandard: 'So sánh kép The more... the more..., thể sai khiến have/get sth done và mệnh đề trạng ngữ chỉ sự nhượng bộ/mục đích.',
  },
  {
    code: 'ENG-12-UNIT8-10',
    subject: 'english',
    grade: 12,
    series: ['Global Success'],
    chapterNumber: 'Unit 8–10',
    chapterTitle: 'Inversion of Conditionals, Negative Adverbs & Phrasal Verbs',
    mappedTopicId: 'eng12-unit8-10-conditionals-inversion',
    coreCompetencyStandard: 'Đảo ngữ câu điều kiện Were/Had/Should, đảo ngữ trạng từ phủ định Seldom/Rarely/Not until và cụm động từ thường gặp.',
  },
];

/**
 * Audit live coverage of the curriculum against the official GDPT 2018 textbook catalog.
 */
export function auditTextbookCoverage(
  activeCurriculum: CurriculumTopic[] = grade12Curriculum
): TextbookAuditReport {
  const activeTopicIds = new Set(activeCurriculum.map((t) => t.id));

  const allEntries: OfficialTextbookEntry[] = OFFICIAL_GDPT2018_TEXTBOOK_CATALOG.map((cat) => {
    const isIntegrated = Boolean(cat.mappedTopicId && activeTopicIds.has(cat.mappedTopicId));
    return {
      ...cat,
      isIntegrated,
    };
  });

  const integratedChapters = allEntries.filter((e) => e.isIntegrated);
  const pendingChapters = allEntries.filter((e) => !e.isIntegrated);

  const subjects: ('math' | 'physics' | 'chemistry' | 'english')[] = [
    'math',
    'physics',
    'chemistry',
    'english',
  ];

  const subjectBreakdown = {} as TextbookAuditReport['subjectBreakdown'];

  for (const s of subjects) {
    const sEntries = allEntries.filter((e) => e.subject === s);
    const sIntegrated = sEntries.filter((e) => e.isIntegrated).length;
    const sTotal = sEntries.length;
    subjectBreakdown[s] = {
      total: sTotal,
      integrated: sIntegrated,
      percentage: sTotal > 0 ? Math.round((sIntegrated / sTotal) * 100) : 100,
    };
  }

  const coveragePercentage = Math.round(
    (integratedChapters.length / allEntries.length) * 100
  );

  return {
    timestamp: new Date().toISOString(),
    totalOfficialChapters: allEntries.length,
    integratedChaptersCount: integratedChapters.length,
    coveragePercentage,
    subjectBreakdown,
    integratedChapters,
    pendingChapters,
  };
}

/**
 * Quick diagnostic scanner to verify textbook data integrity and return formatted report
 */
export function scanAndVerifyTextbookSync(): {
  status: 'SYNCED' | 'NEEDS_INTEGRATION';
  report: TextbookAuditReport;
  summaryMessage: string;
} {
  const report = auditTextbookCoverage(grade12Curriculum);
  const isFullySynced = report.pendingChapters.length === 0;

  return {
    status: isFullySynced ? 'SYNCED' : 'NEEDS_INTEGRATION',
    report,
    summaryMessage: isFullySynced
      ? `Đồng bộ hoàn tất: ${report.integratedChaptersCount}/${report.totalOfficialChapters} (${report.coveragePercentage}%) chuyên đề SGK GDPT 2018 đã tích hợp vào Scalar.`
      : `Phát hiện ${report.pendingChapters.length} chuyên đề SGK chưa tích hợp. Độ phủ hiện tại: ${report.coveragePercentage}%.`,
  };
}
