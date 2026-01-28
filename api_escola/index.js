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
    const { id, nome, ra } = req.body;

    try {

        await conexao.insert({ nome, ra }).into("alunos")

        res.send("aluno cadastrado com sucesso");
    } catch (error) {
        res.send("falha ao cadastrar aluno");
    }


});

app.get("/listar", async (req, res) => {
    await conexao.select().table("alunos")
        .then((data) => {


            res.send(data)
        }).catch((error) => {

            console.log(error)
        })

});

app.put("/atualizar/:id", async (request, response) => {
    
    try{
        const { id } = request.params;
        const{ nome, ra, status } = request.body    
        
        response.send({id, nome, ra, status});

    } catch(error){
        request.send("falha na atualização")
    }
    
   
});

app.delete("/delete:id", (res, req) => {

})


app.listen(8080, () => {
    console.log("ta rodando")
}); 