let firstName = "joe"

const email = 'Hi ' + firstName + '\nThe meeting is confirmed \nAndre' // o "\n" é equivalente a um enter
const email2 = `Hi ${firstName}
The meeting is confirmed
Andre`
// a crase remove a necessidade de uso dos + pra adicionar variaveis e do \n para dar enter


//sobre arrays

const num = [7, 8, 9];

num.push(10, 11, 12); // add no final do array

num.unshift(1, 2, 3); // add no começo do array

num.splice(3, 0, 4, 5, 6); 
// primeiro numro = "apartir de qual?", 
// segundo numero = "vai substituir?",
// demais = valores

console.log(num)