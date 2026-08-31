# Spotify+

A full-stack Spotify clone built with **React + Typescript** on the frontend and **Express + MongoDB** on the backend, using **Clerk** for authentification. This project is currently a work in progress.

## Tech Stack

**Frontend**
- React 19 + TypeScript, bundled with Vite
- Tailwind CSS v4 + shadcn/ui for components
- Zustand for state management (auth, player, music, chat)
- Clerk (`@clerk/react`) for authentication (Google sign-in)
- Axios for API requests
- React Router for navigation
- react-resizable-panels for the resizable layout

**Backend**
- Express 5
- MongoDB with Mongoose
- Clerk (`@clerk/express`) for auth middleware and route protection
- Cloudinary for media storage (album covers, audio files)
- express-fileupload for handling uploads
- Socket.io, included for real-time features

## Progress So Far

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

### Frontend
- Auth Provider wired up with Clerk, plus a Google sign-in button
- Auth callback page to sync the logged-in user with the backend
- Main layout with a resizable panel structure and left sidebar navigation
- Album page displaying an album's songs
- Home page with a featured section and song/album grids (with loading skeletons)
- Friends Activity component in the sidebar
- Full playback system:
  - Zustand stores for the music library and the player (`useMusicStore`, `usePlayerStore`)
  - Song playback and queue handling
  - Reusable Play Button component
  - Playback Controls component (play/pause, track navigation, etc.)

### Started, not finished
- Chat page and `useChatStore` exist as an early scaffold but aren't built out yet

## What's Not Built Yet
- Chat / messaging UI
- Search
- Playlist / library page
- Admin dashboard UI
- User profile page

---
*This README reflects progress only, setup and usage instructions will be added once the app is closer to complete.*