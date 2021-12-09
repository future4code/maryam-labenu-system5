import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import criarTurma from "./endpoints/turmas/criarTurma";
import buscarTurmas from "./endpoints/turmas/buscarTurmas"
import mudarModulo from "./endpoints/turmas/mudarModulo";


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


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});