import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function buscarTurmas(req: Request, res: Response): Promise<void> {
    try {
        const turmas = await connection("TURMA")

        if (turmas.length === 0) {
            throw new Error("Não há turmas ativas no momento")
        };

        res.status(200).send(turmas);

    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message);
    }
};