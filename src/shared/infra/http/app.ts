import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import session from 'express-session';
import helmet from 'helmet';

import './containers'
import routes from './routes';
import AppError from '@shared/errors/AppError';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";

const app = express();

app.use(helmet());

app.use(
  express.urlencoded({ limit: '10mb', extended: false, parameterLimit: 50000 })
);
app.use(express.json({ limit: '10mb' }));
app.disable('x-powered-by');

app.use(
  cors()
);
app.use(routes);

app.use(session({
  secret: process.env.SESSION_SECRET as string,
  saveUninitialized: false,
  unset: 'destroy',
  resave: false,
}));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

export default app;
