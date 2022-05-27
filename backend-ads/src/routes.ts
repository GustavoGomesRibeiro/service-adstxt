import { Router } from 'express';
import CheckStatusController from './controller/CheckStatusController';
import CreateAdsTxtController from './controller/CreateAdsTxtController';


const router = Router();

router.get('/health', CheckStatusController.index);
router.get('/ads', CreateAdsTxtController.index);

router.post('/ads', CreateAdsTxtController.store);

export default router;