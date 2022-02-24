import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import {Container, Typography } from "@material-ui/core"
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if(cpf.length !== 11){
    return {invalido: true, texto: "cpf precisa ter 11 digitos",}
  }else{
    return {invalido: false, texto: "",}
  }
}

export default App;
