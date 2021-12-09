import { connection } from "../../../connection";

export default async function inserStudent(
    id: string,
    nome: string,
    email: string,
    dataNasc: string,
    turmaId: string
) {
    await connection.insert({
        id,
        nome,
        email,
        data_nasc: dataNasc,
        turma_id: turmaId
    }).into('ESTUDANTE')
}