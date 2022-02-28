const express = require('express');

const app = express();

// porta que o servidor vai ficar escutando e uma funcao do que ele irá fazer:
app.listen(3000, ()=>console.log("servidor rodando na porta 3000"));

// req: requisicao
// res: response
app.get("/", (req, res)=>res.send("servidor rodando, tudo ok"));
app.get("/atendimentos", (req, res)=>res.send("voce está na rota de atendimentos e está realizando um GET"));
