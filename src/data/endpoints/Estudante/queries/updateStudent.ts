import { connection } from "../../../connection";

export default async function updateStudent(
    id: string,
    turma_id: string
) {
    if (turma_id) {
        await connection.raw(`
        UPDATE ESTUDANTE
        SET turma_id = ${turma_id}
        WHERE id = ${id};
        `)
    }
}