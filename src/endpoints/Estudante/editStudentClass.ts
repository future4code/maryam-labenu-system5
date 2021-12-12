import { Request, Response } from "express";
import updateStudent from "./queries/updateStudent";

export default async function editStudentClass(
    req: Request,
    res: Response
) {
    try {
        if (!req.body.id || !req.body.turma_id) {
            res.status(400).send({
                message: 'Nenhum dos campos podem estar em branco. Escreva o "id" e o "turma_id"'
            })
        }

        await updateStudent(
            req.body.id,
            req.body.turma_id
        )

        res.status(200).send({
            message: "Turma modificada!"
        })


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}