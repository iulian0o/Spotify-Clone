import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send('User route with GET method');
});

export default userRouter;