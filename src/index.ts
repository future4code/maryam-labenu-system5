import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import criarTurma from "./endpoints/turmas/criarTurma";
import buscarTurmas from "./endpoints/turmas/buscarTurmas"
import mudarModulo from "./endpoints/turmas/mudarModulo";
import createStudent from "./data/endpoints/Estudante/createStudent";
import getStudentByName from "./data/endpoints/Estudante/getStudentByName";
import editStudentClass from "./data/endpoints/Estudante/editStudentClass";
import createDocente from "./data/endpoints/createDocente";
import getDocente from "./data/endpoints/getDocente";
import editDocenteClass from "./data/endpoints/editDocenteClass";


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
app.put("/student", createStudent)
app.get("/student/:nome", getStudentByName)
app.post("/student/edit", editStudentClass)

// DOCENTE ENDPOINTS
app.put("/docente", createDocente)
app.get("/docentes", getDocente)
app.post("/docente/edit/:id", editDocenteClass)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});