import { connection } from "../../../data/connection";

export default async function updateDocente(
    id: string,
    turmaId: string
) {
    if (turmaId) {
        await connection.raw(`
        UPDATE DOCENTE
        SET turma_id = ${turmaId}
        WHERE id = ${id};
        `)
    }
}