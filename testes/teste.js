// console.log(3 * "asd")
// console.log(typeof(3 * "asd"))

function palindrome(text){
    let invertido = text.split('');
    let original = text.split('');
    invertido.reverse()
    invertido = invertido.toString()
    original = original.toString() 
    if(original == invertido){
        return console.log("É um palindromo")
    }else {
        return console.log("Não é um palindromo")
    }
}


function calculateAverage(arr){
    let soma = 0
    if(arr.length === 0){
        return 0
    }
    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }
    return console.log(soma/arr.length)
} 
// let arrr = [4,6]
// calculateAverage(arrr)


function reverseString (text){
    let toArray = text.split("");
    let reverse = invertido.reverse()
    let fim = reverse.join("")
    return console.log(fim)
}

// reverseString('astral')

function countVowels(text){
    let vowels = 0
    let toArray = text.split("");
    for(let i = 0; i < toArray.length; i++){
        if(toArray[i] == 'a' || toArray[i] == 'e' ||toArray[i] == 'i' ||toArray[i] == 'o' ||toArray[i] == 'u' ){
            vowels++
        }
    }
    return vowels
}

function sumEvenNumbers (arr){
    let soma = 0
    if(arr.length === 0){
        return 0
    }
    for(let i = 0; i < arr.length; i++){
       if(arr[i] % 2 === 0){
        soma += arr[i]
       }
    }
    return soma
}