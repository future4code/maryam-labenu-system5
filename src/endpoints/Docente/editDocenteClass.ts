import { Request, Response } from "express";
import updateDocente from "./queries/updateDocente";

export default async function editDocenteClass(
    req: Request,
    res: Response
) {
    try {
        if (
                !req.body.id ||
                !req.body.turmaId
        ) {
            res.status(400).send({
                message: "Campos incompletos! Insira os dados de id e turmaId"
            })
        }

        await updateDocente(
            req.body.id,
            req.body.turmaId
        )

        res.status(200).send({
            message: "Turma modificada com sucesso!"
        })


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}