# Frontend

React application with Vite and DaisyUI.

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

## Running the application

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── services/           # API services
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── public/                 # Static assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## DaisyUI

This project uses DaisyUI components. See the [DaisyUI documentation](https://daisyui.com/) for available components and themes.

Available themes: light, dark, cupcake (can be changed in `tailwind.config.js`)

## API Integration

API calls are configured in `src/services/api.js`. The base URL is set via the `VITE_API_URL` environment variable.
