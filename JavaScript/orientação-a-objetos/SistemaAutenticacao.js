/*
    Ser autenticavel significa ter o método autenticar

    Ducky Type
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {

        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        // Verficar se a string existe dentro do objeto autenticavel e se é uma instância de uma função
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function 
    }
}