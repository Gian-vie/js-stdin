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
        console.log("au au");
    };

    get getCor(){
        return this.cor;
    }

    set setCor(cor){
        this.cor = cor;
    }

};

CachorroClass.prototype.raca = "SRD";
// CachorroClass.prototype.patas = 4;


//symbol
CachorroClass.prototype[patas] = 4;

//acessar Symbol
console.log(CachorroClass.prototype[patas]);


//get/ set  
let pastor = new CachorroClass("Pastor Alemão", "indefinido")

pastor.setCor = "marrom";


//herança

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }

};

class Coiote extends Mamifero {
    constructor(patas, cor){
        super(patas, patas);
        this.cor = cor;
    }
}


//Istastance of

/*console.log*/(new Coiote instanceof Mamifero); // true


// EXERCICIOS GERAIS

class conta{
    constructor(valor){
        this.saldo = 0 + valor;
    };

    verSaldo (){
        return this.saldo;
    };

    retirar(valor){
        if(this.saldo - valor < 0){
            return "Saldo Insuficiente";
        }
        return this.saldo -= valor;
    };
    
    depositar(valor){
        return this.saldo += valor;
    };
};


//carrinho de Ecomerse
class Carrinho {
    constructor(items, qnt, valorTotal){
        this.items = items;
        this.qnt = qnt;
        this.valorTotal = valorTotal;
    }

    addItem(item){
        let contador = 0

        for(let itemCarrinho in this.items){
            if(this.items[itemCarrinho].id == item.id) {
                this.items[itemCarrinho] += item.qnt;
                contador ++
            }
        }

        if(contador === 0){
            this.items.push(item);
        }

        this.qnt += item.qnt;
        this.valorTotal += item.preco * item.qnt;
    }

    removerItem(item){
        for(let itemCarrinho in this.items){
            if(this.items[itemCarrinho].id == item.id) {
                
                let obj = this.items[itemCarrinho];
                let index = this.items.findIndex(function(obj){ return obj.id === item.id})
                
                this.qnt -= this.items[itemCarrinho].qnt;
                this.valorTotal -= this.items[itemCarrinho].preco * this.items[itemCarrinho].qnt;
                
                this.items.splice(index, 1)

            }
        }

    }



}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "camisa",
        qnt: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "calça",
        qnt: 2,
        preco: 50
    }
], 3, 120)

//endereço
class Endereço{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado
    }

    get getRua(){
        return this.rua;
    }
    get getBairro(){
        return this.bairro;
    }
    get getCidade(){
        return this.cidade;
    }
    get getEstado(){
        return this.estado;
    }

    set setRua(Rua){
        this.rua = Rua;
    }
    set setBairro(Bairro){
        this.bairro = Bairro;
    }
    set setCidade(Cidade){
        this.cidade = Cidade;
    }
    set setEstado(Estado){
        this.estado = Estado;
    }
}


//banco e conta especial
class ContaBronze{
    constructor(saldoCorrente, saldoPoupansa, juros){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupansa = saldoPoupansa;
        this.juros = juros
    }

    verSaldoCorrente (){
        return `Saldo na conta corrente R$${this.saldoCorrente.toFixed(2)}` 
    };

    verSaldoPoupança (){
        return `Saldo na conta poupança R$${this.saldoPoupansa.toFixed(2)}` 
    };

    retirar(valor){
        if(this.saldoCorrente - valor < 0){
            return "Saldo Insuficiente";
        }
        return this.saldoCorrente -= valor;
    };
    
    depositar(valor){
        return this.saldoCorrente += valor;
    };

    correnteToPoupança(valor){
        if(this.saldoCorrente - valor < 0){
            return "Saldo Insuficiente";
        }
        this.saldoCorrente -= valor;
        this.saldoPoupansa += valor;
    }

    poupansaToCorrente(valor){
        if(this.saldoPoupansa - valor < 0){
            return "Saldo Insuficiente";
        }
        this.saldoPoupansa -= valor;
        this.saldoCorrente += valor;
    }

    jurosAnuversario(){
        this.saldoPoupansa += this.saldoPoupansa * (this.juros / 100)
    }

}

let contaBronze = new ContaBronze(100.23, 4322.322343, 3)
// console.log(contaBronze.verSaldoPoupança())

class ContaOuro extends ContaBronze{
    constructor(saldoCorrente, saldoPoupansa, juros){
        super(saldoCorrente, saldoPoupansa, juros*2)
    }
}


class WordCounter {
    constructor(){
        this.palavras = 0
    }

    countWords(text){
        let words = text.split(/\s+/)
        this.palavras = words.length
        return this.palavras
    }

}//não está funcionando


class Retangulo{
    constructor(altura,largura){
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(){
        return this.largura * this.altura;
    }

    calcularPerimetro(){
        return 2 * (this.largura + this.altura)
    }
}

class Voo {
    constructor(codigoVoo,origem,destino, assentosDisponiveis){
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    };

    reservarAssento(){
        if(this.assentosDisponiveis === 0){
            return 'Não há assentos disponíveis para reserva.';
        };
        this.assentosDisponiveis--
        return this.assentosDisponiveis
    };
    consultarAssentosDisponiveis(){
        return this.assentosDisponiveis
    }
}