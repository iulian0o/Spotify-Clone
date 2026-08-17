import { Router } from 'express';

const adminRoute = Router();

adminRoute.get('/', (req, res) => {
  res.send('Admin route with GET method')
});

export default adminRoute;