import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/authRoutes';
import newsRoutes from './routes/newsRoutes';
import { config } from './config/constants';
import swaggerDocument from '../swagger.json';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

// Error Handler
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

export default app; 