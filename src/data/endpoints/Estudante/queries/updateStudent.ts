import { connection } from "../../../connection";

export default async function updateStudent(
    id: string,
    turmaId: string
) {
    if (turmaId) {
        await connection.raw(`
        UPDATE ESTUDANTE
        SET turma_id = ${turmaId}
        WHERE id = ${id};
        `)
    }
}