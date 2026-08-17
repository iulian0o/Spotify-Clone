import { Router } from 'express';

const statsRoute = Router();

statsRoute.get('/', (req, res) => {
  res.send('Stats route with GET method');
});

export default statsRoute;