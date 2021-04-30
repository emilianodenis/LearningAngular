import { GameStat } from "src/app/model/game-stat";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    stats: GameStat[];
}