import { Docentes, Especialidades } from "../../../../types";
import { connection } from "../../../connection";

export default async function inserDocente(
    id: string,
    nome: Docentes[],
    email: string,
    dataNasc: string,
    turmaId: string
    
) {
    await connection.insert({
        id,
        nome,
        email,
        data_nasc: dataNasc,
        turma_id: turmaId,
    }).into('DOCENTE')
}