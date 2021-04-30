import { Request, Response } from 'express';
import { STATS } from './game-stats.data';



export function getAllStats(req: Request, res: Response) {
    setTimeout(() => {

        const response = [];
        for(let i = 0; i < 6; i++){
            response.push(...STATS);
        }

        res.status(200).json({ payload: Object.values(response) });

    }, 400);
}