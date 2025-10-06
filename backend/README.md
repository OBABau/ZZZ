# Backend API

Node.js REST API with Express.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env` file

## Running the server

Development mode with hot reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Project Structure

```
backend/
├── index.js                 # Main application entry point
├── src/
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   ├── models/             # Data models
│   ├── middleware/         # Custom middleware
│   └── config/             # Configuration files
├── .env.example            # Environment variables template
└── package.json            # Dependencies and scripts
```

## API Endpoints

- `GET /` - API status
- `GET /api/health` - Health check

Add your custom routes in the `src/routes` directory.
