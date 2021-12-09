import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createStudent from "./data/endpoints/Estudante/createStudent";
import getStudentByName from "./data/endpoints/Estudante/getStudentByName";
import editStudentClass from "./data/endpoints/Estudante/editStudentClass";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Olá, Pessoal")
})

//endpoints de estudante
app.put("/student", createStudent)
app.get("/student/:nome", getStudentByName)
app.post("/student/edit/:id", editStudentClass)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});