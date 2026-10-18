export type ExamType = 'THPTQG' | 'HSA' | 'TSA';
export type ScouredSubject = 'math' | 'physics' | 'chemistry';
export type AccessType = 'free_pdf' | 'visible_structure' | 'both';

export interface ScouredExamLink {
  id: string;
  title: string;
  examType: ExamType;
  searchQueryMatched:
    | 'De thi thu THPTQG 2026'
    | 'De thi thu HSA 2026'
    | 'De thi thu TSA 2026';
  year: 2025 | 2026;
  subjects: ScouredSubject[];
  websiteUrl: string;
  directPdfUrl?: string;
  secondaryPdfUrl?: string;
  sourceDomain: string;
  accessType: AccessType;
  structureSummary: string;
  pageCountOrFormat: string;
  verifiedAt: string;
  isCustom?: boolean;
}

export const SUBJECT_LABELS: Record<ScouredSubject, string> = {
  math: 'Toán Học',
  physics: 'Vật Lí',
  chemistry: 'Hóa Học',
};

export const EXAM_TYPE_LABELS: Record<ExamType, string> = {
  THPTQG: 'Đề thi thử THPTQG',
  HSA: 'Đề thi thử HSA (ĐGNL ĐHQGHN)',
  TSA: 'Đề thi thử TSA (ĐGTD ĐHBKHN)',
};

