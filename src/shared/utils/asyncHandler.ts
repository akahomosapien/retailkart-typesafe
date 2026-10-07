// import type { NextFunction, Request, RequestHandler, Response } from "express";

// const asyncHandler =
//   (fn: RequestHandler): RequestHandler =>
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       next(error);
//     }
//   };

// export default asyncHandler;

import type { NextFunction, Request, RequestHandler, Response } from "express";

const asyncHandler =
  <P extends Record<string, string | string[]>>(
    fn: (req: Request<P>, res: Response, next: NextFunction) => Promise<void>,
  ): RequestHandler<P> =>
  async (req, res, next): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default asyncHandler;
