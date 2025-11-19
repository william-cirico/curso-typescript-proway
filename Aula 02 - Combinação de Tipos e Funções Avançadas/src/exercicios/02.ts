/* 
2) Função como tipo:**
Crie um tipo `Operacao` que representa uma função que recebe diversos números e retorna um número.
Crie duas funções `subtrair` e `dividir` que usam esse tipo.
*/

type Operacao = (...numeros: number[]) => number;

const subtrair: Operacao = (...numeros) => {
    return numeros.reduce((acc, numero) => acc - numero);
}

console.log(subtrair(10, 5, 2));

const dividir: Operacao = (...numeros) => {
    return numeros.reduce((acc, numero) => acc / numero);
}

console.log(dividir(10, 2));