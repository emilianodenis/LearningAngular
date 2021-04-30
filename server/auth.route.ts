import { Request, Response } from 'express';
import { USERS } from './user.data';


export function valiateUser(req: Request, res: Response) {
    setTimeout(() => {

        const { email, password } = req.body;

        const userIdx = USERS.findIndex(usr => usr.email == email && usr.password == password);

        if (userIdx < 0) {
            res.sendStatus(403);
        }

        res.status(200).json(USERS[userIdx]);

    }, 400);
}