import { User } from '../models/user.model.js'; 

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // Check if user exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      // signup

      await User.create({
        clerkid: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl
      })
    }

    res.status(200).json(({ success: true }));
  } catch (error) {
    console.log("Error in Auth callback", error);
    next(error);
  }
}