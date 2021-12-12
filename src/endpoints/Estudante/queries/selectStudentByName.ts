import { connection } from "../../../data/connection";

export default async function selectStudentByName(
    nome: string
) {
    const result = await connection('ESTUDANTE')
        .select('*')
        .where({ nome })

    return result[0]
}