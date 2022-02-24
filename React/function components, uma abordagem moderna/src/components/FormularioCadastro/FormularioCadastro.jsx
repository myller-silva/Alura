import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import { useState } from "react";


function FormularioCadastro( {aoEnviar, validarCpf} ) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes , setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState( { cpf:{ invalido:false, texto:"" } });
  
  return (
    <form onSubmit = {(e)=>{
      e.preventDefault();
      aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
    }}> 
      <TextField
        value={nome}
        onChange={(e)=>{
          setNome(e.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(e)=>{
          setSobrenome(e.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(e)=>{
          setCpf( e.target.value );
        }}       
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        error={erros.cpf.invalido}
        helperText={erros.cpf.texto}
        onBlur={(event)=>{
          const ehValido = validarCpf(event.target.value);
          setErros({cpf: ehValido});
        }}
      />
      
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes" 
            checked = {promocoes}
            onChange={(e)=>{setPromocoes(!promocoes)}}
            color="primary" 
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch 
            name="novidades" 
            checked={novidades}
            onChange={()=>{setNovidades(!novidades)}}
            color="primary" 
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
