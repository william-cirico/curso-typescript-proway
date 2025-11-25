type SomenteLeitura<T> = {
    readonly [K in keyof T]: T[K];
};

type Usuario = {
    nome: string;
    email: string;
};

const usuario: SomenteLeitura<Usuario> = {
    nome: "William",
    email: "william@email.com",
};

usuario.nome = "Outro nome"; // Erro