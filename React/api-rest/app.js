const express = require('express');
const app = express();

// request, response e proximo metodo
app.use((req, res, next)=>{
  res.status(200).send({
    mensagem: "ok, deu certo"
  });
});

module.exports = app;