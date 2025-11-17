function imprimirCoordenadas(coord: { x: number; y: number }) {
    console.log(`X: ${coord.x} | Y: ${coord.y}`);
}

imprimirCoordenadas({ x: -26.9169772, y: -49.0728823 });

// Desestruturação em objetos
// const usuario = {
//     nome: "William",
//     idade: 25,
// };

// const { nome, idade } = usuario;

// console.log(nome);
// console.log(idade);

const produto = {
    titulo: "Notebook",
    preco: 3500,
};

// Renomeando variáveis
const { titulo: nomeProduto, preco: valorProduto } = produto;
console.log(nomeProduto, valorProduto);

// Desestruturação + Rest
const config = {
    host: "localhost",
    porta: 8080,
    protocolo: "https",
};

const { host, ...resto } = config;
console.log(host, resto);