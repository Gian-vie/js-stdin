//sobre arrays

const num = [7, 8, 9];

num.push(10, 11, 12); // add no final do array

num.unshift(1, 2, 3); // add no começo do array

num.splice(3, 0, 4, 5, 6); 
// primeiro numro = "apartir de qual?", 
// segundo numero = "vai substituir?",
// demais = valores

let num1 = num

num.pop()// remove o ultimo

num.splice(2, 3) //vai remover 3 numeros apartir do indice 2

num.length = 0 // remove todos os item do array

const numero = [1, 2, 3]
const letra = ['a', 'b', 'c']

const all = numero.concat(letra) // concatena numeros e letras 
const half = all.slice(3, 5) // pega parcialmente os valores de 3 a 5 (3 e 4)

let clientes = ('Andre', 'Maria', 'jose');

clientes.sort()// ordena em ordem alfabetica

clientes.reverse() //inverte a ordem do array



const checPositives = num.every(value => value >= 0) //verifica se todos os valores são positivos

const mostraPositives = num.filter(value => value >= 0) //retorna apenas os valores positivos 


// ADIÇÃO E REMOÇÃO DE ELEMENTOS NO ARRAY

/* 
--> NO FINAL DO ARRAY
adicionar:
array.push(elemento)
remover:
array.pop()

--> NO COMEÇO DO ARRAY
adicionar:
array.unshift(elemento)
remover:
array.shift()
*/


// .forEach faz uma varedura como um loop
//       onde o element representa o indice
clientes.forEach(element => {
    console.log(`o nome do cliente é ${element}`)
});

clientes.includes("Andre")// retorna true ou false 


//      DESTRUCTURING arrays
//desestruturar um array em variaveis
let numeros1 = [1,2,3,4,5]

const[num2,num3,num4,num5,num6,] = numeros1


//MANIPULAÇÂO DE STRINGS <<<<<<<<<<------------------


//      .TRIM
let nomeCliente = '     /n     nome '
//para remover qualquer caractere que 
// n é uma string como espaço, /n, /^, etc
let nomeClienteCorigido = nomeCliente.trim()


//      .PEDSTART
let milAoContrario = '1';
// (quantos elementos deve ter?, 'preencher de?')
milAoContrario.pedstart(4, '0'); 


//      .SPLIT
//torna a string em array
let frase = "olá mundo bom dia"

let arrayDeString = frase.split(" "); 
//vai separar pelo q tiver entre as aspas, no caso o espaço

//      .JOIN
//torna a array em string
let fraseInt = arrayDeString.join(" ") 
//vai juntar, separando por espaço os elementos da array

//       .REPEAT
frase.repeat(10);// vai repetir 10 vezes
