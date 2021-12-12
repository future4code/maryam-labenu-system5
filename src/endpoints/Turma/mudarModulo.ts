import { Request, Response } from "express";
import { connection } from "../../data/connection";

export default async function mudarModulo(req: Request, res: Response) {
    let errorCode = 500;

    try {
        const {id, modulo} = req.body;

        if (!id || !modulo) {
            errorCode = 422;
            throw new Error('Preencha os campos "id" e "modulo"')
        };

        await connection.raw(`
            UPDATE TURMA
            SET modulo = ${modulo}
            WHERE id = ${id};
        `)

        res.status(200).send("Módulo da turma atualizado com sucesso");

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}