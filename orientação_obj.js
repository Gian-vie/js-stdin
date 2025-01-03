const cachorroTest1 = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuuu")
    },
    latir: function() {
        console.log("Au Au")
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

// cachorroTest1.setRaca("pastor alemão")
// cachorroTest1.getRaca()


//  PROTOTYPES

const pessoa = {
    maos: 2,

}

Object.getPrototypeOf(pessoa); // retorna por defaut "Object"
Object.getPrototypeOf(pessoa) === Object.prototype;
// consegue usar funçoes do pai nos objetos filhos. todos os objetos são originados do "Object"


const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty("maos"));

// CLASSES 

let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("Au Au")
    },
};

const labrador = Object.create(cachorro)

// labrador.latir();

labrador.raca = "Labrador";

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão";


//  CONSTRUCTOR 

function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au")
    };
    return cachorro
}

let doberman = criarCachorro("doberman", 4, "preto");
// doberman.latir();


//  INSTANCIA NEW (Mais utilizado atualmente)  

function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

//mais comum de usar com o prototype
Cachorro.prototype.uivar = function(){
    console.log("Auuuuuuuuu");
};

let husky = new cachorro("husky", 4, "cinza");

husky.uivar();

// CLASS

class CachorroClass{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir (){
        console.log("au au")
    }

}

CachorroClass.prototype.raca = "SRD";
CachorroClass.prototype.patas = 4;
