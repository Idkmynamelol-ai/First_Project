import React, { useEffect, useState } from 'react';
import { KeyRound, Terminal, Home } from 'lucide-react';
import { ProblemList } from './components/ProblemList';
import { Workspace } from './components/Workspace';
import { ByokModal } from './components/ByokModal';

const STORAGE_KEY_BYOK = 'apexstem_gemini_byok_key';

export function App() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [byokOpen, setByokOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [results, setResults] = useState<Record<string, 'AC' | 'WA'>>({});
  const [ac, setAc] = useState(0);
  const [wa, setWa] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY_BYOK);
      if (saved) setApiKey(saved);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const saveKey = (k: string) => {
    setApiKey(k);
    try {
      if (k) window.localStorage.setItem(STORAGE_KEY_BYOK, k);
      else window.localStorage.removeItem(STORAGE_KEY_BYOK);
    } catch {
      /* ignore */
    }
  };

  const onVerdict = (id: string, correct: boolean) => {
    setResults((r) => ({ ...r, [id]: correct ? 'AC' : 'WA' }));
    if (correct) {
      setAc((n) => n + 1);
      setStreak((n) => n + 1);
    } else {
      setWa((n) => n + 1);
      setStreak(0);
    }
  };

  const handleDailyStreakUpdate = (nextStreak: number, isCorrect: boolean) => {
    setStreak(nextStreak);
    if (isCorrect) setAc((n) => n + 1);
    else setWa((n) => n + 1);
  };

  const byok = apiKey.trim().length > 0;

  return (
    <div className="min-h-dvh bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur border-b border-slate-800 pt-safe">
        <div className="max-w-[1600px] mx-auto px-3.5 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#/"
              aria-label="Về trang chủ"
              className="h-10 px-2.5 border border-slate-800 flex items-center gap-1.5 text-xs font-mono text-neutral-200 hover:border-sky-400 hover:text-sky-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Home className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span className="hidden sm:inline">Trang chủ</span>
            </a>
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="flex items-center gap-2 h-11 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Terminal className="w-5 h-5 text-sky-400" aria-hidden="true" />
              <span className="font-mono text-sm font-bold tracking-tight">Scalar</span>
            </button>
          </div>

          <div
            className="font-mono text-[11px] sm:text-xs flex items-center gap-1.5 sm:gap-3 px-2.5 sm:px-3 h-9 border border-slate-800 bg-[#111111] whitespace-nowrap"
            aria-label={`Đúng ${ac}, Sai ${wa}, Chuỗi ${streak}`}
          >
            <span className="text-[#10B981] font-bold">AC: {ac}</span>
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
            <span className="text-[#F43F5E] font-bold">WA: {wa}</span>
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
            <span className="text-sky-300 font-bold">Streak: {streak}</span>
          </div>

          <button
            type="button"
            onClick={() => setByokOpen(true)}
            aria-label={
              byok
                ? 'Khóa API: Đã kết nối (BYOK đang bật)'
                : 'Khóa API: Đang dùng cổng nhóm chung'
            }
            className="h-10 min-w-[44px] px-2.5 sm:px-3 border border-slate-800 flex items-center justify-center gap-2 font-mono text-xs text-neutral-200 hover:border-sky-400 hover:text-sky-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <KeyRound
              className="w-4 h-4"
              style={{ color: byok ? '#10B981' : '#38BDF8' }}
              aria-hidden="true"
            />
            <span className="hidden md:inline">
              {byok ? 'BYOK Bật' : 'Khóa API'}
            </span>
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-3.5 sm:px-6 py-4 pb-24 lg:pb-6">
        {openId ? (
          <Workspace
            questionId={openId}
            apiKey={apiKey}
            onBack={() => setOpenId(null)}
            onVerdict={onVerdict}
          />
        ) : (
          <ProblemList
            solved={results}
            onOpen={setOpenId}
            streak={streak}
            onStreakUpdate={handleDailyStreakUpdate}
          />
        )}
      </main>

      <ByokModal
        isOpen={byokOpen}
        onClose={() => setByokOpen(false)}
        apiKey={apiKey}
        onSaveKey={saveKey}
      />
    </div>
  );
}
export default App;
