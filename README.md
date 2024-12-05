# News API Service

A RESTful API service built with Express.js and TypeScript that integrates with the News API to provide news articles. The service includes authentication, protected routes, and comprehensive API documentation.

## Features

- **Authentication System**
  - JWT-based authentication
  - Protected routes
  - In-memory user store (easily replaceable with a database)

- **News Integration**
  - Public endpoint for news listing
  - Protected endpoint for detailed news views
  - Integration with News API

- **API Documentation**
  - Swagger/OpenAPI documentation
  - Bruno API collection for testing
  - Comprehensive error handling

## Tech Stack

- Node.js & Express.js
- TypeScript
- JWT for authentication
- Swagger UI for API documentation
- Bruno for API testing
- News API for news data

## Getting Started

1. **Install dependencies**
    - `npm install`
2. **Set up the environment variables**
    - Create a .env file based on the .env.example file
3. **Run the application**
    - `npm run dev`
4. **Access the API documentation**
    - http://localhost:3000/api-docs
5. **Production**
    - `npm run build`
    - `npm start`

## API Endpoints

### Public Endpoints
- **GET /api/news**
  - Get list of news articles
  - No authentication required

- **POST /api/auth/login**
  - Login to get JWT token
  - Body: `{ "username": "admin", "password": "admin123" }`

### Protected Endpoints
- **GET /api/news/:id**
  - Get detailed news article
  - Requires JWT token in Authorization header

  ## Testing with Bruno

1. Install Bruno API client
2. Open the bruno collection in the `/bruno` directory
3. Run the requests:
   - Login to get token
   - Test public and protected endpoints

## Error Handling
The API implements comprehensive error handling:
- Authentication errors (401, 403)
- Not found errors (404)
- Validation errors (400)
- Server errors (500)

## Security Features
- JWT authentication
- Protected routes
- In-memory user store (replace with database in production)
- Error handling middleware

## Practices Used
- TypeScript for type safety
- Modular architecture
- Clean code principles
- Comprehensive error handling
- API documentation
- Environment configuration
- Testing setup with Bruno

## Dependencies Used
- axios : HTTP client for making requests
- cors : Cross-Origin Resource Sharing
- dotenv : Loads environment variables from .env file
- express : Web framework
- jsonwebtoken : JSON Web Token implementation
- swagger-ui-express : Serve Swagger UI

## Future Improvements
1. Better Database Integration
    - Replace in-memory user store with a proper database
    - Add user registration
    - Store news preferences
    - Add more comprehensive testing

2. Enhanced Security
   - Password hashing
   - Rate limiting
   - Input sanitization
   
3. Improved Performance
   - Caching
   - Batch processing

4. Additional Features
   - News categories
   - User preferences
   - Search functionality
   - Pagination
   - Add logging system
