import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/constants';

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = jwt.verify(token, config.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Forbidden' });
  }
}; 