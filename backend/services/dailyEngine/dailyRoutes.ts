import {
  VerifyDailyRequest,
  getDailyProblemsForDate,
  verifyDailySubmission,
} from './dailyController';

export interface HttpRequestLike {
  method?: string;
  url?: string;
  query?: Record<string, string | string[] | undefined>;
  body?: unknown;
}

export interface HttpResponseLike {
  status: (code: number) => HttpResponseLike;
  json: (payload: unknown) => void;
}

/**
 * Express-compatible GET /api/daily handler.
 * Accepts optional `?date=YYYY-MM-DD` query parameter (defaults to Asia/Ho_Chi_Minh).
 */
export function handleGetDaily(
  req: HttpRequestLike,
  res: HttpResponseLike
): void {
  try {
    const rawDate = req.query?.date;
    const dateParam = Array.isArray(rawDate) ? rawDate[0] : rawDate;
    const payload = getDailyProblemsForDate(dateParam);
    res.status(200).json(payload);
  } catch (err) {
    res.status(400).json({
      error: err instanceof Error ? err.message : 'Unable to load daily problems',
    });
  }
}

/**
 * Express-compatible POST /api/daily/verify handler.
 * Accepts `{ date, subject, problemId, userSelection, currentStreak }`.
 */
export function handlePostDailyVerify(
  req: HttpRequestLike,
  res: HttpResponseLike
): void {
  try {
    const body = (req.body ?? {}) as Partial<VerifyDailyRequest>;
    if (!body.subject || !body.problemId || body.userSelection === undefined) {
      res.status(400).json({
        error:
          'Missing required fields: subject, problemId, and userSelection are required.',
      });
      return;
    }
    const result = verifyDailySubmission({
      date: body.date,
      subject: body.subject,
      problemId: body.problemId,
      userSelection: body.userSelection,
      currentStreak: body.currentStreak,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      error: err instanceof Error ? err.message : 'Verification failed',
    });
  }
}

export interface ExpressRouterLike {
  get: (
    path: string,
    handler: (req: HttpRequestLike, res: HttpResponseLike) => void
  ) => unknown;
  post: (
    path: string,
    handler: (req: HttpRequestLike, res: HttpResponseLike) => void
  ) => unknown;
}

/**
 * Registers `GET /api/daily` and `POST /api/daily/verify` on an Express application or router.
 */
export function registerDailyRoutes(appOrRouter: ExpressRouterLike): void {
  appOrRouter.get('/api/daily', handleGetDaily);
  appOrRouter.post('/api/daily/verify', handlePostDailyVerify);
}
