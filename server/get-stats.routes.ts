import { Request, Response } from 'express';
import { STATS } from './data';



export function getAllStats(req: Request, res: Response) {
    setTimeout(() => {

        res.status(200).json({ payload: Object.values(STATS) });

    }, 400);
}