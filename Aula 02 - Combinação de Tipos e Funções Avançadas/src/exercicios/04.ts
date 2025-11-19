/*
Callback em lista de números:**
Crie uma função `aplicarEmNumeros(valores: number[], fn: (n: number) => number): number[]` que aplica a função a cada número e retorna um novo array.

Exemplo esperado:
```ts
aplicarEmNumeros([1, 2, 3], n => n * 2)
*/
function aplicarEmNumeros(numeros: number[], fn: (numero: number) => number): number[] {
    return numeros.map(numero => fn(numero));
}

console.log(aplicarEmNumeros([1, 2, 3], n => n * 2));