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


class Livro {
    constructor(titulo, autor, disponivel){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = disponivel
    }

    emprestar(){
        if(this.disponivel){
            this.disponivel = false;
            return "Disponível"
        }else {
            return "Indisponível"
        }
    }

    devolver(){
        if(!this.disponivel){
        this.disponivel = true;
        return "Disponível"
        }
    }
    
        
    consultarDisponibilidade(){
        return this.disponivel? "O livro já está disponível" : "O livro não está disponível para empréstimo."
    }    
    
}

class Livro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = Boolean
    }

    emprestar(){
        if(this.disponivel){
            this.disponivel = false;
            return "Disponível"
        }else {
            return "O livro não está disponível para empréstimo."
        }
    }

    devolver(){
        if(this.disponivel){
            return "O livro já está disponível."
        }else {
        this.disponivel = true;
        return "Disponível"
    }
        
    }
    
        
    consultarDisponibilidade(){
        return this.disponivel? "Disponível" : "Indisponível"
    }    
    
}