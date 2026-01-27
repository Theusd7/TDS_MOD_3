const express = require("express");

const app = express();


app.listen(8000, () => {
    console.log("oooooo potencia")
});

app.get("/buscar", (resquest, response) => {
    response.send("da me um grââ oq? um graâ")
});

app.post("/cadastrar", (req, res) => {
    const [ nome, ra ] = req.body;
    response.send({ nome, ra });
})