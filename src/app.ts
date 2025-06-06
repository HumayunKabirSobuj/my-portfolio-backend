import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      "https://humayun506034-dashboard.vercel.app",
      "https://humayun506034.vercel.app"
    ],
    credentials: true,
  }),
);
app.use(bodyParser.json());

// application route
app.use('/api', router);

// app.use('/order', orderRoutes);

// Test route
const test = async (req: Request, res: Response) => {
  res.send('Portfolio and Blog Website server is running...');
};

app.get('/', test);

// Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
