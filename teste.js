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

    // retirar(valor){
    //     if(saldo - valor < 0){
    //         return "Saldo Insuficiente";
    //     }
    //     return this.saldo -= valor;
    // };
    
    // depositar(valor){
    //     return this.saldo += valor;
    // };
}

let contaBronze = new ContaBronze(100.23, 4322.322343, 3)
console.log(contaBronze.verSaldoPoupança())