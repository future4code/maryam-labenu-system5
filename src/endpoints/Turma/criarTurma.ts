import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function criarTurma(req: Request, res: Response) {
    let errorCode = 500;

    try {
        const {nome, modulo} = req.body;

        if (!nome || !modulo) {
            errorCode = 422;
            throw new Error('Preencha os campos "nome" e "modulo"')
        };

        const novaTurma = {
            id: Date.now().toString(),
            nome,
            modulo
        };

        await connection("TURMA").insert(novaTurma);

        res.status(200).send("Turma criada com sucesso");

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}