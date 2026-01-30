import express from "express";
import indexRouters from "./routers/index.routers.js";

const app = express(express.json());

app.use(indexRouters);

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080!")
});

/*quero injustiça*/