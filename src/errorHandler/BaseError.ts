export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export default class BaseError extends Error {
  public readonly description: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(
    description: string,
    httpCode: HttpStatusCode,
    isOperational: boolean,
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.description = description;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
