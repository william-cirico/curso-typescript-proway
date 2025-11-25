/*
Crie uma função que simula uma requisição que falha às vezes:

```ts
function requisicaoInstavel(): Promise<string> {
  // 50% de chance de falhar
}
```

Depois crie:

```ts
async function requisicaoComRetry(tentativas: number): Promise<string> {
  // Tenta chamar requisicaoInstavel até 'tentativas' vezes
  // Se estourar o número de tentativas, lança erro
}
*/
function requisicaoInstavel(): Promise<string> {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            resolve("Sucesso!");
        } else {
            reject(new Error("Falha na requisição"));
        }
    });
}

async function requisicaoComRetry(tentativas: number): Promise<string> {
    let erro: unknown;
    
    for (let i = 0; i < tentativas; i++) {
        try {
            return await requisicaoInstavel();
        } catch (error) {
            erro = error;
            console.log(`Tentativa ${i + 1} falhou. Retentando...`);
        }
    }

    throw erro;
}

requisicaoComRetry(3)
    .then(resultado => console.log("Resultado:", resultado))
    .catch(erro => console.error("Erro:", erro.message));