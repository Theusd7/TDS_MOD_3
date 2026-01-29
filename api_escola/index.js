const express = require("express");
const knex = require("knex");

const db = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "admin",
        database: "ESCOLA"
    }
});

const app = express();

app.use(express.json());

app.get("/buscar", async (request, response) => {

    const data = await db("ALUNOS").select();

    response.send(data);
});

app.post("/cadastrar", async (request, response) => {
    const { nome, ra } = request.body;

    const data = await db("ALUNOS").insert({ nome, ra });

    if (data.length > 0) {
        response.send({ msg: "Aluno cadastrado com sucesso!" });
    } else {
        response.send({ msg: "Erro ao cadastrar um novo aluno!" });
    }

});

app.put("/atualizar", (request, response) => { 
    const { id } = request.params;
    const { nome, ra, status } = request.body

    const data = db("alunos").update({ nome, ra, status}).where({ id});
    if(data == 1 ) {
        response.send({ msg : "aluno atualizado"});
    } else {
        response.send({ msg : "erro"});
    }


});

app.delete("/deletar", (request, response) => {
    const { id } = request.params;
   const data = db("ALUNOS").where({ id}).del();

   if (data == 1) {
    response.send({ msg : "aluno deletado com sucesso!"});
   } else {
    response.send({ msg : "erro ao deletar aluno!"});
   }
   response.send({ msg : "aluno deletado"});
});


app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});