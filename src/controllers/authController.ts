import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const result = await authService.login(username, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
}; 