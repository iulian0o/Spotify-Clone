import { Router } from 'express';
import { createSong, deleteSong, createAlbum, deleteAlbum, checkAdmin } from '../controllers/admin.controller.js'
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get("/check", checkAdmin);

router.use(protectRoute, requireAdmin);

router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);

router.post('/songs', createAlbum);
router.delete('/songs/:id', deleteAlbum);

export default router;