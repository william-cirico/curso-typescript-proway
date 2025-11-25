/*
Fila de processamento com limite de concorrência:**

Implemente:

```ts
async function processarComLimite<T>(
  itens: T[],
  handler: (item: T) => Promise<void>,
  limite: number
): Promise<void> {
  // 'limite' indica quantas promises podem rodar ao mesmo tempo
}
*/
async function processarComLimite<T>(
    itens: T[],
    handler: (item: T) => Promise<void>,
    limite: number,
): Promise<void> {
    if (limite <= 0) {
        throw new Error("Limite não pode ser negativo ou nulo");
    }

    for (let i = 0; i <= itens.length - limite; i++) {
        const lote = itens.slice(i, i + limite);

        console.log(`Processando lote ${i + 1} lote`);
        await Promise.all(lote.map(handler));
    }    
}

processarComLimite(
    [1, 2, 3], 
    async (item) => console.log(`Processando o item ${item}`), 
    2
);

