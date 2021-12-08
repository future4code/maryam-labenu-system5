
//     CLASSE DE ESTUDANTE

export class Estudante {
    private id: string;
    private nome: string;
    private email: string;
    private data_nasc: string; //será q precisa ser cammel Case?
    private turma_id: string; //será q precisa ser cammel Case?
    private hobbies: string; //????

    constructor(
        id: string,
        nome: string,
        email: string,
        data_nasc: string, //será q precisa ser cammel Case?
        turma_id: string, //será q precisa ser cammel Case?
        hobbies: string//????
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
        this.hobbies = hobbies
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