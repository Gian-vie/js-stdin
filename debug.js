/*   "use strict"   */
// declarado no começo do codigo
//da erro em erros da linguagem nativa.



// console.log()
//debug comum para ver no console os resultados



// debugger;
//interrompe o codigo e mostra o que está ocorendo
//igual ao debug do vs code




//tratamento de imputs por função
// function checarNumber(valor){
//     let resultado = number(valor);
//     if(number.isNaN(resultado)){
//         return null;
//     }else{
//         return resultado;
//     }
// };

//exception
// verificação para outros programadores

function saudação (text){
    if(typeof text != "string"){
        throw new Error("o parametro precisa ser uma string")
    }else {
        console.log(`Olá ${text}`)
    }
} 

