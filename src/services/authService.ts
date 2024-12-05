import jwt from 'jsonwebtoken';
import { config } from '../config/constants';
import { User, LoginResponse } from '../types';
import { ApiError } from '../middleware/errorHandler';

// In-memory user store (replace with database in production)
const users: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123' // In production, we should use hashed passwords!
  }
];

export class AuthService {
  async login(username: string, password: string): Promise<LoginResponse> {
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, config.JWT_SECRET, {
      expiresIn: '1h'
    });

    const { password: _, ...userWithoutPassword } = user;
    return {
      token,
      user: userWithoutPassword
    };
  }
}

export const authService = new AuthService(); 