export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  source: {
    id?: string;
    name: string;
  };
}

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: Omit<User, 'password'>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface NewsQueryParams {
  page?: number;
  limit?: number;
} 