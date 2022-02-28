

var objs = [
  {
    nome: "matheus",
    idade: 25,
    trabalhando: false,
    hobbies: ["jogar"],
    faculdade: {
      semestre: null,
      estagio: null,
      bolsa: null,
      ferias: null,
      auxEmergencial: null
    }
  },
  {
    nome: "josias",
    idade: 20,
    trabalhando: false,
    hobbies: ["correr"],
    faculdade: {
      semestre: null,
      estagio: null,
      bolsa: null,
      ferias: null,
      auxEmergencial: null
    }
  },
]

// JSON
// converter objeto para json:
const jsonData = JSON.stringify(objs);
// converter json para objeto:
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(objs);
console.log(objData===objs);


objData.map((pessoa)=>{
  console.log(pessoa.nome, pessoa.idade);
  // console.log(pessoa);
});
