const valor: number | string = 10;

// Type guard com typeof
function isNumber(valor: unknown): valor is number {
    return typeof valor === "number";
}

if (isNumber(valor)) {
    console.log(valor.toFixed(2));
}

// Type guard com instanceof
class Usuario {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

function isUsuario(obj: unknown): obj is Usuario {
    return obj instanceof Usuario;
}

const usuario = new Usuario("William");
if (isUsuario(usuario)) {
    console.log("Nome do usuário: ", usuario.nome);
}

// Type guard com in operator (O in verifica se o objeto possui uma propriedade)
type Admin = {
    papel: "admin";
    permissoes: string[];
};

type UsuarioRegular = {
    role: "usuario";
}

function isAdmin(usuario: Admin | UsuarioRegular): usuario is Admin {
    return 'permissions' in usuario;
}

const usuario2: Admin | UsuarioRegular = { papel: "admin", permissoes: ["read"] };

if (isAdmin(usuario2)) {
    console.log("Permissões do usuário: ", usuario2.permissoes);
}

export {};

