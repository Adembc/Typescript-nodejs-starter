import { errorHandler } from './ErrorHandler';
import BaseError from './BaseError';
import { NextFunction } from 'express';

export default async (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!errorHandler.isTrustedError(err)) {
    next(err);
  }
  await errorHandler.handleError(err, res);
};
