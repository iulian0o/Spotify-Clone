import { Router } from 'express';

const authRoute = Router();

authRoute.get('/', (req, res) => {
  res.send('Auth route with GET method');
});

export default authRoute;