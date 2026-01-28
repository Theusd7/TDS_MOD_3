const express = require("express");
const knex = require("knex");

const app = express();
app.use(express.json());

const conexao = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "ESCOLA"
    }
});

 

app.post("/cadastro", async (req, res) => {
    const { nome, ra } = req.body;

    try {
        await conexao("alunos").insert({ nome, ra });
        res.send("Aluno cadastrado com sucesso");
    } catch (error) {
        res.status(500).send("Falha ao cadastrar aluno");
    }
});



app.get("/listar", async (req, res) => {
    try {
        const alunos = await conexao("alunos").select();
        res.send(alunos);
    } catch (error) {
        res.status(500).send("Erro ao listar alunos");
    }
});



app.put("/atualizar/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, ra } = req.body;

    try {
        await conexao("alunos")
            .where({ id })
            .update({ nome, ra });

        res.send("Aluno atualizado com sucesso");
    } catch (error) {
        res.status(500).send("Falha na atualização");
    }
});



app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await conexao("alunos")
            .where({ id })
            .del();

        res.send("Aluno deletado com sucesso");
    } catch (error) {
        res.status(500).send("Erro ao deletar aluno");
    }
});


app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
