
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

//     CLASSE DE TURMA

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

//     CLASSE DE DOCENTES

export enum Especialidades {
    JS = "JS",
    CSS = "CSS",
    REACT = "React",
    TYPESCRIPT = "Typescript",
    POO = "Programação Orientada a Objetos",
}

export class Docente {

    constructor(
        public id: string,
        public nome: Docentes[],
        public email: string,
        public data_nasc: string, 
        public turma_id: string, 
        public especialidades: Especialidades[]
    ) {
    
            console.log(`O professor ${this.nome} foi criada com sucesso!`)
    
    }

    getDocenteId(): string{
        return this.id
    }

    getDocenteName(): Docentes[] {
        return this.nome
    }

    getDocenteEmail(): string{
        return this.email
    }

    getDocenteDateBirth(): string{
        return this.data_nasc
    }

    getDocenteClass(): string{
        return this.turma_id
    }

    getDocenteEspecialidades(): Especialidades[]{
        return this.especialidades
    }
}