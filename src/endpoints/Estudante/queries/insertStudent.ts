import { connection } from "../../../data/connection";

export default async function inserStudent(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
) {
    await connection.insert({
        id,
        nome,
        email,
        data_nasc,
        turma_id
    }).into('ESTUDANTE')
}