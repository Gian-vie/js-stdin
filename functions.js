//bom e velho hellowhorld

function Hello(){
    console.log("Hello Whorld");
};

function imprimeIdade(idade){
    console.log(`você tem ${idade} anos`);
};

function soma(num1, num2){
    return num1 + num2;
};

function retornaRandom(num){
    return Math.round(Math.random() * num);
};

function entrarAutoescola(idade){
    if(idade >= 18){
        console.log("Pode se matricular na auto escola");
    }else{
        console.log("Não pode se matricular na auto escola");
    };
};

function tipoDoDado(dado){
    if (typeof dado === 'string'){
        console.log("Esse dado é uma string");
    }else if (typeof dado === 'number'){
        console.log("Esse dado é um number");
    }else if (typeof dado === 'boolean'){
        console.log("Esse dado é um boolean");
    };
};

function numeroPositivo(numNegativo){
    return Math.abs(numNegativo);
};

function limiteCaracteres(texto){
    if(texto.length > 10){
        console.log("texto muito longo");
    }else {
        console.log("texto dentro do limite");
    };
};

function potencia(a, b){
    // return Math.pow(a, b);
    return a ** b
}

function paresEm(num){
    for(let i = num; i > 0; i--){
        if(i % 2 === 0){
            console.log(i)
        }
    }
};


function isPalindrome(text){
    let invertido = text.split('');
    let original = text.split('');
    invertido.reverse()
    invertido = invertido.toString()
    original = original.toString() 
    if(original == invertido){
        return true
    }else {
        return false
    }
};


function calculateAverage(arr){
    let soma = 0
    if(arr.length === 0){
        return 0
    }
    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }
    let average = total/arr.length
    return average
}


function reverseString (text){
    let invertido = text.split("");
    let reverse = invertido.reverse()
    let fim = reverse.join("")
    return fim
}

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


//      REST (...)
//faz com que a função considere todos os elementos que está recebendo
function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}
// exemplo
// imprimirNumeros(4,3,6,2,7,6,2,6,3,5,4,8)
