import React, { useState, useMemo } from 'react';
import katex from 'katex';
import { Copy, Check, Terminal } from 'lucide-react';

interface MathRendererProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  latex,
  displayMode = false,
  className = '',
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
        strict: 'ignore',
      });
    } catch {
      return latex;
    }
  }, [latex, displayMode]);

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface RichTextProps {
  text: string;
  className?: string;
}

/**
 * Parses inline $...$ and block $$...$$ LaTeX segments and **bold** text cleanly
 * with blue highlights on important **bold** parts.
 */
export const RichTextWithMath: React.FC<RichTextProps> = ({
  text,
  className = '',
}) => {
  const tokens = useMemo(() => {
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$|\*\*[^*]+\*\*)/g);
    return parts.filter(Boolean);
  }, [text]);

  return (
    <span className={className}>
      {tokens.map((part, idx) => {
        if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
          return (
            <span
              key={idx}
              className="block overflow-x-auto py-2 my-1.5 px-3 bg-slate-900/80 border border-slate-800"
            >
              <MathRenderer latex={part.slice(2, -2)} displayMode={true} />
            </span>
          );
        }
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const rawLatex = part.slice(1, -1);
          return (
            <MathRenderer
              key={idx}
              latex={rawLatex}
              displayMode={false}
              className="mx-0.5 text-sky-200"
            />
          );
        }
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return (
            <strong
              key={idx}
              className="font-bold text-sky-300 bg-sky-500/20 border-b border-sky-400 px-1 py-0.5"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
};

interface CopyableFormulaBlockProps {
  latex: string;
  title?: string;
  accentHex?: string;
  compact?: boolean;
}

export const CopyableFormulaBlock: React.FC<CopyableFormulaBlockProps> = ({
  latex,
  title,
  accentHex = '#38BDF8',
  compact = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(latex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div
      className={`group relative bg-[#0A0A0A]/90 border border-[#D4D4D8]/60 ${
        compact ? 'p-3' : 'p-3.5 sm:p-4'
      } transition-colors hover:border-[#D4D4D8]`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: accentHex }}
            aria-hidden="true"
          />
          <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/15 border border-sky-400/40 px-2 py-0.5 truncate">
            {title || 'Công thức LaTeX'}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied
              ? 'Đã sao chép công thức'
              : 'Sao chép công thức LaTeX vào bộ nhớ tạm'
          }
          className="inline-flex items-center gap-1.5 min-h-[34px] px-2.5 py-1 text-xs font-medium bg-[#111111] hover:bg-slate-800 text-[#F5F5F5] border border-slate-700/80 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span className="text-emerald-300">Đã chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" aria-hidden="true" />
              <span>Chép công thức</span>
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto py-1 text-center sm:text-left">
        <MathRenderer latex={latex} displayMode={true} />
      </div>

      <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-[#64748B] overflow-x-auto no-scrollbar">
        <Terminal className="w-3 h-3 shrink-0 text-[#64748B]" aria-hidden="true" />
        <code className="truncate">{latex}</code>
      </div>
    </div>
  );
};
