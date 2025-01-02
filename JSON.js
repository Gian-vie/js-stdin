//json se comporta como um objeto, tendo a necessidade de se usar aspas duplas, 
//ultilixado em comunicação com APIs, e outros serviços

//não aceita comentarios


//como é
let pessoa= {
    "nome": "Matheus",
    "idade": 28,
    "profição": "programador",
    "Hobbies": ["Video Game", "Cinema"]
}

// converter JSON para string
let pessoaTexto = JSON.stringify(pessoa)

//converter string para JSON
let pessoaJSON = JSON.parse(pessoaTexto)