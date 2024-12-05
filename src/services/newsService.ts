import axios from 'axios';
import { config } from '../config/constants';
import { NewsArticle, PaginatedResponse, NewsQueryParams } from '../types';
import { ApiError } from '../middleware/errorHandler';

export class NewsService {
  private baseUrl = config.NEWS_API_BASE_URL;
  private apiKey = config.NEWS_API_KEY;

  async getNews(params: NewsQueryParams = {}): Promise<PaginatedResponse<NewsArticle>> {
    try {
      const page = Math.max(1, params.page || 1);
      const limit = Math.min(100, Math.max(1, params.limit || 10));

      const requestLimit = limit * 2;

      const response = await axios.get(
        `${this.baseUrl}/top-headlines`, {
          params: {
            country: 'us',
            apiKey: this.apiKey,
            pageSize: requestLimit,
            page
          }
        }
      );
      
      const filteredArticles = response.data.articles.filter((article: any) => 
        article.title !== '[Removed]' && 
        article.description !== '[Removed]' &&
        article.content !== '[Removed]' &&
        article.source.name !== '[Removed]'
      );

      const totalFilteredResults = Math.floor(response.data.totalResults * (filteredArticles.length / response.data.articles.length));

      const paginatedArticles = filteredArticles
        .slice(0, limit)
        .map((article: any, index: number) => ({
          id: ((page - 1) * limit + index + 1).toString(),
          title: article.title || 'No title available',
          description: article.description || 'No description available',
          url: article.url,
          urlToImage: article.urlToImage || null,
          publishedAt: article.publishedAt,
          source: {
            name: article.source.name || 'Unknown Source'
          },
          author: article.author || 'Unknown Author',
          content: article.content || article.description || 'No content available'
        }));

      return {
        data: paginatedArticles,
        pagination: {
          page,
          limit,
          total: totalFilteredResults,
          totalPages: Math.ceil(totalFilteredResults / limit)
        }
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new ApiError(error.response?.status || 500, error.message);
      }
      throw error;
    }
  }

  async getNewsById(id: string): Promise<NewsArticle | null> {
    const response = await this.getNews({ limit: 100 });
    return response.data.find(article => article.id === id) || null;
  }
}

export const newsService = new NewsService(); 