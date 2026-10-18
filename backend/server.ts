import {
  ExpressRouterLike,
  HttpRequestLike,
  HttpResponseLike,
  registerDailyRoutes,
} from './services/dailyEngine/dailyRoutes';

/**
 * Mounts the zero-quota deterministic Daily Problem Engine routes
 * (`GET /api/daily` and `POST /api/daily/verify`) onto an Express/Node server instance.
 */
export function configureServer(app: ExpressRouterLike): ExpressRouterLike {
  registerDailyRoutes(app);
  return app;
}

export {
  registerDailyRoutes,
  type HttpRequestLike,
  type HttpResponseLike,
};
