import { Request, Response } from "express";
import selectStudentByName from "./queries/selectStudentByName";

export default async function getStudentByName(
    req: Request,
    res: Response
) {
    try {

        const estudante = await selectStudentByName(req.params.nome)

        if (!estudante) {
            res.status(404).send({
                message: "Usuário não encontrado"
            })
        }

        res.status(200).send({
            id: estudante.id,
            nome: estudante.nome
        })


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}