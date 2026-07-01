# Demo Vite + React + Tailwind + Redux + Login

This is a fully-featured starter app with authentication and routing.

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm run dev
   ```

3. Open the URL printed by Vite (usually http://localhost:5173)

4. Login with demo credentials:
   - Email: `admin@demo.com`
   - Password: `password123`

## What's included

- **Vite + React** - Fast development build tool and React framework
- **Tailwind CSS + PostCSS** - Utility-first CSS framework with processing
- **Redux Toolkit + react-redux** - Modern Redux state management
- **React Router DOM** - Client-side routing and navigation
- **Authentication System** - Login/logout with localStorage persistence
- **Protected Routes** - Route protection based on authentication state
- **Responsive Design** - Mobile-first responsive design with Tailwind

## Features

### Authentication

- Login page with form validation
- Demo credentials for quick testing
- Persistent login state (localStorage)
- Automatic redirects for authenticated/unauthenticated users
- Logout functionality

### Dashboard

- Welcome section with user info
- Redux counter demo
- App statistics display
- Responsive card layout

### Components Structure

```
src/
├── pages/
│   ├── Login.jsx          # Login form with validation
│   └── Dashboard.jsx      # Main dashboard after login
├── features/
│   ├── auth/
│   │   └── authSlice.js   # Authentication Redux slice
│   └── counter/
│       ├── Counter.jsx    # Counter component
│       └── counterSlice.js # Counter Redux slice
├── components/
│   └── ProtectedRoute.jsx # Route protection wrapper
└── store/
    └── store.js           # Redux store configuration
```

## Routes

- `/` - Redirects to dashboard if logged in, otherwise to login
- `/login` - Login page (redirects to dashboard if already logged in)
- `/dashboard` - Protected main dashboard (requires authentication)

## Demo Credentials

- Email: `admin@demo.com`
- Password: `password123`

## Development

The app includes form validation, loading states, error handling, and a clean, professional UI built with Tailwind CSS.

Notes

- Tailwind requires the devDependencies to be installed; after npm install you can run the dev server.
- If you prefer yarn or pnpm, use the corresponding commands.
