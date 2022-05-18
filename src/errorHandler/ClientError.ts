import BaseError, { HttpStatusCode } from './BaseError';

export default class ClientError extends BaseError {
  constructor(
    description = 'internal server error',
    httpCode = HttpStatusCode.INTERNAL_SERVER,
    isOperational = true,
  ) {
    super(description, httpCode, isOperational);
  }
}
