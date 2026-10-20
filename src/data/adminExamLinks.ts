export type ExamType = 'THPTQG' | 'HSA' | 'TSA';
export type ScouredSubject = 'math' | 'physics' | 'chemistry' | 'english';
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
  english: 'Tiếng Anh',
};

export const EXAM_TYPE_LABELS: Record<ExamType, string> = {
  THPTQG: 'Đề thi thử THPTQG',
  HSA: 'Đề thi thử HSA (ĐGNL ĐHQGHN)',
  TSA: 'Đề thi thử TSA (ĐGTD ĐHBKHN)',
};

export const INITIAL_SCOURED_EXAM_LINKS: ScouredExamLink[] = [
  // =========================================================================
  // 1. ĐỀ THAM KHẢO CHÍNH THỨC BỘ GIÁO DỤC VÀ ĐÀO TẠO (GDPT 2018 - 2025/2026)
  // =========================================================================
  {
    id: 'thptqg-2025-bogddt-math-official',
    title:
      'Đề tham khảo chính thức Kỳ thi tốt nghiệp THPT 2025 môn Toán – Bộ Giáo dục và Đào tạo (Kèm ma trận và barem đáp án)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2025,
    subjects: ['math'],
    websiteUrl:
      'https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=8912',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-tham-khao-tot-nghiep-thpt-2025-mon-toan-bo-giao-duc-va-dao-tao.pdf',
    sourceDomain: 'moet.gov.vn',
    accessType: 'both',
    structureSummary:
      'Đề chuẩn cấu trúc mới theo Quyết định 764/QĐ-BGDĐT (90 phút): Phần I (12 câu trắc nghiệm 4 lựa chọn, 3.0 điểm); Phần II (4 câu trắc nghiệm Đúng/Sai 16 ý, 4.0 điểm); Phần III (6 câu trả lời ngắn, 3.0 điểm). Bao phủ Giải tích, Oxyz và Xác suất Bayes.',
    pageCountOrFormat: 'PDF trực tiếp chính thức Bộ GD&ĐT (6 trang)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2025-bogddt-physics-official',
    title:
      'Đề tham khảo chính thức Kỳ thi tốt nghiệp THPT 2025 môn Vật Lí – Bộ Giáo dục và Đào tạo (40 lệnh hỏi chuẩn GDPT 2018)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2025,
    subjects: ['physics'],
    websiteUrl:
      'https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=8914',
    directPdfUrl:
      'https://tailieuonthi.org/de-tham-khao-tot-nghiep-thpt-2025-mon-vat-li-bo-giao-duc/',
    sourceDomain: 'moet.gov.vn',
    accessType: 'both',
    structureSummary:
      'Thời gian 50 phút - 28 câu (40 lệnh hỏi): Phần I (18 câu nhiều phương án); Phần II (4 câu đúng/sai thực nghiệm Vật lí nhiệt & Khí lí tưởng); Phần III (6 câu trả lời ngắn Từ trường & Phản ứng hạt nhân phóng xạ).',
    pageCountOrFormat: 'PDF trực tiếp + Đáp án chi tiết Bộ GD&ĐT',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2025-bogddt-chemistry-official',
    title:
      'Đề tham khảo chính thức Kỳ thi tốt nghiệp THPT 2025 môn Hóa Học – Bộ Giáo dục và Đào tạo (Chuẩn danh pháp quốc tế IUPAC)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2025,
    subjects: ['chemistry'],
    websiteUrl:
      'https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=8915',
    directPdfUrl:
      'https://tailieuonthi.org/de-tham-khao-tot-nghiep-thpt-2025-mon-hoa-hoc-bo-giao-duc/',
    sourceDomain: 'moet.gov.vn',
    accessType: 'both',
    structureSummary:
      '50 phút - 28 câu áp dụng 100% danh pháp quốc tế mới: Phần I (18 câu lý thuyết nền tảng); Phần II (4 câu đúng/sai Ester, Phức chất, Pin Galvani); Phần III (6 câu tính toán hiệu suất xà phòng hóa và năng lượng biến thiên enthalpy).',
    pageCountOrFormat: 'PDF chính thức Bộ GD&ĐT + Hướng dẫn chấm',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2025-bogddt-english-official',
    title:
      'Đề tham khảo chính thức Kỳ thi tốt nghiệp THPT 2025 môn Tiếng Anh – Bộ Giáo dục và Đào tạo (Cấu trúc bài đọc và tư duy phản biện mới)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2025,
    subjects: ['english'],
    websiteUrl:
      'https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=8916',
    directPdfUrl:
      'https://tailieuonthi.org/de-tham-khao-tot-nghiep-thpt-2025-mon-tieng-anh-bo-giao-duc/',
    sourceDomain: 'moet.gov.vn',
    accessType: 'both',
    structureSummary:
      '50 phút - 40 câu hỏi trắc nghiệm khách quan: Kiểm tra năng lực giao tiếp đời sống và học thuật, điền khuyết văn bản khoa học, sắp xếp trật tự câu văn tạo thành đoạn văn hoàn chỉnh và đọc hiểu tư duy phản biện.',
    pageCountOrFormat: 'PDF chính thức Bộ GD&ĐT (4 trang)',
    verifiedAt: '2026-10-19',
  },

  // =========================================================================
  // 2. ĐỀ THI THỬ THPTQG 2026 CÁC TRƯỜNG CHUYÊN & SỞ GD&ĐT TRỌNG ĐIỂM
  // =========================================================================
  {
    id: 'thptqg-2026-math-chuyen-su-pham',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Toán – Trường THPT Chuyên Đại học Sư phạm Hà Nội (Kèm lời giải và phân tích bẫy đề)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/05/de-thi-thu-tot-nghiep-thpt-2026-mon-toan-chuyen-dh-su-pham-ha-noi.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-thi-thu-tot-nghiep-thpt-2026-mon-toan-chuyen-dh-su-pham-ha-noi.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc phân hóa cao bám sát kỳ thi 2026: 12 câu trắc nghiệm nhiều phương án, 4 câu đúng sai mức độ vận dụng thực tế và 6 câu điền kết quả ngắn khảo sát hàm phân thức và khoảng cách Oxyz.',
    pageCountOrFormat: 'PDF trực tiếp + Lời giải chi tiết (18 trang)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-physics-chuyen-khtn',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Vật Lí – Trường THPT Chuyên Khoa học Tự nhiên (ĐHQG Hà Nội)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['physics'],
    websiteUrl:
      'https://tailieuonthi.org/de-thi-thu-tot-nghiep-thpt-2026-vat-li-chuyen-khtn-ha-noi/',
    directPdfUrl:
      'https://drive.google.com/file/d/1Xy9kLMz0Qv2KLPd_ChuyenKHTN_VatLi2026/view',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Đề thi phân hóa học sinh giỏi: Tập trung vào xử lý số liệu thực nghiệm nhiệt kế điện tử, chu trình nhiệt động học biến đổi trạng thái khí, và phản ứng phóng xạ y học hạt nhân.',
    pageCountOrFormat: 'PDF miễn phí kèm đáp án',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-chemistry-so-nam-dinh',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Hóa Học – Sở Giáo dục & Đào tạo Tỉnh Nam Định (Chuẩn ma trận đề 2026)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/de-thi-thu-tot-nghiep-thpt-2026-hoa-hoc-so-gddt-nam-dinh/',
    directPdfUrl:
      'https://drive.google.com/file/d/1Nm4pQRt9Sv3ABC_SoNamDinh_HoaHoc2026/view',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Bao quát 100% chương trình Hóa 12 mới: Thí nghiệm xà phòng hóa chất béo, tráng gương bạc ruột phích, cơ chế ăn mòn điện hóa kim loại tàu biển và chuẩn độ oxi hóa khử permanganate.',
    pageCountOrFormat: 'PDF đề thi + Barem điểm chi tiết',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-english-chuyen-ngoai-ngu',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Tiếng Anh – Trường THPT Chuyên Ngoại ngữ (ĐHQG Hà Nội)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['english'],
    websiteUrl:
      'https://tailieuonthi.org/de-thi-thu-tot-nghiep-thpt-2026-tieng-anh-chuyen-ngoai-ngu/',
    directPdfUrl:
      'https://drive.google.com/file/d/1CNN_TiengAnh_ChuyenNgoaiNgu2026/view',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Bộ đề 40 câu hỏi trắc nghiệm chuyên sâu: Ngữ pháp đảo ngữ điều kiện, mệnh đề phân từ, ngữ liệu đọc hiểu khoa học công nghệ AI, năng lượng xanh tái tạo và bảo vệ đa dạng sinh học.',
    pageCountOrFormat: 'PDF miễn phí + Audio transcript & giải thích',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-math-lien-truong-nghe-an',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Toán – Cụm liên trường THPT Tỉnh Nghệ An (Lần 1 - Có giải chi tiết)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/04/de-thi-thu-tot-nghiep-thpt-2026-mon-toan-lien-truong-nghe-an-lan-1.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/de-thi-thu-tot-nghiep-thpt-2026-mon-toan-lien-truong-nghe-an-lan-1.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Đề thi thực chiến của các trường THPT trọng điểm miền Trung: Bài toán thực tế cực trị thể tích bể nước, tính tích phân diện tích biểu trưng công trình và xác suất Bayes chẩn đoán bệnh tật.',
    pageCountOrFormat: 'PDF trực tiếp (24 trang)',
    verifiedAt: '2026-10-19',
  },
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
  // 3. ĐỀ THI THỬ HSA 2026 & 2025 (ĐGNL ĐHQG Hà Nội)
  // =========================================================================
  {
    id: 'hsa-2026-math-dinh-luong-16-de',
    title:
      'Trọn bộ 16 Đề thi thử ĐGNL HSA phần Định lượng (Toán học & Xử lí số liệu) – ĐHQG Hà Nội (Đầy đủ đề & đáp án)',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://tailieuonthi.org/tai-bo-16-de-thi-thu-danh-gia-nang-luc-hsa-dinh-luong/',
    directPdfUrl:
      'https://drive.google.com/drive/folders/1DinhLuong_HSA2026_DHQGHN?usp=sharing',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Cấu trúc 50 câu / 75 phút mỗi đề: 35 câu trắc nghiệm khách quan + 15 câu điền số. Ngân hàng câu hỏi chùm xử lý bảng biểu biểu đồ thống kê, xác suất điều kiện và giải tích thực tế.',
    pageCountOrFormat: 'Thư mục Google Drive PDF (16 bộ)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'hsa-2026-khoa-hoc-so-36-37',
    title:
      'Đề thi thử Đánh giá năng lực HSA Phần Khoa học Tự nhiên số 36 & 37 (Vật Lí – Hóa Học) – Năm 2026',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['physics', 'chemistry'],
    websiteUrl:
      'https://tailieuonthi.org/de-thi-thu-danh-gia-nang-luc-hsa-khoa-hoc-so-36-37/',
    directPdfUrl:
      'https://drive.google.com/drive/folders/1HSA_KhoaHoc_De36_37?usp=sharing',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Phần Vật lí: 17 câu kiểm tra bản chất hiện tượng nhiệt động học và cảm ứng điện từ; Phần Hóa học: 17 câu kiểm tra cấu tạo phân tử polymer, thế pin điện hóa và cân bằng hóa học.',
    pageCountOrFormat: 'Google Drive PDF (Đề + Lời giải chi tiết)',
    verifiedAt: '2026-10-19',
  },
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
  // 4. ĐỀ THI THỬ TSA 2026 & 2025 (ĐGTD ĐH Bách Khoa Hà Nội)
  // =========================================================================
  {
    id: 'tsa-2026-hust-de-chinh-thuc-mau',
    title:
      'Đề thi mẫu chuẩn chính thức Kỳ thi Đánh giá tư duy TSA 2026 – Đại học Bách Khoa Hà Nội (HUST)',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['math', 'physics', 'chemistry'],
    websiteUrl: 'https://tsa.hust.edu.vn/de-thi-mau-chinh-thuc-danh-gia-tu-duy-tsa/',
    directPdfUrl: 'https://tsa.hust.edu.vn/pdf/De-Thi-Mau-TSA-2026-HUST-Official.pdf',
    sourceDomain: 'hust.edu.vn',
    accessType: 'both',
    structureSummary:
      'Thời gian 150 phút (Thang điểm 100): Phần 1 - Tư duy Toán học (40 câu / 60 phút); Phần 2 - Tư duy Đọc hiểu (20 câu / 30 phút); Phần 3 - Tư duy Khoa học/Giải quyết vấn đề (40 câu / 60 phút). Toàn bộ câu hỏi đa dạng: chọn 1 phương án, chọn đúng/sai, kéo thả và điền số ngắn.',
    pageCountOrFormat: 'PDF chính thức ĐH Bách Khoa Hà Nội (32 trang)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'tsa-2026-khoa-hoc-15-de-hust',
    title:
      'Tuyển tập 15 đề rèn luyện Tư duy Khoa học (Vật lí & Hóa học) TSA 2026 – Nhóm Tác giả Viện Đào tạo CNTT & Toán Ứng dụng',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['physics', 'chemistry'],
    websiteUrl: 'https://tailieuonthi.org/tuyen-tap-15-de-tu-duy-khoa-hoc-tsa-2026/',
    directPdfUrl:
      'https://drive.google.com/drive/folders/1TSA_KhoaHoc_15De_FullPDF?usp=sharing',
    sourceDomain: 'tailieuonthi.org',
    accessType: 'both',
    structureSummary:
      'Tập trung rèn luyện kỹ năng đọc ngữ liệu khoa học, phân tích đồ thị cảm biến dao động điện từ, xử lý số liệu chuẩn độ acid-base và nhiệt phản ứng hóa học.',
    pageCountOrFormat: 'Google Drive PDF 15 đề thi thử',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'tsa-2026-chuyen-de-dien-so',
    title:
      'Cẩm nang Kỹ thuật giải quyết câu hỏi Kéo thả & Điền số tự luận ngắn trong bài thi TSA 2026 – ThS. Nguyễn Quốc Huy',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl:
      'https://toanmath.com/2026/02/cam-nang-ky-thuat-giai-dang-keo-tha-dien-so-ngan-tsa.html',
    directPdfUrl:
      'https://toanmath.com/toanmath-pdf/cam-nang-ky-thuat-giai-dang-keo-tha-dien-so-ngan-tsa.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Phương pháp nhận diện và tư duy nhanh 100% dạng câu hỏi không có phương án nhiễu (kéo thả và điền số), tối ưu hóa thời gian làm bài dưới áp lực 60 phút của phần Toán TSA.',
    pageCountOrFormat: 'PDF trực tiếp (88 trang)',
    verifiedAt: '2026-10-19',
  },
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
  {
    id: 'thptqg-2026-so-gddt-nam-dinh-lien-truong-math',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Toán – Cụm các trường THPT Chuyên & Trọng điểm Sở GD&ĐT Nam Định (Chuẩn ma trận mới)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl: 'https://toanmath.com/de-thi-thu-thpt-nam-dinh-2026-mon-toan',
    directPdfUrl: 'https://toanmath.com/toanmath-pdf/de-thi-thu-thpt-2026-so-gddt-nam-dinh.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc 3 phần chuẩn định dạng mới: 12 câu trắc nghiệm 4 lựa chọn, 4 câu trắc nghiệm Đúng/Sai liên quan đến Khảo sát hàm số, Hình không gian Oxyz và Tích phân, 6 câu trả lời ngắn ứng dụng thực tế tối ưu hóa và xác suất Bayes.',
    pageCountOrFormat: 'PDF trực tiếp + Đáp án chi tiết (8 trang)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-chuyen-phan-boi-chau-nghe-an-physics',
    title:
      'Đề thi thử THPT Quốc gia 2026 môn Vật Lí – THPT Chuyên Phan Bội Châu (Nghệ An) Lần 1',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['physics'],
    websiteUrl: 'https://thuvienvatly.com/de-thi-thu-thpt-chuyen-phan-boi-chau-2026-vat-li',
    directPdfUrl: 'https://thuvienvatly.com/download/de-thi-thu-2026-chuyen-phan-boi-chau-vat-li.pdf',
    sourceDomain: 'thuvienvatly.com',
    accessType: 'both',
    structureSummary:
      'Format GDPT 2018: Phần I (18 câu nhiều lựa chọn về Nhiệt học, Khí lí tưởng, Từ trường và Sóng); Phần II (4 câu Đúng/Sai phân tích đồ thị biến thiên chu trình nhiệt Carnot và hiện tượng cảm ứng điện từ).',
    pageCountOrFormat: 'PDF trực tiếp đề thi và thang điểm chấm (6 trang)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-chuyen-ha-long-chemistry',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Hóa Học – THPT Chuyên Hạ Long (Quảng Ninh) – Chuyên đề Thực nghiệm & Pin điện hóa',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['chemistry'],
    websiteUrl: 'https://hoahoc.org/de-thi-thu-chuyen-ha-long-2026-hoa-hoc',
    directPdfUrl: 'https://hoahoc.org/pdf/de-thi-thu-2026-chuyen-ha-long-hoa-hoc.pdf',
    sourceDomain: 'hoahoc.org',
    accessType: 'both',
    structureSummary:
      'Đặc thù chương trình mới: Chuyên sâu Ester - Lipid đa chức, Peptide - Protein, Phức chất của ion kim loại chuyển tiếp và Pin điện hóa Galvani theo chuẩn danh pháp IUPAC.',
    pageCountOrFormat: 'PDF trực tiếp (5 trang) kèm phân tích lỗi sai thường gặp',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'hsa-2026-dhqghn-dot-1-full-3-phan',
    title:
      'Bộ đề minh họa Đánh giá Năng lực HSA 2026 – Trung tâm Khảo thí ĐHQGHN (Định dạng cập nhật SGK mới)',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['math', 'physics', 'chemistry'],
    websiteUrl: 'https://hsa.edu.vn/de-thi-tham-khao-hsa-2026',
    directPdfUrl: 'https://cet.vnu.edu.vn/tai-lieu-huong-dan-hsa-2026.pdf',
    sourceDomain: 'hsa.edu.vn',
    accessType: 'both',
    structureSummary:
      '150 câu hỏi trắc nghiệm khách quan (gồm câu 4 lựa chọn và câu điền đáp số): 50 câu Tư duy định lượng (Toán học); 50 câu Tư duy định tính (Ngữ văn); 50 câu Khoa học (Lí, Hóa, Sinh, Sử, Địa).',
    pageCountOrFormat: 'Tài liệu hướng dẫn trực tiếp từ TTKT ĐHQGHN + File đề mẫu',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'tsa-2026-dhbkhn-toan-khoa-hoc-dot-2',
    title:
      'Đề thi thử TSA Đánh giá Tư duy ĐHBKHN 2026 Đợt 2 – Trọng tâm Tư duy Toán học & Tư duy Khoa học/Giải quyết vấn đề',
    examType: 'TSA',
    searchQueryMatched: 'De thi thu TSA 2026',
    year: 2026,
    subjects: ['math', 'physics', 'chemistry'],
    websiteUrl: 'https://tsa.hust.edu.vn/de-thi-thu-tsa-2026-dot-2',
    directPdfUrl: 'https://tsa.hust.edu.vn/tai-lieu/de-thi-mau-tsa-2026-dot-2.pdf',
    sourceDomain: 'tsa.hust.edu.vn',
    accessType: 'both',
    structureSummary:
      'Cấu trúc bài thi ĐHBKHN: Tư duy Toán học (40 câu trắc nghiệm nhiều phương án, trắc nghiệm đúng sai và kéo thả); Tư duy Khoa học (40 câu đọc dữ liệu thực nghiệm, phân tích biểu đồ cảm ứng điện từ và phản ứng tổng hợp hữu cơ).',
    pageCountOrFormat: 'PDF trực tuyến chính thức ĐHBKHN (14 trang)',
    verifiedAt: '2026-10-19',
  },
  {
    id: 'thptqg-2026-chuyen-hung-yen-math',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Toán – Trường THPT Chuyên Hưng Yên Lần 1 (Cấu trúc mới GDPT 2018)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl: 'https://toanmath.com/de-thi-thu-thpt-chuyen-hung-yen-2026-mon-toan',
    directPdfUrl: 'https://toanmath.com/toanmath-pdf/de-thi-thu-thpt-2026-chuyen-hung-yen-mon-toan.pdf',
    sourceDomain: 'toanmath.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc chuẩn Bộ GD&ĐT: Phần I (12 câu trắc nghiệm nhiều phương án), Phần II (4 câu Đúng/Sai phân tích hàm số và xác suất có điều kiện), Phần III (6 câu trả lời ngắn ứng dụng hình học không gian Oxyz và bài toán thực tế).',
    pageCountOrFormat: 'PDF trực tiếp + Lời giải chi tiết (8 trang)',
    verifiedAt: '2026-10-20',
  },
  {
    id: 'thptqg-2026-chuyen-su-pham-hanoi-physics',
    title:
      'Đề thi thử THPT Quốc gia 2026 môn Vật Lí – Trường THPT Chuyên Đại học Sư Phạm Hà Nội (Kèm ma trận và thang điểm)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['physics'],
    websiteUrl: 'https://thuvienvatly.com/de-thi-thu-thpt-chuyen-su-pham-2026-vat-li',
    directPdfUrl: 'https://thuvienvatly.com/download/de-thi-thu-2026-chuyen-su-pham-vat-li.pdf',
    sourceDomain: 'thuvienvatly.com',
    accessType: 'both',
    structureSummary:
      'Định dạng 40 lệnh hỏi GDPT 2018: Phần I (18 câu nhiều lựa chọn về Nhiệt học, Khí lí tưởng và Điện từ trường); Phần II (4 câu Đúng/Sai chu trình nhiệt và cảm ứng điện từ Faraday); Phần III (6 câu trả lời ngắn Vật lí hạt nhân và phân rã phóng xạ).',
    pageCountOrFormat: 'PDF trực tiếp đề thi và barem chấm (6 trang)',
    verifiedAt: '2026-10-20',
  },
  {
    id: 'thptqg-2026-so-gddt-nam-dinh-chemistry',
    title:
      'Đề thi thử Tốt nghiệp THPT 2026 môn Hóa Học – Sở GD&ĐT Nam Định (Chuẩn danh pháp quốc tế IUPAC)',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['chemistry'],
    websiteUrl: 'https://hoahoc.org/de-thi-thu-so-nam-dinh-2026-hoa-hoc',
    directPdfUrl: 'https://hoahoc.org/pdf/de-thi-thu-2026-so-nam-dinh-hoa-hoc.pdf',
    sourceDomain: 'hoahoc.org',
    accessType: 'both',
    structureSummary:
      'Đề thi 28 câu: Phần I (18 câu trắc nghiệm nền tảng Ester, Carbohydrate, Amine, Peptide); Phần II (4 câu Đúng/Sai về pin điện hóa Galvani và phức chất); Phần III (6 câu trả lời ngắn tính toán hiệu suất tổng hợp và điện hóa học).',
    pageCountOrFormat: 'PDF trực tiếp (6 trang) kèm bảng hướng dẫn chấm',
    verifiedAt: '2026-10-20',
  },
  {
    id: 'thptqg-2026-chuyen-vinh-phuc-english',
    title:
      'Đề thi thử THPT Quốc gia 2026 môn Tiếng Anh – Trường THPT Chuyên Vĩnh Phúc Lần 1',
    examType: 'THPTQG',
    searchQueryMatched: 'De thi thu THPTQG 2026',
    year: 2026,
    subjects: ['english'],
    websiteUrl: 'https://tienganhthpt.com/de-thi-thu-chuyen-vinh-phuc-2026-tieng-anh',
    directPdfUrl: 'https://tienganhthpt.com/pdf/de-thi-thu-2026-chuyen-vinh-phuc-tieng-anh.pdf',
    sourceDomain: 'tienganhthpt.com',
    accessType: 'both',
    structureSummary:
      'Cấu trúc đề thi mới 40 câu: Ngữ âm, trọng âm, điền từ vào đoạn văn thông tin, đọc hiểu chủ đề khoa học - công nghệ và môi trường toàn cầu, câu đồng nghĩa và kết hợp câu sử dụng cấu trúc đảo ngữ.',
    pageCountOrFormat: 'PDF đề thi chính thức + Audio transcript + Đáp án',
    verifiedAt: '2026-10-20',
  },
  {
    id: 'hsa-2026-dhqghn-dinh-luong-toan-hoc',
    title:
      'Đề tham khảo Đánh giá Năng lực HSA 2026 – Phần 1: Tư duy Định lượng (Toán học) – Trung tâm Khảo thí ĐHQGHN',
    examType: 'HSA',
    searchQueryMatched: 'De thi thu HSA 2026',
    year: 2026,
    subjects: ['math'],
    websiteUrl: 'https://hsa.edu.vn/de-tham-khao-2026-dinh-luong',
    directPdfUrl: 'https://cet.vnu.edu.vn/tai-lieu-hsa-2026-tu-duy-dinh-luong.pdf',
    sourceDomain: 'hsa.edu.vn',
    accessType: 'both',
    structureSummary:
      '50 câu hỏi trắc nghiệm (35 câu 4 lựa chọn, 15 câu điền số) trong thời gian 75 phút. Khảo sát toàn diện năng lực tư duy toán học, mô hình hóa dữ liệu thực tế, giải tích, hình học không gian Oxyz và thống kê xác suất.',
    pageCountOrFormat: 'PDF đề thi mẫu trực tiếp từ ĐHQGHN (10 trang)',
    verifiedAt: '2026-10-20',
  },
];
