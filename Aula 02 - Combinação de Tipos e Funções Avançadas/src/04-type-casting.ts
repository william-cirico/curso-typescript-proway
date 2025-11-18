// Typecasting com as
const valor: unknown = "William";

const nome = valor as string;

console.log(nome.toUpperCase());

// Casting para tipos complexos
type Usuario = {
    nome: string;
    idade: number;
};

const data: unknown = { nome: "William", idade: 25 };
const user = data as Usuario;
console.log(user);

// Casting para union types
type Resposta = string | number;
const resp: Resposta = "ok";
const respStr = resp as string;
console.log(respStr.toUpperCase());

// Casting ao trabalhar com JSON
type Produto = {
    nome: string;
    preco: number;
}

const json = `{"nome":"Caneta","preco":99}`;

const produto = JSON.parse(json) as Produto;
console.log(produto.preco);

