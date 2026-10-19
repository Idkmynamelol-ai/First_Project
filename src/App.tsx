import React, { useEffect, useState } from 'react';
import { KeyRound, Home, ChevronDown } from 'lucide-react';
import { ProblemList } from './components/ProblemList';
import { Workspace } from './components/Workspace';
import { ByokModal } from './components/ByokModal';
import { CognitiveLevel } from './types/edu';
import { PRACTICE_QUESTIONS, grade12Curriculum, SUBJECTS_META } from './data/curriculum';

const STORAGE_KEY_BYOK = 'apexstem_gemini_byok_key';

const DIFFICULTY_PILLS: ('all' | CognitiveLevel)[] = [
  'all',
  'Nhận biết',
  'Thông hiểu',
  'Vận dụng',
  'Vận dụng cao',
];

export function App() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [byokOpen, setByokOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [results, setResults] = useState<Record<string, 'AC' | 'WA'>>({});
  const [ac, setAc] = useState(0);
  const [wa, setWa] = useState(0);
  const [streak, setStreak] = useState(0);
  const [cogFilter, setCogFilter] = useState<'all' | CognitiveLevel>('all');

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

  const activeQuestion = openId
    ? PRACTICE_QUESTIONS.find((q) => q.id === openId)
    : null;
  const activeTopicId = activeQuestion?.sourceTopic?.id ?? '';

  const handleTopicDropdownChange = (topicId: string) => {
    if (!topicId) {
      setOpenId(null);
      return;
    }
    const firstQ = PRACTICE_QUESTIONS.find(
      (q) =>
        q.sourceTopic?.id === topicId &&
        (cogFilter === 'all' || q.cognitiveLevel === cogFilter)
    ) ?? PRACTICE_QUESTIONS.find((q) => q.sourceTopic?.id === topicId);

    if (firstQ) {
      setOpenId(firstQ.id);
    }
  };

  const handleDifficultyPillClick = (lvl: 'all' | CognitiveLevel) => {
    setCogFilter(lvl);
    if (openId && lvl !== 'all' && activeQuestion?.sourceTopic) {
      const matchingInTopic = PRACTICE_QUESTIONS.find(
        (q) =>
          q.sourceTopic?.id === activeQuestion.sourceTopic?.id &&
          q.cognitiveLevel === lvl
      );
      if (matchingInTopic) {
        setOpenId(matchingInTopic.id);
      }
    }
  };

  return (
    <div
      className={`min-h-dvh bg-zinc-950 text-zinc-100 flex flex-col ${
        openId ? 'lg:h-screen lg:overflow-hidden' : ''
      }`}
    >
      {/* Top Navigation Bar: Fixed height h-12 px-5 border-b border-zinc-800/80 bg-zinc-950 */}
      <header className="sticky top-0 z-40 h-12 px-4 sm:px-5 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur flex items-center justify-between gap-3 shrink-0">
        {/* Left: Minimalist logo + Topic Switcher dropdown */}
        <div className="flex items-center gap-2.5 min-w-0">
          <a
            href="#/"
            aria-label="Về trang chủ"
            className="h-8 px-2.5 rounded-md border border-zinc-800/80 bg-zinc-900/60 hover:bg-zinc-900 flex items-center gap-1.5 text-xs text-zinc-300 hover:text-zinc-100 transition-colors shrink-0"
          >
            <Home className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
            <span className="hidden sm:inline">Trang chủ</span>
          </a>

          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="text-sm font-semibold tracking-tight text-zinc-100 hover:text-white cursor-pointer px-1 shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-xs bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7),inset_0_1px_0_rgba(255,255,255,0.4)]" aria-hidden="true" />
            <span className="font-mono tracking-tight font-bold">Scalar</span>
          </button>

          <span className="text-zinc-700 hidden md:inline" aria-hidden="true">
            /
          </span>

          {/* Topic Switcher Dropdown */}
          <div className="relative hidden md:flex items-center min-w-0 max-w-xs">
            <label htmlFor="header-topic-switcher" className="sr-only">
              Chuyển nhanh chuyên đề
            </label>
            <select
              id="header-topic-switcher"
              value={activeTopicId}
              onChange={(e) => handleTopicDropdownChange(e.target.value)}
              className="h-8 pl-2.5 pr-7 rounded-md bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 truncate appearance-none focus:outline-none focus:border-sky-500/50 cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
            >
              <option value="">Tất cả chuyên đề ({grade12Curriculum.length})</option>
              {grade12Curriculum.map((t) => (
                <option key={t.id} value={t.id}>
                  [{SUBJECTS_META[t.subject].vnName} {t.grade}] {t.chapter} — {t.topicName}
                </option>
              ))}
            </select>
            <ChevronDown
              className="w-3.5 h-3.5 text-zinc-500 absolute right-2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Center: Difficulty Filter Pill Bar */}
        <div
          className="hidden xl:flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]"
          role="group"
          aria-label="Lọc theo mức độ nhận thức"
        >
          {DIFFICULTY_PILLS.map((lvl) => {
            const active = cogFilter === lvl;
            return (
              <button
                key={lvl}
                type="button"
                onClick={() => handleDifficultyPillClick(lvl)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  active
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/80 shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {lvl === 'all' ? 'Tất cả mức độ' : lvl}
              </button>
            );
          })}
        </div>

        {/* Right: Compact telemetry pill + BYOK API button */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1 text-xs font-mono flex items-center gap-2.5 sm:gap-3 shadow-[0_1px_2px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)]"
            aria-label={`Đúng ${ac}, Sai ${wa}, Chuỗi ${streak}`}
          >
            <span className="text-emerald-400 font-semibold tracking-tight">AC: {ac}</span>
            <span className="text-zinc-700" aria-hidden="true">
              |
            </span>
            <span className="text-rose-400 font-semibold tracking-tight">WA: {wa}</span>
            <span className="text-zinc-700" aria-hidden="true">
              |
            </span>
            <span className="text-amber-400 font-semibold tracking-tight">Streak: {streak}</span>
          </div>

          <button
            type="button"
            onClick={() => setByokOpen(true)}
            aria-label={
              byok
                ? 'Khóa API: Đã kết nối (BYOK đang bật)'
                : 'Khóa API: Đang dùng cổng nhóm chung'
            }
            className="h-8 px-2.5 rounded-md border border-zinc-700/80 bg-zinc-900/80 hover:bg-zinc-850 flex items-center justify-center gap-1.5 text-xs text-zinc-300 hover:text-zinc-100 transition-colors cursor-pointer shadow-[0_1px_0_0_rgba(0,0,0,0.3)]"
          >
            <KeyRound
              className={`w-3.5 h-3.5 ${
                byok ? 'text-emerald-400' : 'text-sky-400'
              }`}
              aria-hidden="true"
            />
            <span className="hidden sm:inline">
              {byok ? 'BYOK Bật' : 'Khóa API'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      {openId ? (
        <main className="flex-1 min-h-0 flex flex-col">
          <Workspace
            questionId={openId}
            apiKey={apiKey}
            onBack={() => setOpenId(null)}
            onVerdict={onVerdict}
            onSelectQuestion={setOpenId}
            ac={ac}
            streak={streak}
          />
        </main>
      ) : (
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 pb-20 flex-1">
          <ProblemList
            solved={results}
            onOpen={setOpenId}
            streak={streak}
            onStreakUpdate={handleDailyStreakUpdate}
            externalCogFilter={cogFilter}
            onExternalCogFilterChange={setCogFilter}
          />
        </main>
      )}

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
