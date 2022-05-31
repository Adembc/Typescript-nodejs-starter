import dotenv from 'dotenv';
import { errorHandler } from './errorHandler/ErrorHandler';
import BaseError from './errorHandler/BaseError';
dotenv.config({ path: `${__dirname}/../config.env` });
import app from './app';
// connect database

// run server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}... ON ${process.env.NODE_ENV} MODE`);
});
// error handling
process.on('uncaughtException', (error: BaseError, res) => {
  errorHandler.handleError(error, res);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});
