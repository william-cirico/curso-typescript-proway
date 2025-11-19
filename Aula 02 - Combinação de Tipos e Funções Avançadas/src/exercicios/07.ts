/*
7) Union como resposta de função**  
Crie:
```ts
type Resposta = "SUCESSO" | "ERRO";
```
A função salvarDados() deve retornar "SUCESSO" 70% das vezes e "ERRO" 30% das vezes.
Execute a função 100 vezes e valide através do código a taxa de sucesso e erro das 100 execuções.
*/
type Resposta = "SUCESSO" | "ERRO";

function salvarDados(): Resposta {
    return Math.random() < 0.7 ? "SUCESSO" : "ERRO";
}

function testarSalvarDados(quantidade: number): void {
    let sucessos = 0;
    let erros = 0;    

    for (let i = 0; i < quantidade; i++) {
        const resultado = salvarDados();
        if (resultado === "SUCESSO") {
            sucessos++;
        } else {
            erros++;
        }
    }

    const taxaSucesso = (sucessos / quantidade) * 100;
    const taxaErro = (erros / quantidade) * 100;

    console.log(`Taxa de sucesso: ${taxaSucesso.toFixed(2)}`);
    console.log(`Taxa de erro: ${taxaErro.toFixed(2)}`);
}

testarSalvarDados(100);

