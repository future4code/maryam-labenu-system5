
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

//     CLASSE DE ESTUDANTE

export enum Docentes {
    CHIJO = "Letícia Chijo",
    AMANDA = "Amanda Rangel",
    YUZO = "Yuzo",
    JOAO = "João Alves",
    MATEUS = "Mateus Gesualdo",
    INDIO = "Índio"
}

export class Turma {
    
    constructor (
        private id: string,
        private nome: string,
        private docentes: Docentes[],
        private modulo: number = 10
    ) {
        console.log(`A turma ${this.nome} foi criada com sucesso!`)
    };

    getId(): string {
        return this.id
    };

    getNome(): string {
        return this.nome
    };

    getDocentes(): Docentes[] {
        return this.docentes
    };

    getModulo(): number {
        return this.modulo
    };
}