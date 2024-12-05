import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { getNews, getNewsById } from '../controllers/newsController';

const router = Router();

router.get('/', getNews);
router.get('/:id', authenticateToken, getNewsById);

export default router; 