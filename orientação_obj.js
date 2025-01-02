const cachorro = {
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

// cachorro.setRaca("pastor alemão")
// cachorro.getRaca()


//Prototypes

const pessoa = {
    maos: 2,

}

Object.getPrototypeOf(pessoa); // retorna por defaut "Object"
Object.getPrototypeOf(pessoa) === Object.prototype;
// consegue usar funçoes do pai nos objetos filhos. todos os objetos são originados do "Object"


const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty("maos"));