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