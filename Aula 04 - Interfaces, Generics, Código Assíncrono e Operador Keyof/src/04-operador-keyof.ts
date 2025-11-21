// Keyof
type Usuario = {
    nome: string;
    idade: number;
    email: string;
};

type ChavesUsuario = keyof Usuario;

function mostrarPropriedadeUsuario(usuario: Usuario, prop: ChavesUsuario) {
    return usuario[prop];
}

const usuario: Usuario = {
    nome: "Will",
    idade: 22,
    email: "will@email.com",
};

console.log(mostrarPropriedadeUsuario(usuario, "idade"));

// Combinando keyof + typeof
const config = {
    host: "localhost",
    porta: 3000,
    protocolo: "https",
};

type Config = typeof config;
type ChavesConfig = keyof Config;

function getConfig(key: ChavesConfig) {
    return config[key];
}

console.log(getConfig("host"));
console.log(getConfig("porta"));


type Modelo = {
    id: string;
    criadoEm: Date;
    atualizadoEm: Date;
    nome: string;
}

function ordenarPor(campo: keyof Modelo) {
    console.log("Ordenando por: ", campo);
}

ordenarPor("nome");
ordenarPor("criadoEm");

// Usando keyof para definir chaves em objetos
type Form = {
    nome: string;
    senha: string;
};

type MensagensErro = {
    [K in keyof Form]: string;
};

const mensagens: MensagensErro = {
    nome: "Nome é obrigatório",
    senha: "Senha deve ter ao menos 6 caracteres",
};

console.log(mensagens);