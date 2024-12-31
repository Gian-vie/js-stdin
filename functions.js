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

