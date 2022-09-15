import { Router } from "express";
import { criar_novo_usuario, ler_todos_usuario, apagar_usuario, atualizar_usuario} from "../controller/usuario.controller";

const routes =  Router()


routes.get("/usuarios", ler_todos_usuario)
routes.post("/usuario/add", criar_novo_usuario)
routes.delete("/usuario/delete/:id", apagar_usuario)
routes.put("/usuario/atualizar/:id", atualizar_usuario)


export default routes