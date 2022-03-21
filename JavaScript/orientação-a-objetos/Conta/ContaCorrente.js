import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ // A classe ContaCorretnte através do extends herda tudo da classe Conta

    static numeroDeContas = 0; // static para fazer com que todas as contas conrrentes, sejam contabilizadas

    constructor(cliente,agencia) {
        super(0, cliente, agencia); // Como está dentro do método "constructor", ele irá referenciar, nesse caso, o constructor da classe Conta (saldoInicial, clinte, agencia). Ele também chama métodos da classe Pai (super.teste();)
        ContaCorrente.numeroDeContas += 1;
    }

    // Sobrescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}