import { Router } from 'express';

const songRoute = Router();

songRoute.get('/', (req, res) => {
  res.send('Song route with GET method');
});

export default songRoute;