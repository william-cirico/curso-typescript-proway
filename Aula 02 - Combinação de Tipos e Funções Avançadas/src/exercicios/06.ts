/*
6) Union com type guards em array**  
Crie:
```ts
type Item = string | number;
```
Dado um array `itens: Item[]`, escreva a função `somarNumeros(itens)` que:
- Soma apenas os números
- Ignora strings
*/
type Item = string | number;


function isNumber(valor: unknown): valor is number {
    return typeof valor === "number";
}

function somarNumeros(itens: Item[]): number {
    let soma = 0;
    
    for (const item of itens) {
        if (isNumber(item)) soma += item;
    }
    
    return soma;
}

const itens: Item[] = ["Oi", 1, "Teste", 2];

console.log(somarNumeros(itens));