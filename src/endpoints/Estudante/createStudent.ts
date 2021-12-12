import { Request, Response } from "express";
import inserStudent from "./queries/insertStudent";


export default async function createStudent(
    req: Request,
    res: Response
) {
    try {
        if (
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nasc ||
            !req.body.turma_id
        ) {
            res
                .status(400)
                .send('Preencha os campos "nome", "email", "data_nasc" e "turma_id"')
        }

        const id: string = Date.now().toString()

        await inserStudent(
            id,
            req.body.nome,
            req.body.email,
            req.body.data_nasc,
            req.body.turma_id
        )


        res
            .status(200)
            .send('Estudante criado com sucesso')


    } catch (error) {
        res.status(400).send({
            message: error
        })
    }
}