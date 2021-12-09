import { Request, Response } from "express";
import updateStudent from "./queries/updateStudent";

export default async function editStudentClass(
    req: Request,
    res: Response
) {
    try {
        if (
            req.body.id === '' ||
            req.body.turmaId === ''
        ) {
            res.status(400).send({
                message: "Nenhum dos campos podem estar em branco"
            })
        }

        await updateStudent(
            req.body.id,
            req.body.turmaId
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