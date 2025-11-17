type Usuario = {
    nome: string;
    idade: number;
    ativo?: boolean;
};

const usuario: Usuario = {
    nome: "William",
    idade: 25,
    ativo: true,
};

console.log(usuario);