# Spotify+

A full-stack Spotify clone built with **React + Typescript** on the frontend and **Express + MongoDB** on the backend, using **Clerk** for authentification. This project is currently in a work progress.

# Tech Stack

**Backend**
- Express 5
- MongoDB with Mongoose
- Clerk (`@clerk/express`) for auth middleware and route protection
- *Cloudinary* for media storage (album covers, audio files)
- express-fileupload for handling uploads
- Socket.io, included for real-time features (not used yet)

### Progress So Far

### Backend
- Project setup with Express and environment configuration
- MongoDB connection with Mongoose models for `User`, `Song`, `Album`, and `Message`
- Signup logic tied to Clerk authentication
- Protected route middleware to guard authenticated endpoints
- Admin routes & controllers
- Album routes & controllers
- Song routes & controllers
- User routes & controllers
- A stats route has also been started

## What's Not Built Yet
**Frontend**

---
*This README reflects progress only — setup and usage instructions will be added once the app is closer to complete.*
