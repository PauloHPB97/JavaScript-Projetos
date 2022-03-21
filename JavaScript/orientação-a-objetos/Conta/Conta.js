// Clase Abstrada (Nunca pode ter uma instância, mas pode ser herdada)
export class Conta {
    constructor (saldoInicial, cliente, agencia) {
        // Para impedir que um conta seja criada do tipo conta, ela só serve para dar herança, então vai lançar (throw) um novo (new) erro (Error, classe padrão do JS para criar um erro)
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente,pois essa é uma Classe Abstrada!")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente,
        this._agencia = agencia;
        
    }

    set cliente(novoValor) { // Atribuir
        // Se ele for um cliente, então atribui-se, senão não deixa
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    // Aceesor do cliente e saldo, consulta-los em qualquer momento, proteger os dados da classe, encapsular
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // Método Abstrato (Feito para ser sobrescrito pela classe children)
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato!")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}