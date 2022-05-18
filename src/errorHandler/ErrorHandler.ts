import BaseError from './BaseError';
import { logger } from './logger';

class ErrorHandler {
  public async handleError(err: BaseError, res): Promise<void> {
    await logger.error(
      'Error message from the centralized error-handling component',
      err,
    );
    res.status(err.httpCode).json({
      status: 'fail',
      message: err.description,
    });
  }

  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }
}
export const errorHandler = new ErrorHandler();
