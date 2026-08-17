import { Router } from 'express';

const albumRoute = Router();

albumRoute.get('/', (req, res) => {
  res.send('Album router with GET method');
});

export default albumRoute;