export const INITIAL_SCOURED_EXAM_LINKS: ScouredExamLink[] = [
  // =========================================================================
  // 1. ĐỀ THI THỬ THPTQG 2026 & 2025 (Toán học, Vật lí, Hóa học)
  // =========================================================================
  {
    id: 'thptqg-2026-math-phan-huy-chu',
    title:
      'Đề thi thử tốt nghiệp THPT 2026 môn Toán – Trường THPT Phan Huy Chú (Đống Đa – Hà Nội)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/06/de-thi-thu-tot-nghiep-thpt-2026-mon-toan-truong-thpt-phan-huy-chu-ha-noi.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-thi-thu-tot-nghiep-thpt-2026-mon-toan-truong-thpt-phan-huy-chu-ha-noi.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc chuẩn GDPT 2018 (90 phút): Phần I (12 câu Trắc nghiệm 4 lựa chọn) + Phần II (4 câu Trắc nghiệm Đúng/Sai) + Phần III (6 câu Trả lời ngắn). Kèm đáp án mã đề 0101, 0102, 0103, 0104.',
    pageCountOrFormat: 'PDF trực tiếp + Xem trước cấu trúc đề',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2026-math-chuyen-da-nang',
    title:
      'Đề thi thử TN THPT 2026 môn Toán lần 3 – Liên trường THPT Chuyên Đà Nẵng',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/06/de-thi-thu-tn-thpt-2026-mon-toan-lan-3-lien-truong-thpt-chuyen-da-nang.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-thi-thu-tn-thpt-2026-mon-toan-lan-3-lien-truong-thpt-chuyen-da-nang.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Đề thi chuẩn định dạng mới 2026 gồm 3 phần (12 câu trắc nghiệm nhiều phương án, 4 câu đúng/sai, 6 câu trả lời ngắn) bao phủ Giải tích 12, Hình Oxyz và Xác suất có điều kiện.',
    pageCountOrFormat: 'PDF trực tiếp + Lời giải chi tiết',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2026-math-duong-quang-ham',
    title:
      'Đề thi thử TN THPT 2026 môn Toán lần 2 – Trường THPT Dương Quảng Hàm (Hưng Yên)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/06/de-thi-thu-tn-thpt-2026-mon-toan-lan-2-truong-thpt-duong-quang-ham-hung-yen.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-thi-thu-tn-thpt-2026-mon-toan-lan-2-truong-thpt-duong-quang-ham-hung-yen.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc đề thi thử Tốt nghiệp THPT 2026 chuẩn Bộ GD&ĐT (12 câu P1 + 4 câu P2 + 6 câu P3), có ma trận bài toán thực tế tối ưu hóa và tích phân chuyển động.',
    pageCountOrFormat: 'PDF trực tiếp miễn phí',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2025-math-cao-thanh-phuc',
    title:
      'Bộ đề ôn thi THPT Quốc gia năm 2025 môn Toán – ThS. Cao Thanh Phúc (311 trang)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2025,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2025/01/bo-de-on-thi-thpt-quoc-gia-nam-2025-mon-toan-cao-thanh-phuc.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/bo-de-on-thi-thpt-quoc-gia-nam-2025-mon-toan-cao-thanh-phuc.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc hiển thị rõ theo Quyết định 764/QĐ-BGDĐT (90 phút): Phần I (30% - 12 câu 4 lựa chọn, 3,0đ) + Phần II (40% - 4 câu Đúng/Sai 16 ý, 4,0đ) + Phần III (30% - 6 câu Trả lời ngắn, 3,0đ).',
    pageCountOrFormat: 'PDF trực tiếp (311 trang)',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2026-physics-cac-truong-so',
    title:
      'Bộ đề ôn thi Tốt nghiệp THPT 2026 môn Vật Lí các trường THPT & Sở GD&ĐT toàn quốc',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['physics'],
    websiteUrl:
      'https://tailieuonthi.org/bo-de-on-thi-tot-nghiep-thpt-2026-mon-vat-ly-cac-truong-so/',
    directPdfUrl: 'https://tailieuonthi.org/ky-thi/thpt/?subject=vat-ly',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Cấu trúc đề thi Vật lí THPT 2026 (50 phút - 28 câu / 40 lệnh hỏi): Phần I (18 câu trắc nghiệm ABCD), Phần II (4 câu Đúng/Sai thực nghiệm Vật lí nhiệt & Khí lí tưởng), Phần III (6 câu trả lời ngắn Từ trường & Hạt nhân).',
    pageCountOrFormat: 'Kho PDF đề + Đáp án chi tiết',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2026-physics-60-de-moon',
    title:
      'PDF 60 Đề minh họa Tốt nghiệp THPT 2026 môn Vật Lí – Tủ sách Moon (Chuẩn GDPT 2018)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['physics'],
    websiteUrl:
      'https://tailieuonthi.org/60-de-minh-hoa-tot-nghiep-thpt-2026-mon-vat-li-moon/',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Ma trận 60 đề minh họa bám sát 4 chuyên đề Vật lí 12 (Vật lí nhiệt, Khí lí tưởng, Từ trường, Vật lí hạt nhân) và giao thoa kiến thức Lớp 11 (Dao động, Sóng, Điện trường).',
    pageCountOrFormat: 'PDF miễn phí + Bảng ma trận 60 đề',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2026-chemistry-cac-truong-so',
    title:
      'Bộ đề ôn thi Tốt nghiệp THPT 2026 môn Hóa Học các trường THPT & Sở GD&ĐT (Có giải chi tiết)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/bo-de-on-thi-tot-nghiep-thpt-2026-mon-hoa-hoc-cac-truong-so/',
    directPdfUrl: 'https://tailieuonthi.org/ky-thi/thpt/?subject=hoa-hoc',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Cấu trúc đề Hóa học THPT 2026 (50 phút - danh pháp IUPAC mới): Phần I (18 câu trắc nghiệm 4 phương án), Phần II (4 câu Đúng/Sai Ester-Lipid, Pin Galvani, Phức chất), Phần III (6 câu tính toán hiệu suất trả lời ngắn).',
    pageCountOrFormat: 'Kho PDF miễn phí + Cấu trúc đề chuẩn',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'thptqg-2026-chemistry-60-de-moon',
    title:
      'PDF 60 Đề minh họa Tốt nghiệp THPT 2026 môn Hóa Học – Moon (Đầy đủ Đáp án)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/60-de-minh-hoa-tot-nghiep-thpt-2026-hoa-hoc/',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Hiển thị rõ cấu trúc 3 phần thi và phân bổ 8 chương Hóa học 12 (Ester-Lipid, Carbohydrate, Hợp chất chứa Nitrogen, Polymer, Pin điện - Điện phân, Đại cương Kim loại, Nguyên tố nhóm IA-IIA, Phức chất).',
    pageCountOrFormat: 'PDF tải miễn phí + Ma trận chuyên đề',
    verifiedAt: '2026-10-18',
  },

  // =========================================================================
  // 2. ĐỀ THI THỬ HSA 2026 & 2025 (ĐGNL ĐHQG Hà Nội - Toán, Lý, Hóa)
  // =========================================================================
  {
    id: 'hsa-2026-all-bo-10-de-thi-thu',
    title:
      'Bộ 10 đề thi thử Đánh giá năng lực HSA 2026 (Toán học & Xử lí số liệu, Khoa học Vật Lí – Hóa Học)',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['math', 'physics', 'chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/tai-bo-10-de-thi-thu-danh-gia-nang-luc-hsa-2026/',
    directPdfUrl:
      'https://drive.google.com/drive/folders/1XXSVLwCDwGaDbDTbnpiYu_Lx7r6q7zlF?usp=sharing',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Cấu trúc đề HSA 2026 chuẩn ĐHQGHN: Phần 1 - Toán học & Xử lí số liệu (50 câu / 75 phút); Phần 3 - Khoa học Tự nhiên chọn 3 trong 5 chủ đề Vật lí, Hóa học (mỗi chủ đề 17 câu / 60 phút). Có bảng danh mục file PDF Bản Học Sinh (Đề) & Bản Giáo Viên (Giải chi tiết).',
    pageCountOrFormat: 'Thư mục Google Drive PDF trực tiếp (Đề + Giải)',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'hsa-2025-math-de-tham-khao-dhqghn',
    title:
      'Đề tham khảo Đánh giá năng lực HSA môn Toán năm 2025 – Trung tâm Khảo thí ĐHQG Hà Nội',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2025,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2024/08/de-tham-khao-danh-gia-nang-luc-mon-toan-nam-2025-dai-hoc-quoc-gia-ha-noi.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-tham-khao-danh-gia-nang-luc-mon-toan-nam-2025-dai-hoc-quoc-gia-ha-noi.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Đề mẫu chính thức Phần 1 (Toán học & Xử lý số liệu) áp dụng từ 2025–2026: 50 câu hỏi trong 75 phút (35 câu trắc nghiệm 4 lựa chọn + 15 câu điền đáp án số, câu hỏi chùm ngữ liệu thống kê).',
    pageCountOrFormat: 'PDF trực tiếp chính thức ĐHQGHN',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'hsa-2026-phy-chem-khoa-hoc-so-35',
    title:
      'Đề thi thử Đánh giá năng lực HSA Phần Khoa học số 35 (Vật Lí & Hóa Học) – Năm 2026',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['physics', 'chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/de-thi-thu-danh-gia-nang-luc-hsa-khoa-hoc-so-35/',
    directPdfUrl:
      'https://drive.google.com/drive/folders/1tIfmwfsLAElLaQNosB8OrSC-DuTEPIiB?usp=drive_link',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Hiển thị rõ cấu trúc câu hỏi: Phần Vật lí (Câu 101–117: Dao động cơ, Sóng dừng, Mạch điện xoay chiều, Lượng tử & Hạt nhân); Phần Hóa học (Câu 201–217: Cân bằng pH, Thủy phân Ester, Carbohydrate, Điện phân & Phức chất).',
    pageCountOrFormat: 'Google Drive PDF (Đề + Đáp án chi tiết)',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'hsa-2025-2026-khoa-hoc-archive',
    title:
      'Kho 37 Đề thi thử ĐGNL HSA Phần Khoa học (Đề số 24 – Đề số 35) – Chuyên đề Vật Lí & Hóa Học',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['physics', 'chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/category/tai-lieu-thi-dgnl-hn/khoa-hoc-hsa/',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Hệ thống lưu trữ đầy đủ các đề thi thử HSA phần Khoa học năm 2025–2026 với cấu trúc 17 câu Vật lí + 17 câu Hóa học mỗi đề, đính kèm PDF đề gốc và lời giải chi tiết từng câu.',
    pageCountOrFormat: 'Danh mục 37 bộ PDF miễn phí',
    verifiedAt: '2026-10-18',
  },

  // =========================================================================
  // 3. ĐỀ THI THỬ TSA 2026 & 2025 (ĐGTD ĐH Bách Khoa Hà Nội - Toán, Lý, Hóa)
  // =========================================================================
  {
    id: 'tsa-2026-math-pimax-10-de',
    title:
      'Tuyển tập 10 đề thi thử kỳ thi Đánh giá tư duy ĐH Bách Khoa Hà Nội (TSA 2026) – PimaX (72 trang)',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/03/tuyen-tap-10-de-thi-thu-ky-thi-danh-gia-tu-duy-dai-hoc-bach-khoa-ha-noi-tsa.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/tuyen-tap-10-de-thi-thu-ky-thi-danh-gia-tu-duy-dai-hoc-bach-khoa-ha-noi-tsa.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Biên soạn bởi Dương Minh Đức (PimaX): 10 đề chuẩn cấu trúc Tư duy Toán học TSA (40 câu / 60 phút) gồm chọn đáp án đúng, đúng/sai nhiều mệnh đề, kéo thả và điền số tự luận ngắn.',
    pageCountOrFormat: 'PDF trực tiếp (72 trang)',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'tsa-2026-all-bo-10-de-thi-thu',
    title:
      'Bộ 10 đề thi thử TSA 2026 – Đánh giá tư duy ĐH Bách Khoa Hà Nội (Toán học & Tư duy Khoa học Lý – Hóa)',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['math', 'physics', 'chemistry'],
    websiteUrl: 'https://tailieuonthi.org/bo-10-de-thi-thu-tsa-2026/',
    directPdfUrl:
      'https://drive.google.com/drive/folders/1FcSwIEGOqRY7GJ9U1qCfJ2tdxjVxHbD9?usp=sharing',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Đầy đủ 3 phần thi TSA (150 phút - Thang điểm 100): Phần 1 Tư duy Toán học (60 phút - 40 câu); Phần 2 Đọc hiểu (30 phút - 20 câu); Phần 3 Tư duy Khoa học Vật lí - Hóa học - Sinh học (60 phút - 40 câu đọc ngữ liệu thí nghiệm).',
    pageCountOrFormat: 'Thư mục Google Drive PDF miễn phí',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'tsa-2025-phy-chem-khoa-hoc-so-25',
    title:
      'Đề thi thử TSA Phần Tư duy Khoa học số 25 (Vật Lí & Hóa Học) – Kèm PDF Giải chi tiết',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2025,
    subjects: ['physics', 'chemistry'],
    websiteUrl: 'https://tailieuonthi.org/de-thi-thu-tsa-khoa-hoc-so-25/',
    directPdfUrl:
      'https://drive.google.com/file/d/1ZM-oJGz4ZLbVrdGivlSmCTNeEeNfcXgC/view?usp=drive_link',
    secondaryPdfUrl:
      'https://drive.google.com/file/d/1Sj3DZHKIS6r9BUh0M9Uw7_eN11GfWKGS/view?usp=drive_link',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Cấu trúc bài đọc Tư duy Khoa học TSA: Ngữ liệu Vật lí (Câu 1–12: Khảo sát mạch điện định luật Ohm, cảm ứng từ & động lực học chất điểm); Ngữ liệu Hóa học (Câu 13–26: Đường cong chuẩn độ pH Phenolphthalein & chưng cất phân đoạn hợp chất hữu cơ).',
    pageCountOrFormat: '2 link Google Drive PDF trực tiếp (Đề + Giải)',
    verifiedAt: '2026-10-18',
  },
  {
    id: 'tsa-2026-math-so-33-archive',
    title:
      'Đề thi thử TSA Phần Tư duy Toán học số 33 & Kho 64 đề Tư duy Toán học TSA (2025–2026)',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl: 'https://tailieuonthi.org/de-thi-thu-tsa-phan-toan-hoc-so-33/',
    directPdfUrl:
      'https://tailieuonthi.org/category/tai-lieu-dgtd-hust/toan-hoc-tsa/',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Hiển thị trực tiếp cấu trúc đề Toán TSA: Khảo sát hàm số, Bất phương trình Logarit, Cấp số nhân, Thể tích khối chóp/lăng trụ, Tổ hợp – Xác suất và Số học đồng dư.',
    pageCountOrFormat: 'PDF đề + Kho 64 tài liệu Toán TSA',
    verifiedAt: '2026-10-18',
  },
];
