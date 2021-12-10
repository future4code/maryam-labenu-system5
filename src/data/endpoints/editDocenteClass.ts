import { Request, Response } from "express";
import updateDocente from "./Estudante/queries/updateDocente";

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
                message: "Campos incompletos!"
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