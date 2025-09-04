const express = require("express")

const app = express();

app.use(express.json());

const pessoas = [
    { id: 1, nome: "louco", telefone: "46999356435" }];

var contador = 1;

app.get("/pessoas", (request, response) => {
    return response.send(pessoas)
})


app.post("/pessoas", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;

    contador++;

    pessoas.push({
        id: contador,
        nome,
        telefone,
        status
    });
    return response.send(pessoas)
});


app.get("/pessoas/:nome", (request, response) => {
    const nome = request.params.nome;

    return response.send(nome);
});

app.put("/pessoas", (request, response) => {
    const { id, nome, telefone, status } = request.body;

    console.log({ id, nome, telefone, status });

    if (id == undefined) {
        return response.send({
            mensagem:
                "o campo id é obrigatorio"
        });
    }

    const pessoa = pessoas.filter((item) => item.id == id);

    if(pessoa.length <= 0){
        return response.send({mensagem:"pessoa invalida"});
    }
  
    pessoa[0].nome = nome;
    pessoa[0].telefone = telefone;
    pessoa[0].status = status;
    return response.send({ id, nome, telefone, status });
});

app.delete("/pessoas/:id",(request,response)=>{
    const { id } = request.params;
    console.log(id);
    return response.send({status: "ok"});
});


app.listen(8080, () => {
    console.log("o server esta rodando na porta 8080");
});

