import { Request, Response } from "express";
import inserDocente from "./Estudante/queries/insertDocente";


export default async function createDocente(
    req: Request,
    res: Response
) {
    try {
        if (
            !req.body.nome ||
            !req.body.email ||
            !req.body.dataNasc ||
            !req.body.turmaId
           
        ) {
            res
                .status(400)
                .send("Atenção! Campo incompleto")
        }

        const id: string = Date.now().toString()

        await inserDocente(
            id,
            req.body.nome,
            req.body.email,
            req.body.dataNasc,
            req.body.turmaId,
            
        )


        res
            .status(200)
            .send('Professor inserido com sucesso')


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}