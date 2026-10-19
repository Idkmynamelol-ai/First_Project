import React, { useState, useEffect } from 'react';

interface ByokModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  onSaveKey: (newKey: string) => void;
}

export const ByokModal: React.FC<ByokModalProps> = ({
  isOpen,
  onClose,
  apiKey,
  onSaveKey,
}) => {
  const [draftKey, setDraftKey] = useState(apiKey);
  const [showKey, setShowKey] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    setDraftKey(apiKey);
    setValidationError(null);
  }, [apiKey, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isByokActive = Boolean(apiKey && apiKey.trim().length > 0);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = draftKey.trim();
    if (trimmed.length > 0 && !trimmed.startsWith('AIza') && trimmed.length < 16) {
      setValidationError(
        'Vui lòng nhập khóa Google AI Studio hợp lệ bắt đầu bằng "AIza..." hoặc để trống để dùng cổng nhóm chung.'
      );
      return;
    }
    setValidationError(null);
    onSaveKey(trimmed);
    setSavedFeedback(true);
    setTimeout(() => {
      setSavedFeedback(false);
      onClose();
    }, 650);
  };

  const handleClear = () => {
    setDraftKey('');
    setValidationError(null);
    onSaveKey('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="byok-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full md:max-w-lg bg-zinc-900 border-t md:border border-zinc-800 rounded-t-3xl md:rounded-xl p-5 sm:p-6 pb-safe space-y-4">
        <div
          className="w-12 h-1.5 bg-zinc-700 rounded-full mx-auto mb-2 md:hidden"
          aria-hidden="true"
        />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="byok-modal-title" className="text-base font-semibold text-zinc-100">
              Kết nối khóa Gemini API cá nhân
            </h2>
            <p className="text-xs text-zinc-400">
              Sử dụng khóa cá nhân để trò chuyện thoải mái cùng trợ lý học tập
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ cài đặt khóa API"
            className="px-2.5 py-1 text-xs rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>

        {/* Trạng thái kết nối */}
        <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-xs font-medium text-zinc-400">
            Chế độ kết nối hiện tại
          </span>
          {isByokActive ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Đã kết nối khóa cá nhân
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
              Dùng cổng dùng chung mặc định
            </span>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label
              htmlFor="gemini-api-key-input"
              className="block text-xs font-medium text-zinc-300 mb-1.5"
            >
              Khóa API Google AI Studio
            </label>
            <div className="relative flex items-center">
              <input
                id="gemini-api-key-input"
                type={showKey ? 'text' : 'password'}
                value={draftKey}
                onChange={(e) => {
                  setDraftKey(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                placeholder="AIzaSy..."
                autoComplete="off"
                spellCheck={false}
                className="w-full h-11 pl-3.5 pr-14 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 font-mono focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowKey((prev) => !prev)}
                aria-label={showKey ? 'Ẩn khóa API' : 'Hiện khóa API'}
                aria-pressed={showKey}
                className="absolute right-2 px-2 py-1 text-xs font-mono text-zinc-400 hover:text-zinc-100 rounded-md cursor-pointer"
              >
                {showKey ? 'Ẩn' : 'Hiện'}
              </button>
            </div>
            {validationError && (
              <p role="alert" className="mt-2 text-xs text-rose-400 font-mono">
                {validationError}
              </p>
            )}
          </div>

          <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 space-y-1 text-xs text-zinc-400 leading-relaxed">
            <p className="text-zinc-200 font-medium">
              Bảo mật tuyệt đối trên trình duyệt của bạn
            </p>
            <p>
              Khóa API chỉ được lưu cục bộ trong{' '}
              <code className="px-1 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-[11px]">
                localStorage
              </code>{' '}
              của trình duyệt và không bao giờ gửi về máy chủ trung gian.
            </p>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-zinc-300 hover:text-white hover:underline font-medium pt-0.5"
            >
              Lấy khóa Gemini API miễn phí tại Google AI Studio ↗
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2">
            {isByokActive ? (
              <button
                type="button"
                onClick={handleClear}
                className="h-10 px-3.5 rounded-lg border border-rose-500/25 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 text-xs font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <span>Xóa khóa &amp; dùng cổng chung</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setDraftKey('AIzaSyDemoHighSchoolStemKey2026')}
                className="h-10 px-3 rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 text-xs font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <span>Điền khóa mẫu</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial h-10 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs font-medium transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-initial h-10 px-5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-all shadow-sm cursor-pointer"
              >
                {savedFeedback ? 'Đã lưu!' : 'Lưu cài đặt'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
