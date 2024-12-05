import { Request, Response, NextFunction } from 'express';
import { newsService } from '../services/newsService';
import { ApiError } from '../middleware/errorHandler';

export const getNews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const news = await newsService.getNews({ page, limit });
    res.json(news);
  } catch (error) {
    next(error);
  }
};

export const getNewsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const news = await newsService.getNewsById(req.params.id);
    if (!news) {
      throw new ApiError(404, 'News article not found');
    }
    res.json(news);
  } catch (error) {
    next(error);
  }
}; 