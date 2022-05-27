import { Request, Response } from 'express'
import { Ads } from '../app/models/Ads';
import { AppDataSource } from '../database/connect';

class CreateAdsTxtController {
    async index(req: Request, res: Response) {
        const getAdsTxtFromDataBase = AppDataSource.getRepository(Ads);

        const listAdstxtToUser = await getAdsTxtFromDataBase.find();

        return res.json(listAdstxtToUser);
    }

    async store(req: Request, res: Response){
        const getAdsTxtFromDataBase = AppDataSource.getRepository(Ads);

        const { adsTxt } = req.body;

        const createAdsTxt = await getAdsTxtFromDataBase.save({
            adsTxt
        })

        return res.json({ createAdsTxt });
    }
}

export default new CreateAdsTxtController();