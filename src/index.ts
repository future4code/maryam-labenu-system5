import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import criarTurma from "./endpoints/Turma/criarTurma";
import buscarTurmas from "./endpoints/Turma/buscarTurmas"
import mudarModulo from "./endpoints/Turma/mudarModulo";
import createStudent from "./endpoints/Estudante/createStudent";
import getStudentByName from "./endpoints/Estudante/getStudentByName";
import editStudentClass from "./endpoints/Estudante/editStudentClass";
import createDocente from "./endpoints/Docente/createDocente";
import getDocente from "./endpoints/Docente/getDocente";
import editDocenteClass from "./endpoints/Docente/editDocenteClass";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Olá, Pessoal")
})

// TURMA ENDPOINTS
app.post("/turmas", criarTurma)
app.get("/turmas", buscarTurmas)
app.put("/turmas", mudarModulo)

//ESTUDANTE ENDPOINTS
app.put("/estudante", createStudent)
app.get("/estudante/:nome", getStudentByName)
app.post("/estudante", editStudentClass)

// DOCENTE ENDPOINTS
app.put("/docente", createDocente)
app.get("/docente", getDocente)
app.post("/docente", editDocenteClass)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});