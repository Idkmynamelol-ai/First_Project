import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {
  handleGetDaily,
  handlePostDailyVerify,
} from './backend/services/dailyEngine/dailyRoutes';

function dailyApiPlugin(): Plugin {
  const middleware = (
    req: {
      method?: string;
      url?: string;
      on?: (event: string, listener: (chunk?: unknown) => void) => void;
    },
    res: {
      statusCode?: number;
      setHeader: (name: string, value: string) => void;
      end: (body?: string) => void;
    },
    next: () => void
  ) => {
    const rawUrl = req.url ?? '';
    if (!rawUrl.startsWith('/api/daily')) {
      next();
      return;
    }

    const parsed = new URL(rawUrl, 'http://localhost');
    const resAdapter = {
      status(code: number) {
        res.statusCode = code;
        return this;
      },
      json(payload: unknown) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(payload));
      },
    };

    if (req.method === 'GET' && parsed.pathname === '/api/daily') {
      const date = parsed.searchParams.get('date') ?? undefined;
      handleGetDaily({ method: 'GET', url: rawUrl, query: { date } }, resAdapter);
      return;
    }

    if (req.method === 'POST' && parsed.pathname === '/api/daily/verify') {
      let bodyText = '';
      if (req.on) {
        req.on('data', (chunk) => {
          bodyText += String(chunk ?? '');
        });
        req.on('end', () => {
          let parsedBody: unknown = {};
          try {
            parsedBody = bodyText ? JSON.parse(bodyText) : {};
          } catch {
            parsedBody = {};
          }
          handlePostDailyVerify(
            { method: 'POST', url: rawUrl, body: parsedBody },
            resAdapter
          );
        });
        return;
      }
    }

    next();
  };

  return {
    name: 'gdpt2018-daily-engine-api',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), dailyApiPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          katex: ['katex'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
