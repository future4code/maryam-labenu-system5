import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function getDocente (req: Request, res: Response): Promise<void> {
    try {
        const professores = await connection("DOCENTE")

        if (professores.length === 0) {
            throw new Error("Não há professores ativos no momento")
        };

        res.status(200).send(professores);

    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
};