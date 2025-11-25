/*
Função genérica para buscar por campo:**
Crie: 
```ts
function filtrarPorCampo<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[];
```
Teste filtrando uma lista de usuários.
*/

function filtrarPorCampo<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[] {
    return lista.filter(item => item[campo] = valor);
}

const usuarios: { nome: string, idade: number }[] = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 22 },
];

filtrarPorCampo(usuarios, "nome", "Maria");