let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

// console.log(carro.portas); // acessa o valor de portas no objeto carro

delete carro.portas; // deleta portas

// console.log(carro.portas); //retorna undefined

carro.tetoSolar = true; // add tetoSolar com valor true

let adicionais = {
    arcondicionado: true,
}

Object.assign(carro, adicionais) //copia os dados do segundo obj no primeiro

let objA = {
    chave1: 1,
    cahve2: 2
}

Object.keys(objA)
// retorna (chave1, chave2)

//// mutação

let pessoa = {
    nome:"joao"
}

let pessoa2 = pessoa

pessoa2.nome = "Pedro" 
// altera de ambos, tanto pessoa quanto pessoa2

pessoa.nome = "Matheus" 
// altera de ambos, tanto pessoa quanto pessoa2


//      DESTRUCTURING OBJ
//desestruturar um obj em variaveis

let car = {
    rodas: 4,
    motor: 1.2
}

const {rodas: vRodas, motor: vMotor} = car;
//vai espelhar os valores contidos em car
// console.log(vRodas, vMotor) 