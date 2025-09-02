const express = require("express") 

const app = express();

app.use(express.json());

const pessoas = [
    {id : 1, nome: "louco", telefone: "46999356435"}];

app.get("/pessoas",(request,response)=>{
    return response.send(pessoas)
})


app.post("/pessoas", (request,response)=>{
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;

    pessoas.push({
        nome,
        telefone,
        status
    });
    return response.send(pessoas)
});


app.get("/pessoas/:nome",(request,response) =>{
    const nome = request.params.nome;

    return response.send(nome);
});
app.listen(8080,()=>{
    console.log("o server esta rodando na porta 8080");
});
