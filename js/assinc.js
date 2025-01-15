// callback

// console.log("1")

// setTimeout(() => {console.log("5")} ,2000)
// // vai ser executado 2 segundos depois
// console.log("2")
// console.log("3")
// console.log("4")

//promises

// let promessa = Promise.resolve(5);

// console.log(promessa) // retorna resolvida como um obj
// promessa.then((value) => {console.log(`O valor é ${value}`)})
// .then((value) => {value + 5});

//then catch

// let p = Promise.resolve(new Error("Não deu certo"))

// console.log("asdf")

// p.then(value => console.log(value)) //falha
// .catch(reason => console.log("falhou "+ reason))


//reject promise

// function verificarNumero(num){
//     return new Promise((resolve, reject) => {
//         if(num === 2){
//             resolve(console.log(`o numero é ${num}`))
//         } else {
//             reject(new Error("falhou"))
//         }
//     })
// }


// .all  faz uma array de variaveis assincronas e respeira a ordem e o tempo para resolver


//async function

// async function somar(a,b){
//     return a + b
// }

// soamr(2,4).then(value => console.log(value))


// await 
//espera a promise ser resolvida