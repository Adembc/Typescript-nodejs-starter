import { errorHandler } from './ErrorHandler';
import BaseError from './BaseError';

export default async (err: BaseError, req: Request, res: Response, next) => {
  if (!errorHandler.isTrustedError(err)) {
    next(err);
  }
  await errorHandler.handleError(err, res);
};
