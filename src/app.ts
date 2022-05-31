import express, { Request, Response, NextFunction } from 'express';

//middlewares
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
// import hpp from 'hpp'
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import centerliazedErrorHandler from './errorHandler/centerliazedErrorHandler';
import ClientError from './errorHandler/ClientError';
// routes
import testRoute from './routes/testRoute';
import options from './helper/swagger';
const app = express();
// midllewares
app.use(cors());
app.options('*', cors());
// app.use(cors({
//   origin: 'youAppUrl.com'
// })
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());
//swagger

const swaggerSpec = swaggerJsdoc(options);

// Swagger page
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use('/test', testRoute);
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  next(
    new ClientError('can not find ' + req.originalUrl + ' on this server', 404),
  );
});
// global handler error middleware
//@ts-ignore
app.use(centerliazedErrorHandler);
export default app;
