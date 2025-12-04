const express = require("express");

const app = express();

app.use(express.json());

let carros = [{ id: 1, cor: "branco", modelo: "celta", ano: 2008 }];

var seq = 1;

app.get("/carros", (resquest, response) => {

    response.status(200).send(carros)
});

app.post("/carros", (request, response) => {

    const { cor, modelo, ano } = request.body;

    seq++;

    carros.push({ id: seq, cor, modelo, ano });

    response.status(200).send(carros);
});

app.put("/carros", (request, response) => {
    const { id, cor, modelo, ano } = request.body;

    const procuraOCarro = carros.filter(item => item.id == id);
    
    procuraOCarro[0].cor = cor;
    procuraOCarro[0].modelo = modelo;
    procuraOCarro[0].ano = ano;


    response.status(200).send(procuraOCarro);
})

app.listen(8080, () => {
    console.log("SLA")
});

app.get("/alunos", (request, response) => {
    response.status(200).send("pf");
});