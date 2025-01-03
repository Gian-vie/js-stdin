class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis){
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

let vooo = new Voo( 101, "canada", "algum lugar", 3 )

console.log(vooo)
console.log(vooo.consultarAssentosDisponiveis())
console.log(vooo.reservarAssento())
console.log(vooo.reservarAssento())
console.log(vooo.reservarAssento())
console.log(vooo.reservarAssento())