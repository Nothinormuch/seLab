# Waulkeen's Rest - Hostel Finder

A modern web application to find and filter hostels near UPES campus by distance and budget.

## Architecture

This project has been refactored to use a separated frontend and backend architecture:

- **Backend**: Express.js server running on port 5000
- **Frontend**: React application running on port 3000 (development)

## Project Structure

```
.
├── backend/
│   ├── server.js           # Express server entry point
│   ├── package.json        # Backend dependencies
│   ├── routes/
│   │   └── api.js          # API endpoints
│   ├── data/
│   │   └── hostels.js      # Hostel data
│   ├── public/             # Static assets (fonts, images)
│   └── node_modules/
├── frontend/
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── public/             # Static files (favicon, logo)
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── index.jsx       # React entry point
│   │   ├── index.css       # Styling
│   │   └── components/     # React components
│   │       ├── Header.jsx
│   │       ├── FilterForm.jsx
│   │       ├── MapSection.jsx
│   │       ├── HostelTable.jsx
│   │       └── Footer.jsx
│   └── node_modules/
├── static/                 # Original static files (kept for reference)
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 16+ and npm

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

**API Endpoint:**

- `GET /api/hostels?distance=<km>&price=<₹>` - Get filtered hostels

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

## Features

- Filter hostels by maximum distance from campus (0-3 km)
- Filter hostels by budget range (₹100,000 - ₹160,000)
- View hostels in an interactive table
- Embedded Google Maps showing UPES location
- Responsive design for mobile and desktop

## Migration Notes

This project was originally built with Flask and Jinja2 templates and has been modernized to use:

- **Backend**: Express.js with RESTful API
- **Frontend**: React with Vite for fast development

All functionality and styling have been preserved from the original application.

## Running Both Applications

**Terminal 1 (Backend):**

```bash
cd backend
npm start
```

**Terminal 2 (Frontend):**

```bash
cd frontend
npm run dev
```

Then visit `http://localhost:3000` in your browser.

## Production Build

To build the frontend for production:

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/` directory.

## Technologies Used

### Backend

- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing middleware

### Frontend

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling

## License

Waulkeen's Rest © 2026
