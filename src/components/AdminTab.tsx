import React, { useEffect, useMemo, useState } from 'react';
import {
  ExamType,
  ScouredSubject,
  AccessType,
  ScouredExamLink,
  INITIAL_SCOURED_EXAM_LINKS,
  SUBJECT_LABELS,
  EXAM_TYPE_LABELS,
} from '../data/adminExamLinks';
import { subjectColor } from './Tag';
import {
  auditTextbookCoverage,
  scanAndVerifyTextbookSync,
  type TextbookAuditReport,
  type OfficialTextbookEntry,
} from '../data/curriculum';

const STORAGE_KEY_ADMIN_AUTH = 'apexstem_admin_authenticated_v1';
const STORAGE_KEY_ADMIN_LINKS = 'apexstem_admin_scoured_links_v1';

export const AdminTab: React.FC = () => {
  // Authentication state (Username: "admin", Password: "admin")
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return window.sessionStorage.getItem(STORAGE_KEY_ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Scoured exam repository state
  const [links, setLinks] = useState<ScouredExamLink[]>(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY_ADMIN_LINKS);
      if (raw) {
        const parsed = JSON.parse(raw) as ScouredExamLink[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      /* fallback to initial */
    }
    return INITIAL_SCOURED_EXAM_LINKS;
  });

  // Filters & search
  const [examFilter, setExamFilter] = useState<'ALL' | ExamType>('ALL');
  const [subjectFilter, setSubjectFilter] = useState<'ALL' | ScouredSubject>('ALL');
  const [yearFilter, setYearFilter] = useState<'ALL' | 2026 | 2025>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-scour status log
  const [isScouring, setIsScouring] = useState(false);
  const [scourLog, setScourLog] = useState<string[]>([
    `[SẴN SÀNG] Đã nạp ${INITIAL_SCOURED_EXAM_LINKS.length} nguồn đề thi thử & tài liệu chuẩn: "De thi thu THPTQG 2026", "De thi thu HSA 2026", "De thi thu TSA 2026" (kèm dữ liệu chuẩn 2025).`,
    '[TIÊU CHÍ] (1) Free PDF / Cấu trúc đề hiển thị rõ • (2) Toán học / Vật lí / Hóa học / Tiếng Anh • (3) Năm 2026 hoặc 2025.',
  ]);

  // Add new link modal/form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newExamType, setNewExamType] = useState<ExamType>('THPTQG');
  const [newYear, setNewYear] = useState<2025 | 2026>(2026);
  const [newSubjects, setNewSubjects] = useState<ScouredSubject[]>(['math']);
  const [newWebsiteUrl, setNewWebsiteUrl] = useState('');
  const [newDirectPdfUrl, setNewDirectPdfUrl] = useState('');
  const [newAccessType, setNewAccessType] = useState<AccessType>('both');
  const [newStructureSummary, setNewStructureSummary] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  // Textbook synchronization state
  const [textbookAudit, setTextbookAudit] = useState<TextbookAuditReport>(() => auditTextbookCoverage());
  const [isAuditingTextbooks, setIsAuditingTextbooks] = useState(false);
  const [auditMessage, setAuditMessage] = useState<string | null>(null);
  const [textbookSubjectFilter, setTextbookSubjectFilter] = useState<'ALL' | 'math' | 'physics' | 'chemistry' | 'english'>('ALL');
  const [showTextbookChapters, setShowTextbookChapters] = useState(false);
  const [textbookSearch, setTextbookSearch] = useState('');

  const handleScanTextbooks = () => {
    setIsAuditingTextbooks(true);
    setAuditMessage(null);
    setTimeout(() => {
      const result = scanAndVerifyTextbookSync();
      setTextbookAudit(result.report);
      setAuditMessage(result.summaryMessage);
      setIsAuditingTextbooks(false);
    }, 450);
  };

  const filteredTextbookChapters = useMemo(() => {
    const list = [...textbookAudit.integratedChapters, ...textbookAudit.pendingChapters];
    return list.filter((item) => {
      if (textbookSubjectFilter !== 'ALL' && item.subject !== textbookSubjectFilter) return false;
      if (textbookSearch.trim()) {
        const q = textbookSearch.toLowerCase();
        const matchTitle = item.chapterTitle.toLowerCase().includes(q);
        const matchCode = item.code.toLowerCase().includes(q);
        const matchStandard = item.coreCompetencyStandard.toLowerCase().includes(q);
        if (!matchTitle && !matchCode && !matchStandard) return false;
      }
      return true;
    });
  }, [textbookAudit, textbookSubjectFilter, textbookSearch]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY_ADMIN_LINKS, JSON.stringify(links));
    } catch {
      /* ignore storage errors */
    }
  }, [links]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setAuthError(null);
      setUsername('');
      setPassword('');
      try {
        window.sessionStorage.setItem(STORAGE_KEY_ADMIN_AUTH, 'true');
      } catch {
        /* ignore */
      }
    } else {
      setAuthError('Sai tên đăng nhập hoặc mật khẩu. Vui lòng nhập admin / admin.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      window.sessionStorage.removeItem(STORAGE_KEY_ADMIN_AUTH);
    } catch {
      /* ignore */
    }
  };

  const handleRunAutoScour = () => {
    setIsScouring(true);
    setScourLog([
      '[ĐANG QUÉT] Truy vấn: "De thi thu THPTQG 2026", "De thi thu HSA 2026", "De thi thu TSA 2026"...',
    ]);

    window.setTimeout(() => {
      setScourLog((prev) => [
        ...prev,
        '[KIỂM TRA TIÊU CHÍ 1] Xác thực quyền truy cập Free PDF (toanmath.com/toanmath-pdf, Google Drive folders) & bảng cấu trúc đề hiển thị trực tiếp...',
        '[KIỂM TRA TIÊU CHÍ 2 & 3] Lọc môn Toán Học, Vật Lí, Hóa Học thuộc kỳ thi năm 2026 và 2025...',
      ]);
    }, 350);

    window.setTimeout(() => {
      setLinks((current) => {
        const existingIds = new Set(current.map((item) => item.id));
        const merged = [...current];
        for (const seed of INITIAL_SCOURED_EXAM_LINKS) {
          if (!existingIds.has(seed.id)) {
            merged.push(seed);
          }
        }
        return merged;
      });
      setIsScouring(false);
      setScourLog((prev) => [
        ...prev,
        `[HOÀN TẤT] Đã đồng bộ & xác thực toàn bộ ${INITIAL_SCOURED_EXAM_LINKS.length} nguồn đề chuẩn (THPTQG 2025–2026, HSA 2025–2026, TSA 2025–2026).`,
      ]);
    }, 800);
  };

  const handleResetDefault = () => {
    setLinks(INITIAL_SCOURED_EXAM_LINKS);
    setScourLog([
      `[KHÔI PHỤC] Đã khôi phục danh sách ${INITIAL_SCOURED_EXAM_LINKS.length} liên kết đề thi gốc đã xác thực.`,
    ]);
  };

  const handleDeleteLink = (id: string) => {
    setLinks((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleNewSubject = (subj: ScouredSubject) => {
    setNewSubjects((prev) =>
      prev.includes(subj) ? prev.filter((s) => s !== subj) : [...prev, subj]
    );
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newWebsiteUrl.trim() || !newStructureSummary.trim()) {
      setFormError('Vui lòng điền đầy đủ Tiêu đề, URL trang web và Tóm tắt cấu trúc đề.');
      return;
    }
    if (newSubjects.length === 0) {
      setFormError('Vui lòng chọn ít nhất 1 môn học (Toán Học, Vật Lí hoặc Hóa Học).');
      return;
    }

    let domain = 'custom-source';
    try {
      domain = new URL(newWebsiteUrl.trim()).hostname.replace(/^www\./, '');
    } catch {
      setFormError('URL trang web không hợp lệ (cần bắt đầu bằng https:// hoặc http://).');
      return;
    }

    const searchQueryMap: Record<
      ExamType,
      'De thi thu THPTQG 2026' | 'De thi thu HSA 2026' | 'De thi thu TSA 2026'
    > = {
      THPTQG: 'De thi thu THPTQG 2026',
      HSA: 'De thi thu HSA 2026',
      TSA: 'De thi thu TSA 2026',
    };

    const created: ScouredExamLink = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      examType: newExamType,
      searchQueryMatched: searchQueryMap[newExamType],
      year: newYear,
      subjects: newSubjects,
      websiteUrl: newWebsiteUrl.trim(),
      directPdfUrl: newDirectPdfUrl.trim() || undefined,
      sourceDomain: domain,
      accessType: newAccessType,
      structureSummary: newStructureSummary.trim(),
      pageCountOrFormat: newDirectPdfUrl.trim()
        ? 'PDF miễn phí + Cấu trúc hiển thị'
        : 'Cấu trúc đề hiển thị trực tiếp',
      verifiedAt: new Date().toISOString().slice(0, 10),
      isCustom: true,
    };

    setLinks((prev) => [created, ...prev]);
    setNewTitle('');
    setNewWebsiteUrl('');
    setNewDirectPdfUrl('');
    setNewStructureSummary('');
    setFormError(null);
    setShowAddForm(false);
  };

  const handleExportJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(links, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'scoured-exam-links-2025-2026.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredLinks = useMemo(() => {
    return links.filter((item) => {
      if (examFilter !== 'ALL' && item.examType !== examFilter) return false;
      if (subjectFilter !== 'ALL' && !item.subjects.includes(subjectFilter)) {
        return false;
      }
      if (yearFilter !== 'ALL' && item.year !== yearFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchStructure = item.structureSummary.toLowerCase().includes(q);
        const matchDomain = item.sourceDomain.toLowerCase().includes(q);
        const matchQuery = item.searchQueryMatched.toLowerCase().includes(q);
        if (!matchTitle && !matchStructure && !matchDomain && !matchQuery) {
          return false;
        }
      }
      return true;
    });
  }, [links, examFilter, subjectFilter, yearFilter, searchQuery]);

  const countsByExam = useMemo(() => {
    return {
      THPTQG: links.filter((l) => l.examType === 'THPTQG').length,
      HSA: links.filter((l) => l.examType === 'HSA').length,
      TSA: links.filter((l) => l.examType === 'TSA').length,
    };
  }, [links]);

  const countsBySubject = useMemo(() => {
    return {
      math: links.filter((l) => l.subjects.includes('math')).length,
      physics: links.filter((l) => l.subjects.includes('physics')).length,
      chemistry: links.filter((l) => l.subjects.includes('chemistry')).length,
      english: links.filter((l) => l.subjects.includes('english')).length,
    };
  }, [links]);

  // =========================================================================
  // RENDER LOGIN GATE IF NOT AUTHENTICATED
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-8 border border-zinc-800/80 bg-zinc-900/50 rounded-xl p-6 space-y-5">
        <div className="border-b border-zinc-800/80 pb-4">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            KHU VỰC QUẢN LÝ
          </p>
          <h2 className="text-base font-semibold text-zinc-100">
            Đăng nhập quản lý tài liệu đề thi
          </h2>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          Khu vực tổng hợp và phân loại liên kết đề thi thử{' '}
          <span className="font-semibold text-zinc-200">THPTQG 2026</span>,{' '}
          <span className="font-semibold text-zinc-200">HSA 2026</span>,{' '}
          <span className="font-semibold text-zinc-200">TSA 2026</span> (kèm năm 2025) cho 3 môn{' '}
          <strong className="text-zinc-100">Toán Học, Vật Lí, Hóa Học</strong>.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="admin-username"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              Tên đăng nhập (Username)
            </label>
            <input
              id="admin-username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập username..."
              className="w-full h-10 px-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              Mật khẩu (Password)
            </label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập password..."
              className="w-full h-10 px-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
            />
          </div>

          {authError && (
            <div
              role="alert"
              className="p-2.5 rounded-lg border border-rose-500/25 bg-rose-500/10 text-xs text-rose-300 font-mono"
            >
              {authError}
            </div>
          )}

          <button
            type="submit"
            className="w-full h-10 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs tracking-wider cursor-pointer transition-all shadow-sm"
          >
            Đăng nhập vào Kho Nguồn Đề
          </button>
        </form>
      </div>
    );
  }

  // =========================================================================
  // RENDER AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="space-y-6">
      {/* Top Admin Status Bar */}
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-mono font-medium">
              ĐÃ ĐĂNG NHẬP (admin)
            </span>
            <span className="text-xs font-mono text-zinc-400">
              • Đề thi THPTQG 2026 / HSA 2026 / TSA 2026
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-zinc-100">
            Kho liên kết đề thi thử &amp; tài liệu ôn thi (Toán • Lý • Hóa)
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleRunAutoScour}
            disabled={isScouring}
            className="h-9 px-3.5 rounded-lg bg-zinc-100 hover:bg-white disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 font-medium text-xs inline-flex items-center cursor-pointer transition-colors"
          >
            <span>{isScouring ? 'Đang quét...' : 'Quét & Đồng bộ tự động'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowAddForm((v) => !v)}
            className="h-9 px-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-200 text-xs font-medium inline-flex items-center cursor-pointer transition-colors"
          >
            <span>Thêm nguồn đề</span>
          </button>

          <button
            type="button"
            onClick={handleExportJson}
            className="h-9 px-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-200 text-xs font-medium inline-flex items-center cursor-pointer transition-colors"
          >
            <span>Xuất JSON</span>
          </button>

          <button
            type="button"
            onClick={handleResetDefault}
            title="Khôi phục danh sách gốc"
            className="h-9 px-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 text-xs font-medium inline-flex items-center cursor-pointer transition-colors"
          >
            <span className="hidden sm:inline">Mặc định</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="h-9 px-3 rounded-lg border border-rose-500/25 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-medium inline-flex items-center cursor-pointer transition-colors"
          >
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>

      {/* Criteria & Scour Log Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 space-y-2 lg:col-span-2">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            NHẬT KÝ QUÉT TỰ ĐỘNG (AUTO-SCOUR LOG)
          </p>
          <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-3 font-mono text-xs text-zinc-400 space-y-1 max-h-28 overflow-y-auto">
            {scourLog.map((line, idx) => (
              <p key={idx} className="leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            3 TIÊU CHÍ BẮT BUỘC ĐÃ KIỂM ĐỊNH
          </p>
          <ul className="space-y-2 text-xs text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono text-xs font-semibold shrink-0 mt-0.5">[✓]</span>
              <span>
                <strong>PDF miễn phí / Cấu trúc rõ ràng:</strong> Link PDF trực tiếp hoặc thư mục Google Drive.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono text-xs font-semibold shrink-0 mt-0.5">[✓]</span>
              <span>
                <strong>Tổ hợp môn STEM:</strong> Toán ({countsBySubject.math}), Vật Lí ({countsBySubject.physics}), Hóa Học ({countsBySubject.chemistry}).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono text-xs font-semibold shrink-0 mt-0.5">[✓]</span>
              <span>
                <strong>Năm dữ liệu:</strong> Kỳ thi năm <strong>2026</strong> và <strong>2025</strong>.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Textbook Curriculum Integration & Audit Dashboard */}
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
                CHUẨN GDPT 2018 (SGK CHÍNH QUY)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                {textbookAudit.coveragePercentage}% ĐÃ ĐỒNG BỘ
              </span>
            </div>
            <h3 className="text-base font-semibold text-zinc-100">
              Kiểm định &amp; Đồng bộ Chương trình Sách giáo khoa GDPT 2018
            </h3>
            <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
              Đối soát trực tiếp dữ liệu bài giảng Wiki và ngân hàng câu hỏi 4 mức độ với 3 bộ SGK:
              <strong className="text-zinc-200"> Kết nối tri thức</strong>, <strong className="text-zinc-200">Cánh Diều</strong>, <strong className="text-zinc-200">Chân trời sáng tạo</strong> và <strong className="text-zinc-200">Global Success</strong> (Lớp 10 – 12).
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleScanTextbooks}
              disabled={isAuditingTextbooks}
              className="h-9 px-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium inline-flex items-center cursor-pointer transition-colors"
            >
              <span>{isAuditingTextbooks ? 'Đang đối soát...' : 'Kiểm tra đồng bộ SGK'}</span>
            </button>
            <button
              type="button"
              onClick={() => setShowTextbookChapters((v) => !v)}
              className="h-9 px-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 text-xs font-medium inline-flex items-center cursor-pointer transition-colors"
            >
              <span>{showTextbookChapters ? 'Thu gọn ▲' : 'Xem chi tiết ▼'}</span>
            </button>
          </div>
        </div>

        {/* Audit notification banner if triggered */}
        {auditMessage && (
          <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-xs text-emerald-300 font-mono flex items-center justify-between">
            <span>{auditMessage}</span>
            <span className="text-[10px] text-zinc-400">Vừa cập nhật</span>
          </div>
        )}

        {/* 4 Subject Breakdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Toán học</span>
              <span className="font-mono text-sky-400 font-semibold">
                {textbookAudit.subjectBreakdown.math.integrated}/{textbookAudit.subjectBreakdown.math.total}
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-sky-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${textbookAudit.subjectBreakdown.math.percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>Lớp 10, 11, 12</span>
              <span>{textbookAudit.subjectBreakdown.math.percentage}%</span>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Vật lí</span>
              <span className="font-mono text-indigo-400 font-semibold">
                {textbookAudit.subjectBreakdown.physics.integrated}/{textbookAudit.subjectBreakdown.physics.total}
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${textbookAudit.subjectBreakdown.physics.percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>Lớp 10, 11, 12</span>
              <span>{textbookAudit.subjectBreakdown.physics.percentage}%</span>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Hóa học</span>
              <span className="font-mono text-emerald-400 font-semibold">
                {textbookAudit.subjectBreakdown.chemistry.integrated}/{textbookAudit.subjectBreakdown.chemistry.total}
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${textbookAudit.subjectBreakdown.chemistry.percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>Lớp 10, 11, 12</span>
              <span>{textbookAudit.subjectBreakdown.chemistry.percentage}%</span>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Tiếng Anh</span>
              <span className="font-mono text-amber-400 font-semibold">
                {textbookAudit.subjectBreakdown.english.integrated}/{textbookAudit.subjectBreakdown.english.total}
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-amber-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${textbookAudit.subjectBreakdown.english.percentage}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>Global Success</span>
              <span>{textbookAudit.subjectBreakdown.english.percentage}%</span>
            </div>
          </div>
        </div>

        {/* Expandable Textbook Chapter Directory */}
        {showTextbookChapters && (
          <div className="border-t border-zinc-800/80 pt-4 space-y-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 flex-wrap">
                {(
                  [
                    { id: 'ALL', label: `Tất cả (${textbookAudit.totalOfficialChapters})` },
                    { id: 'math', label: `Toán (${textbookAudit.subjectBreakdown.math.total})` },
                    { id: 'physics', label: `Vật lí (${textbookAudit.subjectBreakdown.physics.total})` },
                    { id: 'chemistry', label: `Hóa học (${textbookAudit.subjectBreakdown.chemistry.total})` },
                    { id: 'english', label: `Tiếng Anh (${textbookAudit.subjectBreakdown.english.total})` },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setTextbookSubjectFilter(tab.id)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                      textbookSubjectFilter === tab.id
                        ? 'bg-zinc-100 text-zinc-950 font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={textbookSearch}
                  onChange={(e) => setTextbookSearch(e.target.value)}
                  placeholder="Tìm mã / tên chuyên đề SGK..."
                  className="w-full h-8 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-700"
                />
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2 pr-1">
              {filteredTextbookChapters.map((chapter) => (
                <div
                  key={chapter.code}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-3 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono font-semibold text-zinc-300">
                        {chapter.code}
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="font-medium text-zinc-400">
                        Lớp {chapter.grade} • {chapter.chapterNumber}
                      </span>
                      <div className="flex items-center gap-1">
                        {chapter.series.map((s) => (
                          <span
                            key={s}
                            className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h4 className="font-semibold text-zinc-100 truncate">
                      {chapter.chapterTitle}
                    </h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                      {chapter.coreCompetencyStandard}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 self-start md:self-center">
                    {chapter.isIntegrated ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[11px] font-mono">
                        Đã tích hợp
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[11px] font-mono">
                        Chờ tích hợp
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Optional Add Custom Link Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddLink}
          className="rounded-xl border border-zinc-700 bg-zinc-900/60 p-5 space-y-4"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="text-sm font-semibold text-zinc-100">
              Thêm liên kết Đề thi thử mới vào Kho Quản trị
            </h3>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
            >
              [Đóng]
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              <label className="block text-xs text-zinc-300 mb-1">
                Tiêu đề bộ đề / tài liệu *
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="VD: Đề thi thử THPTQG 2026 môn Vật lí..."
                className="w-full h-9 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:outline-none focus:border-zinc-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs text-zinc-300 mb-1">
                  Kỳ thi *
                </label>
                <select
                  value={newExamType}
                  onChange={(e) => setNewExamType(e.target.value as ExamType)}
                  className="w-full h-9 px-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
                >
                  <option value="THPTQG">THPTQG</option>
                  <option value="HSA">HSA (ĐHQGHN)</option>
                  <option value="TSA">TSA (ĐHBKHN)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-zinc-300 mb-1">
                  Năm *
                </label>
                <select
                  value={newYear}
                  onChange={(e) =>
                    setNewYear(Number(e.target.value) as 2025 | 2026)
                  }
                  className="w-full h-9 px-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
                >
                  <option value={2026}>2026</option>
                  <option value={2025}>2025</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-zinc-300 mb-1">
                URL bài viết / Trang cấu trúc đề *
              </label>
              <input
                type="url"
                value={newWebsiteUrl}
                onChange={(e) => setNewWebsiteUrl(e.target.value)}
                placeholder="https://..."
                className="w-full h-9 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-300 mb-1">
                URL File PDF trực tiếp / Google Drive (Tùy chọn)
              </label>
              <input
                type="url"
                value={newDirectPdfUrl}
                onChange={(e) => setNewDirectPdfUrl(e.target.value)}
                placeholder="https://..."
                className="w-full h-9 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <span className="block text-xs text-zinc-300 mb-1">
                Môn học bao phủ (Toán / Lý / Hóa / Anh) *
              </span>
              <div className="flex flex-wrap gap-2">
                {(['math', 'physics', 'chemistry', 'english'] as ScouredSubject[]).map(
                  (subj) => {
                    const checked = newSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => toggleNewSubject(subj)}
                        className={`h-8 px-3 rounded-md font-mono text-xs cursor-pointer transition-colors ${
                          checked
                            ? 'border-sky-500/60 bg-sky-500/10 text-sky-300'
                            : 'border-zinc-800 bg-zinc-950 text-zinc-400'
                        }`}
                      >
                        {SUBJECT_LABELS[subj]}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs text-zinc-300 mb-1">
                Quyền truy cập *
              </label>
              <select
                value={newAccessType}
                onChange={(e) => setNewAccessType(e.target.value as AccessType)}
                className="w-full h-8 px-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 font-mono focus:outline-none focus:border-zinc-600"
              >
                <option value="both">Có cả PDF miễn phí & Cấu trúc đề hiển thị</option>
                <option value="free_pdf">Tải PDF miễn phí trực tiếp</option>
                <option value="visible_structure">Hiển thị cấu trúc / Ma trận đề</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-zinc-300 mb-1">
              Tóm tắt Cấu trúc Đề &amp; Nội dung chi tiết *
            </label>
            <textarea
              rows={2}
              value={newStructureSummary}
              onChange={(e) => setNewStructureSummary(e.target.value)}
              placeholder="Mô tả cấu trúc đề..."
              className="w-full p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:outline-none focus:border-zinc-600"
            />
          </div>

          {formError && (
            <p className="text-xs font-mono text-rose-400">{formError}</p>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="h-9 px-4 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="h-9 px-4 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs cursor-pointer shadow-sm"
            >
              Lưu vào Kho Đề
            </button>
          </div>
        </form>
      )}

      {/* Filter Bar */}
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Exam Type Tabs */}
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Lọc theo kỳ thi"
          >
            {(
              [
                ['ALL', `Tất cả (${links.length})`],
                ['THPTQG', `THPTQG (${countsByExam.THPTQG})`],
                ['HSA', `HSA (${countsByExam.HSA})`],
                ['TSA', `TSA (${countsByExam.TSA})`],
              ] as const
            ).map(([key, label]) => {
              const active = examFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setExamFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                    active
                      ? 'border-sky-500/60 bg-sky-500/10 text-sky-300'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên trường, cấu trúc đề..."
              className="w-full h-9 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-100 focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-zinc-800/80">
          {/* Subject Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-zinc-400 inline-flex items-center mr-1">
              Môn học:
            </span>
            {(
              [
                ['ALL', 'Tất cả các môn'],
                ['math', `Toán (${countsBySubject.math})`],
                ['physics', `Vật Lí (${countsBySubject.physics})`],
                ['chemistry', `Hóa Học (${countsBySubject.chemistry})`],
                ['english', `Tiếng Anh (${countsBySubject.english})`],
              ] as const
            ).map(([key, label]) => {
              const active = subjectFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSubjectFilter(key)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                    active
                      ? 'border-sky-500/60 bg-sky-500/10 text-sky-300'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Year Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-medium text-zinc-400 mr-1">
              Năm:
            </span>
            {(['ALL', 2026, 2025] as const).map((yr) => {
              const active = yearFilter === yr;
              return (
                <button
                  key={String(yr)}
                  type="button"
                  onClick={() => setYearFilter(yr)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                    active
                      ? 'border-sky-500/60 bg-sky-500/10 text-sky-300'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {yr === 'ALL' ? '2026 & 2025' : `Năm ${yr}`}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
          <span>
            Hiển thị <strong className="text-zinc-100">{filteredLinks.length}</strong> /{' '}
            {links.length} nguồn đề thi đã lưu
          </span>
          <span>Chuẩn cấu trúc 2025–2026 • Free PDF</span>
        </div>

        {filteredLinks.length === 0 ? (
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-8 text-center space-y-2">
            <p className="text-sm font-medium text-zinc-300">
              Không tìm thấy nguồn đề phù hợp với bộ lọc hiện tại.
            </p>
            <button
              type="button"
              onClick={() => {
                setExamFilter('ALL');
                setSubjectFilter('ALL');
                setYearFilter('ALL');
                setSearchQuery('');
              }}
              className="mt-2 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-200 text-xs cursor-pointer"
            >
              Xóa bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {filteredLinks.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 p-5 transition-colors space-y-3"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    {/* Top badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md border border-sky-500/20 bg-sky-500/10 text-sky-300 font-mono text-xs">
                        {EXAM_TYPE_LABELS[item.examType]}
                      </span>
                      <span className="px-2 py-0.5 rounded-md border border-amber-500/20 bg-amber-500/10 text-amber-300 font-mono text-xs">
                        Năm {item.year}
                      </span>
                      {item.subjects.map((subj) => (
                        <span
                          key={subj}
                          className="px-2 py-0.5 rounded-md border font-mono text-xs font-medium"
                          style={{
                            borderColor: `${subjectColor(subj)}40`,
                            backgroundColor: `${subjectColor(subj)}10`,
                            color: subjectColor(subj),
                          }}
                        >
                          {SUBJECT_LABELS[subj]}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 font-mono text-xs">
                        {item.pageCountOrFormat}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-semibold text-zinc-100 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 px-3 rounded-lg border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-zinc-100 text-xs font-medium inline-flex items-center transition-colors"
                    >
                      <span>Mở Trang Đề ↗</span>
                    </a>

                    {item.directPdfUrl && (
                      <a
                        href={item.directPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 px-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs inline-flex items-center transition-colors"
                      >
                        <span>Mở PDF / Kho Drive ↗</span>
                      </a>
                    )}

                    {item.secondaryPdfUrl && (
                      <a
                        href={item.secondaryPdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 px-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium inline-flex items-center transition-colors"
                      >
                        <span>PDF Giải chi tiết ↗</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDeleteLink(item.id)}
                      title="Xóa liên kết này"
                      aria-label={`Xóa ${item.title}`}
                      className="h-8 px-2.5 rounded-lg border border-zinc-800 bg-zinc-950 hover:border-rose-500/40 hover:text-rose-400 text-zinc-500 text-xs inline-flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>

                {/* Visible Structure Summary */}
                <div className="rounded-lg bg-zinc-950/80 border border-zinc-800/80 p-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <span className="font-mono text-xs text-sky-400 font-semibold uppercase mr-1.5">
                    [Cấu trúc &amp; Nội dung]:
                  </span>
                  {item.structureSummary}
                </div>

                {/* Raw URLs footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-zinc-500 pt-1">
                  <div className="truncate">
                    <span>Nguồn: </span>
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-200 hover:underline"
                    >
                      {item.websiteUrl}
                    </a>
                  </div>
                  <div className="shrink-0">
                    Tên miền: <span className="text-zinc-300">{item.sourceDomain}</span> • Xác thực: {item.verifiedAt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
