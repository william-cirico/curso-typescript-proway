// Função com parâmetro padrão
function aplicarDesconto(valor: number, desconto: number = 0.1): number {
  return valor - valor * desconto;
}

console.log(aplicarDesconto(100));
console.log(aplicarDesconto(100, 0.2));

// Função com never
function error(message: string): never {
    throw new Error(message);
}

function darErro() {
    return error("Algo deu errado!");
}

// console.log(darErro());

// Função como tipo
type Operacao = (a: number, b: number) => number;

const somar: Operacao = (a, b) => a + b;
const multiplicar: Operacao = (a, b) => a * b;

// Função que recebe outra função (callback)
function calcular(a: number, b: number, op: Operacao): number {
  return op(a, b);
}

console.log(calcular(2, 3, somar));
console.log(calcular(2, 3, multiplicar));

// Function overloading
function adicionar(a: number, b: number): number;
function adicionar(a: string, b: string): string;
function adicionar(a: any, b: any): any {
  return a + b;
}

console.log(adicionar(1, 2)); // 3
console.log(adicionar('Hello', ' World')); // "Hello World"

export {};