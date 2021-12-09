
//     CLASSE DE ESTUDANTE

export class Estudante {

    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string, //será q precisa ser cammel Case?
        public turma_id: string, //será q precisa ser cammel Case?
        public hobbies: string//????
    ) {
        
    }

    getStudentId(): string{
        return this.id
    }

    getStudentName(): string{
        return this.nome
    }

    getStudentEmail(): string{
        return this.email
    }

    getStudentDateBirth(): string{
        return this.data_nasc
    }

    getStudentClass(): string{
        return this.turma_id
    }

    getStudentHobbies(): string{
        return this.hobbies
    }
}