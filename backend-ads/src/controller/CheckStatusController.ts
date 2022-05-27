import { Request, Response } from 'express';

class CheckStatusController {
    index(req: Request, res: Response) {
        return res.send("It's works 🔥");
    }
}

export default new CheckStatusController();