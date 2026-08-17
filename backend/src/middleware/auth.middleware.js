import { clarkClient } from '@clerk/express';

export const protectRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res.send(401).json({ message: "Unauthorize - you must be logged in" });
  }

  next();
}

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin = process.env.ADMIN_EMAIL === currentUSer.primaryEmialAdress?.emialAdress;

    if (!isAdmin) {
      return res.send(403).json({ message: "Unauthorized - you must be an admin "});
    }

  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}