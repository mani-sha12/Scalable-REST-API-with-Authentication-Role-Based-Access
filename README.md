# Scalable REST API with Authentication & Role-Based Access

A full-stack app with a Node.js/Express REST API featuring JWT authentication and role-based access control, plus a React frontend.

![Dashboard screenshot](./screenshots/dashboard.png)

## Features
- User registration and login with bcrypt password hashing and JWT auth
- Role-based access control (`user` vs `admin`)
- CRUD APIs for [tasks/notes/products]
- Input validation and centralized error handling
- Versioned API (`/api/v1/...`)
- Protected React dashboard with success/error feedback
- API docs via [Swagger/Postman]

## Tech Stack
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT
**Frontend:** React, Axios

## Project Structure
```
├── backend/
│   ├── controllers/   # API logic
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API endpoints
│   ├── middleware/    # JWT & role checks
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── pages/     # Login, Register, Dashboard
        └── services/  # Axios API calls
```

## Getting Started
```bash
# Backend
cd backend
npm install
cp .env.example .env   # set MONGO_URI and JWT_SECRET
npm run dev

# Frontend
cd frontend
npm install
npm start
```

## API Endpoints
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/v1/auth/register | Public | Register a user |
| POST | /api/v1/auth/login | Public | Login, returns JWT |
| GET | /api/v1/[items] | User | List items |
| POST | /api/v1/[items] | User | Create item |
| DELETE | /api/v1/[items]/:id | Admin | Delete any item |
