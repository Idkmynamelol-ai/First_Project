import React, { useState, useMemo } from 'react';
import katex from 'katex';
import { Copy, Check } from 'lucide-react';

interface MathRendererProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

/**
 * Normalizes a LaTeX expression so Vietnamese subscripts and chemical formulas
 * render cleanly in KaTeX without throwing or clipping.
 */
export function normalizeLatexExpression(raw: string): string {
  let expr = raw.trim();
  // Ensure bare subscripts with non-ASCII Vietnamese characters are wrapped in \text{...}
  expr = expr.replace(
    /_\{([^{}\\]*[^\x00-\x7F][^{}\\]*)\}/g,
    '_{' + '\\text{$1}' + '}'
  );
  return expr;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  latex,
  displayMode = false,
  className = '',
}) => {
  const html = useMemo(() => {
    try {
      const normalized = normalizeLatexExpression(latex);
      return katex.renderToString(normalized, {
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
      className={`inline-block max-w-full overflow-x-auto align-middle text-[15px] text-zinc-100 leading-[1.8] ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface MathTextProps {
  content?: string;
  text?: string;
  className?: string;
}

/**
 * Automatically wraps stray LaTeX fragments (e.g., `m = 21.8\text{ g}`, `A (m = 21.8\text{ g})`,
 * `m_{\text{Ag}} = 32.4\text{ g}`, `Br_2`, `AgNO_3/NH_3`, `\Rightarrow`, `\rightarrow`)
 * in inline `$...$` delimiters when they are not already inside `$...$` or `$$...$$`.
 */
function sanitizeLeakingLatex(input: string): string {
  if (!input) return '';
  // If the entire string is a pure LaTeX formula with no $ delimiters (like option strings: `m = 21.8\text{ g}` or `m_{\text{Ag}} = 32.4\text{ g}`)
  if (
    !input.includes('$') &&
    (/\\text\{|\\frac\{|\\sqrt\{|\\xrightarrow|\\rightarrow|\\Rightarrow|\\implies|\\cdot|\\times|_\{/.test(
      input
    ) ||
      /^[a-zA-Z0-9_\\{}^().+\-*/=\s,%]+$/.test(input) &&
        (/[_^\\]/.test(input) || /\b[mMnV]\s*=/.test(input)))
  ) {
    // Check if it's a prefix label like "A (m = 21.8\text{ g})"
    const parenMatch = input.match(/^([A-D]\s*\()(.+\\text\{.+\})(\))$/);
    if (parenMatch) {
      return `${parenMatch[1]}$${parenMatch[2]}$${parenMatch[3]}`;
    }
    // Check if the whole string is a math expression like "m = 21.8\text{ g}"
    if (/^[mMnVpPhHkK_a-zA-Z0-9\\{}\s=.,+\-*/^()]+$/.test(input) && /\\text\{|_\{|=/.test(input)) {
      return `$${input}$`;
    }
  }

  // Segment by existing $$...$$ and $...$ so we only sanitize plain text parts
  const segments = input.split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g);
  return segments
    .map((seg) => {
      if (seg.startsWith('$')) return seg;
      let s = seg;
      // Wrap parenthetical leaking LaTeX like (m = 21.8\text{ g}) or (Br_2) or (AgNO_3/NH_3)
      s = s.replace(
        /\(([A-Za-z0-9_\\{}^().+\-*/=\s]+\s*\\text\{[^}]+\}[A-Za-z0-9_\\{}^().+\-*/=\s]*)\)/g,
        '($$$1$$)'
      );
      s = s.replace(
        /\(([A-Za-z0-9]+_[0-9]+(?:\/[A-Za-z0-9_]+)?)\)/g,
        '($$$1$$)'
      );
      // Wrap standalone chemical/math expressions containing \text{...} outside $
      s = s.replace(
        /([a-zA-Z0-9_\\{}^().+\-*/=]+\s*\\text\{[^}]+\})/g,
        '$$$1$$'
      );
      // Wrap stray arrows
      s = s.replace(/\\Rightarrow/g, '$\\Rightarrow$');
      s = s.replace(/\\rightarrow/g, '$\\rightarrow$');
      return s;
    })
    .join('');
}

/**
 * Deterministic KaTeX text & math renderer (`<MathText />` & `<RichTextWithMath />`).
 * - Parses `$$...$$` display math, `$...$` inline math, and sanitizes leaking LaTeX macros.
 * - Uses clean font-semibold text-zinc-100 for `**bold**` without harsh cyan/blue `<mark>` backgrounds.
 */
export const MathText: React.FC<MathTextProps> = ({
  content,
  text,
  className = '',
}) => {
  const raw = content ?? text ?? '';

  const tokens = useMemo(() => {
    const sanitized = sanitizeLeakingLatex(raw);
    const parts = sanitized.split(
      /(\$\$[\s\S]+?\$\$|\$[^$]+\$|\*\*[^*]+\*\*|\*[^*\n]+\*)/g
    );
    return parts.filter(Boolean);
  }, [raw]);

  return (
    <span className={`leading-7 ${className}`}>
      {tokens.map((part, idx) => {
        if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
          return (
            <span
              key={idx}
              className="block overflow-x-auto py-2.5 my-2 px-4 rounded-lg bg-zinc-900/70 border border-zinc-800/80"
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
              className="mx-0.5 text-zinc-100"
            />
          );
        }
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return (
            <strong key={idx} className="font-semibold text-zinc-100">
              <MathText content={part.slice(2, -2)} />
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return (
            <em key={idx} className="italic text-zinc-200">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
};

export const RichTextWithMath = MathText;

interface CopyableFormulaBlockProps {
  latex: string;
  title?: string;
  description?: string;
  compact?: boolean;
}

export const CopyableFormulaBlock: React.FC<CopyableFormulaBlockProps> = ({
  latex,
  title,
  description,
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
      className={`bg-zinc-900/60 border-l-2 border-l-sky-500 border border-zinc-800/80 rounded-r-lg ${
        compact ? 'p-3.5' : 'p-4'
      } my-3 transition-colors`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-semibold text-zinc-200 truncate">
          {title || 'Công thức & Định luật trọng tâm'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied
              ? 'Đã sao chép công thức'
              : 'Sao chép công thức LaTeX vào bộ nhớ tạm'
          }
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span className="text-emerald-300">Đã chép</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
              <span>Chép LaTeX</span>
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto py-1.5">
        <MathRenderer latex={latex} displayMode={true} />
      </div>

      {description && (
        <p className="mt-2 pt-2 border-t border-zinc-800/60 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <MathText content={description} />
        </p>
      )}
    </div>
  );
};
