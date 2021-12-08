import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS TURMA (
         id: VARCHAR(255) PRIMARY KEY,
         nome: VARCHAR(255) NOT NULL,
         modulo: VARCHAR(255) DEFAULT 0,
      );

      CREATE TABLE IF NOT EXISTS ESTUDANTE (
        id: VARCHAR(255) PRIMARY KEY,
        nome: VARCHAR(255) NOT NULL,
        email: VARCHAR(255) NOT NULL UNIQUE,
        data_nasc: DATE NOT NULL,
        turma_id: VARCHAR(255) FOREING KEY NOT NULL
        );

     CREATE TABLE IF NOT EXISTS ESTUDANTE_HOBBY (
        id: VARCHAR(255) PRIMARY KEY,
        estudante_id: VARCHAR(255) FOREING KEY NOT NULL 
        hobby_id: VARCHAR(255) FOREING KEY NOT NULL  
     );

     CREATE TABLE IF NOT EXISTS HOBBY (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE,
     );

     CREATE TABLE IF NOT EXISTS DOCENTE (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email: VARCHAR(255) NOT NULL UNIQUE,
        data_nasc: DATE NOT NULL,
        turma_id: VARCHAR(255) FOREING KEY NOT NULL
     );

     CREATE TABLE IF NOT EXISTS DOCENTE_ESPECIALIDADE (
        id: VARCHAR(255) PRIMARY KEY,
        docente_id: VARCHAR(255) FOREING KEY NOT NULL 
        especialidade_id: VARCHAR(255) FOREING KEY NOT NULL    
     );

     CREATE TABLE IF NOT EXISTS ESPECIALIDADE (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE,
     );


   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)