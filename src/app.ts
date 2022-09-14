import { Express } from "express";
import express from "express"
import routes from "./routes/router";

export const app: Express = express()

app.use(express.json())
app.use(routes)
app.listen(8000, () => console.log("servidor ativo na porta :8000"))
