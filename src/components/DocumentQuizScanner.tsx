import React, { useState, useEffect, useRef } from 'react';
import { MathText } from './MathRenderer';
import { Tag } from './Tag';
import { PracticeQuestion, SubjectId } from '../types/edu';
import {
  ScannedDocumentQuiz,
  ScannedQuestionItem,
  SAMPLE_PRESET_DOCUMENTS,
  getStoredScannedQuizzes,
  saveScannedQuiz,
  deleteStoredScannedQuiz,
  scanDocumentWithGeminiVision,
  scanDocumentLocally,
  convertScannedQuizToPracticeQuestions,
} from '../services/documentScannerService';

interface DocumentQuizScannerProps {
  onStartQuiz: (questions: PracticeQuestion[], startId: string) => void;
  onOpenByok?: () => void;
}

export const DocumentQuizScanner: React.FC<DocumentQuizScannerProps> = ({
  onStartQuiz,
  onOpenByok,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [imageFileSize, setImageFileSize] = useState<string>('');
  const [imageMimeType, setImageMimeType] = useState<string>('image/jpeg');
  const [isDragging, setIsDragging] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState<string>('');
  const [currentQuiz, setCurrentQuiz] = useState<ScannedDocumentQuiz | null>(null);
  const [savedQuizzes, setSavedQuizzes] = useState<ScannedDocumentQuiz[]>([]);
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<ScannedQuestionItem | null>(null);
  const [viewTab, setViewTab] = useState<'scan' | 'library'>('scan');
  const [notification, setNotification] = useState<string | null>(null);
  const [hasByokKey, setHasByokKey] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check personal API Key
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = window.localStorage.getItem('apexstem_gemini_byok_key') ?? '';
      setHasByokKey(key.startsWith('AIza') && key !== 'AIzaSyDemoHighSchoolStemKey2026');
      setSavedQuizzes(getStoredScannedQuizzes());
    }
  }, []);

  // Listen for Clipboard Paste (Ctrl+V) anywhere on the component
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') &&
        !(e.clipboardData?.items?.[0]?.type.startsWith('image/'))
      ) {
        return;
      }

      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            handleFileSelect(file);
            setNotification('Đã dán ảnh từ bộ nhớ tạm (Clipboard)!');
            setTimeout(() => setNotification(null), 3000);
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const handleFileSelect = (file: File) => {
    const isImage =
      file.type.startsWith('image/') ||
      /\.(png|jpe?g|webp|bmp|gif|svg|heic|heif)$/i.test(file.name);

    if (!isImage) {
      alert('Vui lòng chọn tệp hình ảnh (PNG, JPG, JPEG, WEBP).');
      return;
    }

    const detectedMime =
      file.type || (file.name.endsWith('.png') ? 'image/png' : 'image/jpeg');
    setImageMimeType(detectedMime);
    setSelectedFileName(file.name);

    const sizeKb = Math.round(file.size / 1024);
    const sizeStr = sizeKb > 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;
    setImageFileSize(sizeStr);

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setSelectedImage(dataUrl);
        setNotification(`Đã tải ảnh: ${file.name} (${sizeStr})`);
        setTimeout(() => setNotification(null), 3000);
      }
    };
    reader.onerror = () => {
      alert('Không thể đọc tệp hình ảnh. Vui lòng thử lại với ảnh khác.');
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const loadPreset = (preset: ScannedDocumentQuiz) => {
    setSelectedImage(preset.imageDataUrl);
    setSelectedFileName(preset.sourceFileName || `${preset.documentTitle}.png`);
    setImageFileSize('Đề mẫu');
    setImageMimeType('image/svg+xml');
    setCurrentQuiz(preset);
    setNotification(`Đã tải tài liệu mẫu: "${preset.documentTitle}"`);
    setTimeout(() => setNotification(null), 3000);
  };

  const runScan = async () => {
    if (!selectedImage) return;

    setIsScanning(true);
    setScanStep('Đang tối ưu ảnh đề bài...');

    try {
      let result: ScannedDocumentQuiz;
      const apiKey =
        typeof window !== 'undefined'
          ? window.localStorage.getItem('apexstem_gemini_byok_key') ?? ''
          : '';

      const isLiveByok =
        apiKey.startsWith('AIza') && apiKey !== 'AIzaSyDemoHighSchoolStemKey2026';

      if (isLiveByok) {
        setScanStep('Đang đọc đề bài và nhận diện công thức...');
        result = await scanDocumentWithGeminiVision(
          selectedImage,
          imageMimeType,
          apiKey,
          selectedFileName || 'Đề thi trích xuất từ ảnh'
        );
      } else {
        setScanStep('Đang đọc nội dung đề bài và trích xuất phương án...');
        result = await scanDocumentLocally(
          selectedImage,
          selectedFileName || 'tai-lieu-anh.png'
        );
      }

      setScanStep('Đang hoàn tất các câu hỏi...');
      await new Promise((r) => setTimeout(r, 400));

      setCurrentQuiz(result);
      setNotification(`Đã tạo thành công bài tập gồm ${result.questions.length} câu hỏi!`);
      setTimeout(() => setNotification(null), 4000);
    } catch (err: any) {
      const errMsg = err?.message || 'Lỗi không xác định';
      console.warn('Scan error, switching to fallback:', errMsg);
      setNotification(`Đang dùng chế độ tạo đề cơ bản...`);
      const fallback = await scanDocumentLocally(
        selectedImage,
        selectedFileName || 'tai-lieu.png'
      );
      setCurrentQuiz(fallback);
      setTimeout(() => setNotification(null), 4000);
    } finally {
      setIsScanning(false);
      setScanStep('');
    }
  };

  const handleSaveToLibrary = () => {
    if (!currentQuiz) return;
    saveScannedQuiz(currentQuiz);
    setSavedQuizzes(getStoredScannedQuizzes());
    setNotification('Đã lưu bài tập vào thư viện cá nhân!');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteSavedQuiz = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa bài Quiz này khỏi thư viện?')) {
      deleteStoredScannedQuiz(id);
      setSavedQuizzes(getStoredScannedQuizzes());
      if (currentQuiz?.id === id) {
        setCurrentQuiz(null);
      }
    }
  };

  const handleStartPracticing = (quizToStart: ScannedDocumentQuiz) => {
    const practiceQuestions = convertScannedQuizToPracticeQuestions(quizToStart);
    if (practiceQuestions.length === 0) {
      alert('Không có câu hỏi nào trong đề thi.');
      return;
    }
    // Save to library automatically if not already saved
    saveScannedQuiz(quizToStart);
    onStartQuiz(practiceQuestions, practiceQuestions[0].id);
  };

  const startEditQuestion = (q: ScannedQuestionItem) => {
    setEditingQuestionId(q.id);
    setEditForm({ ...q, options: [...q.options] });
  };

  const saveEditQuestion = () => {
    if (!editForm || !currentQuiz) return;
    const updated = currentQuiz.questions.map((item) =>
      item.id === editForm.id ? editForm : item
    );
    setCurrentQuiz({ ...currentQuiz, questions: updated });
    setEditingQuestionId(null);
    setEditForm(null);
  };

  const exportQuiz = (format: 'json' | 'md') => {
    if (!currentQuiz) return;
    let content = '';
    let mimeType = 'text/plain';
    let ext = 'txt';

    if (format === 'json') {
      content = JSON.stringify(currentQuiz, null, 2);
      mimeType = 'application/json';
      ext = 'json';
    } else {
      content = `# ${currentQuiz.documentTitle}\n\nMôn: ${currentQuiz.subject.toUpperCase()} | Ngày quét: ${currentQuiz.scannedAt}\n\n`;
      currentQuiz.questions.forEach((q, i) => {
        content += `### Câu ${i + 1} (${q.cognitiveLevel})\n${q.questionText}\n\n`;
        q.options.forEach((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const marker = opt === q.correctAnswer ? ' (ĐÁP ÁN ĐÚNG)' : '';
          content += `- **${letter}.** ${opt}${marker}\n`;
        });
        content += `\n**Lời giải chi tiết:**\n${q.detailedDerivation}\n\n---\n\n`;
      });
      mimeType = 'text/markdown';
      ext = 'md';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-${currentQuiz.id}.${ext}`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg border border-sky-500/50 bg-zinc-900 text-zinc-100 text-xs font-mono shadow-xl flex items-center gap-3">
          <span className="text-sky-400 font-bold">[THÔNG BÁO]</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Top Banner & API Status */}
      <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              [TẠO ĐỀ TỪ ẢNH]
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-xs font-mono text-zinc-400">GDPT 2018</span>
          </div>
          <h2 className="text-lg font-semibold text-zinc-100">
            Tạo bài tập tương tác từ ảnh chụp đề thi
          </h2>
          <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
            Tải ảnh chụp đề thi hoặc bài tập trên giấy. Hệ thống sẽ tự động đọc câu hỏi, giữ nguyên công thức và tạo bài làm trắc nghiệm tương tác.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {hasByokKey ? (
            <div className="px-3 py-1.5 rounded-md border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-xs font-mono">
              Khóa riêng: Đã kết nối
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-md border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-mono">
              Chế độ mặc định
            </div>
          )}

          {onOpenByok && (
            <button
              type="button"
              onClick={onOpenByok}
              className="h-8 px-3 rounded-md border border-zinc-750 hover:border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-xs text-zinc-200 transition-colors cursor-pointer"
            >
              Khóa API
            </button>
          )}
        </div>
      </div>

      {/* Sub Tabs: Tạo Quiz mới vs Thư viện đề đã lưu */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewTab('scan')}
            className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              viewTab === 'scan'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Tạo đề từ ảnh
          </button>
          <button
            type="button"
            onClick={() => setViewTab('library')}
            className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              viewTab === 'library'
                ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Bộ đề đã lưu ({savedQuizzes.length})
          </button>
        </div>

        <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
          Mẹo: Nhấn Ctrl+V để dán trực tiếp ảnh chụp màn hình
        </span>
      </div>

      {viewTab === 'scan' ? (
        <div className="space-y-6">
          {/* Preset Chips */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-zinc-400">
              Hoặc thử nhanh với các đề mẫu có sẵn:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {SAMPLE_PRESET_DOCUMENTS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => loadPreset(preset)}
                  className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-left transition-colors cursor-pointer space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-sky-400 font-semibold">
                      [{preset.subject.toUpperCase()}]
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {preset.questions.length} câu
                    </span>
                  </div>
                  <p className="text-xs text-zinc-200 font-medium line-clamp-1">
                    {preset.documentTitle}
                  </p>
                  <p className="text-[11px] text-zinc-500 line-clamp-1">
                    {preset.summary}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Upload Drop Zone & Preview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Upload Dropzone & Actions (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/bmp,image/*"
                className="hidden"
                onClick={(e) => {
                  (e.target as HTMLInputElement).value = '';
                }}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileSelect(e.target.files[0]);
                  }
                }}
              />

              <div
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer flex flex-col items-center justify-center min-h-[220px] ${
                  isDragging
                    ? 'border-sky-400 bg-sky-950/25 ring-2 ring-sky-500/20'
                    : selectedImage
                    ? 'border-sky-500/60 bg-sky-950/10'
                    : 'border-zinc-750 hover:border-zinc-600 bg-zinc-900/40 hover:bg-zinc-900/70'
                }`}
              >
                <div className="space-y-2">
                  <p className="text-sm font-medium text-zinc-200">
                    {isDragging
                      ? 'Thả ảnh vào đây để tải lên ngay'
                      : selectedFileName
                      ? `Đã chọn: ${selectedFileName}`
                      : 'Kéo và thả ảnh đề thi vào đây'}
                  </p>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    {selectedFileName && imageFileSize
                      ? `Dung lượng: ${imageFileSize} • Đã sẵn sàng đọc đề`
                      : 'Hỗ trợ ảnh chụp điện thoại hoặc ảnh màn hình (PNG, JPG, WEBP). Bấm để chọn tệp.'}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1.5 rounded-md border border-zinc-700 bg-zinc-800 text-xs font-mono text-zinc-300">
                      {selectedImage ? 'Chọn ảnh khác' : 'Chọn ảnh từ thiết bị'}
                    </span>
                  </div>
                </div>
              </div>

              {selectedImage && (
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    disabled={isScanning}
                    onClick={runScan}
                    className="w-full h-11 px-4 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-zinc-950 text-sm font-semibold tracking-tight transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10"
                  >
                    {isScanning ? (
                      <span>Đang xử lý đề bài...</span>
                    ) : (
                      <span>Đọc ảnh và tạo bài làm →</span>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 h-9 rounded-md border border-zinc-750 hover:border-zinc-700 bg-zinc-900 text-xs text-zinc-300 transition-colors cursor-pointer"
                    >
                      Đổi ảnh khác
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(null);
                        setSelectedFileName('');
                        setCurrentQuiz(null);
                      }}
                      className="h-9 px-4 rounded-md border border-zinc-750 hover:border-rose-800 hover:text-rose-400 bg-zinc-900 text-xs text-zinc-400 transition-colors cursor-pointer"
                    >
                      Xóa ảnh
                    </button>
                  </div>
                </div>
              )}

              {/* Scanning Progress Banner */}
              {isScanning && (
                <div className="p-4 rounded-xl border border-sky-500/30 bg-zinc-900/90 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-400 font-semibold">TIẾN TRÌNH XỬ LÝ</span>
                    <span className="text-zinc-400 animate-pulse">ĐANG PHÂN TÍCH...</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 w-3/4 animate-pulse" />
                  </div>
                  <p className="text-xs text-zinc-300 font-mono">{scanStep}</p>
                </div>
              )}
            </div>

            {/* Right: Document Preview (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    XEM TRƯỚC ẢNH ĐỀ THI
                  </span>
                  {selectedFileName && (
                    <span className="text-xs font-mono text-zinc-400 truncate max-w-[240px]">
                      {selectedFileName} {imageFileSize ? `(${imageFileSize})` : ''}
                    </span>
                  )}
                </div>

                {selectedImage ? (
                  <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center max-h-[460px] overflow-y-auto p-2">
                    <img
                      src={selectedImage}
                      alt="Ảnh đề thi đã tải lên"
                      className="max-w-full h-auto object-contain rounded"
                    />
                  </div>
                ) : (
                  <div className="h-64 rounded-lg border border-dashed border-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-mono text-center px-4">
                    Chưa có ảnh nào được chọn. Hãy chọn ảnh đề thi hoặc bấm thử một đề mẫu ở trên.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Scanned Quiz Results & Action Center */}
          {currentQuiz && (
            <div className="space-y-6 pt-4 border-t border-zinc-800">
              {/* Quiz Header Bar */}
              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase font-bold text-emerald-400">
                      [ĐÃ TẠO BÀI THÀNH CÔNG]
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {currentQuiz.questions.length} CÂU HỎI TRẮC NGHIỆM
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {currentQuiz.documentTitle}
                  </h3>
                  <p className="text-xs text-zinc-400">{currentQuiz.summary}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleStartPracticing(currentQuiz)}
                    className="h-10 px-5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold tracking-tight transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    Làm bài ngay →
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveToLibrary}
                    className="h-10 px-4 rounded-lg border border-zinc-700 hover:border-zinc-600 bg-zinc-850 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors cursor-pointer"
                  >
                    Lưu đề
                  </button>

                  <button
                    type="button"
                    onClick={() => exportQuiz('json')}
                    className="h-10 px-3 rounded-lg border border-zinc-750 hover:border-zinc-700 bg-zinc-900 text-xs text-zinc-300 transition-colors cursor-pointer font-mono"
                  >
                    Xuất JSON
                  </button>

                  <button
                    type="button"
                    onClick={() => exportQuiz('md')}
                    className="h-10 px-3 rounded-lg border border-zinc-750 hover:border-zinc-700 bg-zinc-900 text-xs text-zinc-300 transition-colors cursor-pointer font-mono"
                  >
                    Xuất Markdown
                  </button>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-zinc-200">
                    Danh sách câu hỏi nhận diện được
                  </h4>
                  <span className="text-xs font-mono text-zinc-500">
                    Bạn có thể chỉnh sửa nội dung hoặc công thức trực tiếp
                  </span>
                </div>

                <div className="space-y-4">
                  {currentQuiz.questions.map((q, idx) => {
                    const isEditing = editingQuestionId === q.id;

                    return (
                      <div
                        key={q.id}
                        className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-4 transition-colors"
                      >
                        {isEditing && editForm ? (
                          /* Inline Edit Mode */
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                              <span className="text-xs font-mono font-semibold text-sky-400">
                                CHỈNH SỬA CÂU {idx + 1}
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={saveEditQuestion}
                                  className="h-7 px-3 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-medium cursor-pointer"
                                >
                                  Lưu thay đổi
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditingQuestionId(null);
                                    setEditForm(null);
                                  }}
                                  className="h-7 px-3 rounded border border-zinc-700 bg-zinc-800 text-xs text-zinc-300 cursor-pointer"
                                >
                                  Hủy
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-medium text-zinc-400">
                                Nội dung câu hỏi (hỗ trợ $...$ LaTeX):
                              </label>
                              <textarea
                                value={editForm.questionText}
                                onChange={(e) =>
                                  setEditForm({ ...editForm, questionText: e.target.value })
                                }
                                rows={3}
                                className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-750 text-xs text-zinc-200 focus:outline-none focus:border-sky-500 font-mono"
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {editForm.options.map((opt, oIdx) => {
                                const letter = String.fromCharCode(65 + oIdx);
                                const isCorrect = opt === editForm.correctAnswer;
                                return (
                                  <div key={oIdx} className="space-y-1">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-mono font-semibold text-zinc-400">
                                        Phương án {letter}:
                                      </span>
                                      <label className="text-[11px] flex items-center gap-1 cursor-pointer">
                                        <input
                                          type="radio"
                                          name={`correct-${q.id}`}
                                          checked={isCorrect}
                                          onChange={() =>
                                            setEditForm({ ...editForm, correctAnswer: opt })
                                          }
                                        />
                                        <span className={isCorrect ? 'text-emerald-400' : 'text-zinc-500'}>
                                          Đáp án đúng
                                        </span>
                                      </label>
                                    </div>
                                    <input
                                      type="text"
                                      value={opt}
                                      onChange={(e) => {
                                        const newOpts = [...editForm.options];
                                        newOpts[oIdx] = e.target.value;
                                        const newCorrect =
                                          editForm.correctAnswer === opt
                                            ? e.target.value
                                            : editForm.correctAnswer;
                                        setEditForm({
                                          ...editForm,
                                          options: newOpts,
                                          correctAnswer: newCorrect,
                                        });
                                      }}
                                      className="w-full h-8 px-2.5 rounded bg-zinc-950 border border-zinc-750 text-xs text-zinc-200 focus:outline-none focus:border-sky-500 font-mono"
                                    />
                                  </div>
                                );
                              })}
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs font-medium text-zinc-400">
                                Lời giải chi tiết:
                              </label>
                              <textarea
                                value={editForm.detailedDerivation}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    detailedDerivation: e.target.value,
                                  })
                                }
                                rows={2}
                                className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-750 text-xs text-zinc-200 focus:outline-none focus:border-sky-500 font-mono"
                              />
                            </div>
                          </div>
                        ) : (
                          /* Normal View Mode */
                          <>
                            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono font-bold text-zinc-100">
                                  CÂU {idx + 1}
                                </span>
                                <Tag tier={q.cognitiveLevel}>{q.cognitiveLevel}</Tag>
                                {q.topicName && (
                                  <span className="text-[11px] font-mono text-zinc-500">
                                    • {q.topicName}
                                  </span>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={() => startEditQuestion(q)}
                                className="text-xs text-zinc-400 hover:text-zinc-200 underline cursor-pointer"
                              >
                                Sửa câu hỏi
                              </button>
                            </div>

                            {/* Question Prompt */}
                            <div className="text-sm text-zinc-200 leading-relaxed font-sans">
                              <MathText text={q.questionText} />
                            </div>

                            {/* 4 Options */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {q.options.map((opt, oIdx) => {
                                const letter = String.fromCharCode(65 + oIdx);
                                const isCorrect = opt === q.correctAnswer;

                                return (
                                  <div
                                    key={oIdx}
                                    className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
                                      isCorrect
                                        ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                                        : 'border-zinc-800 bg-zinc-950 text-zinc-300'
                                    }`}
                                  >
                                    <span
                                      className={`w-5 h-5 rounded flex items-center justify-center font-mono font-bold shrink-0 text-[11px] ${
                                        isCorrect
                                          ? 'bg-emerald-500 text-zinc-950'
                                          : 'bg-zinc-800 text-zinc-300'
                                      }`}
                                    >
                                      {letter}
                                    </span>
                                    <div className="flex-1 min-w-0 pt-0.5">
                                      <MathText text={opt} />
                                    </div>
                                    {isCorrect && (
                                      <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase shrink-0">
                                        Đáp án đúng
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {/* Detailed Solution Accordion */}
                            <details className="text-xs text-zinc-400 group">
                              <summary className="cursor-pointer select-none font-mono text-sky-400/90 hover:text-sky-300">
                                Xem lời giải chi tiết
                              </summary>
                              <div className="mt-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-300 leading-relaxed space-y-1">
                                <MathText text={q.detailedDerivation} />
                              </div>
                            </details>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Saved Quizzes Library Tab */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-200">
              Danh sách đề bài đã tạo từ ảnh
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              Lưu trữ cục bộ trên trình duyệt
            </span>
          </div>

          {savedQuizzes.length === 0 ? (
            <div className="p-12 text-center rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-3">
              <p className="text-sm text-zinc-400">
                Bạn chưa lưu đề nào. Hãy chọn ảnh đề thi để tạo bài làm đầu tiên!
              </p>
              <button
                type="button"
                onClick={() => setViewTab('scan')}
                className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold cursor-pointer"
              >
                Quay lại tạo đề
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase font-bold text-sky-400">
                        [{quiz.subject.toUpperCase()}]
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {quiz.scannedAt} • {quiz.questions.length} câu
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-zinc-100">
                      {quiz.documentTitle}
                    </h4>

                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {quiz.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleStartPracticing(quiz)}
                      className="h-8 px-4 rounded-md bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Làm bài ngay →
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentQuiz(quiz);
                          setSelectedImage(quiz.imageDataUrl);
                          setSelectedFileName(quiz.sourceFileName || '');
                          setViewTab('scan');
                        }}
                        className="h-8 px-3 rounded-md border border-zinc-750 hover:border-zinc-700 bg-zinc-850 text-xs text-zinc-300 cursor-pointer"
                      >
                        Xem chi tiết
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteSavedQuiz(quiz.id)}
                        className="h-8 px-2.5 rounded-md border border-zinc-800 hover:border-rose-900 text-xs text-zinc-500 hover:text-rose-400 cursor-pointer"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
