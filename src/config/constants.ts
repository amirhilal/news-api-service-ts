import dotenv from 'dotenv';

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  NEWS_API_KEY: process.env.NEWS_API_KEY || 'your-news-api-key',
  NEWS_API_BASE_URL: 'https://newsapi.org/v2'
}; 