# ZZZ

Full-stack application with Node.js backend API and React frontend with DaisyUI.

## Project Structure

```
.
├── backend/          # Node.js Express API
└── frontend/         # React + Vite + DaisyUI application
```

## Quick Start

### Backend API

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

The API will run on `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend will run on `http://localhost:5173`

## Documentation

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)

## Tech Stack

### Backend
- Node.js
- Express.js
- CORS
- dotenv

### Frontend
- React
- Vite
- Tailwind CSS
- DaisyUI

## Development

Both projects can run simultaneously. Make sure to:
1. Start the backend first on port 3000
2. Start the frontend on port 5173
3. The frontend is configured to communicate with the backend API

## Environment Variables

Both projects require environment variables. Copy the `.env.example` files to `.env` in each directory and configure as needed.