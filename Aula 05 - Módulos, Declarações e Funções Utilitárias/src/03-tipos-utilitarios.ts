// Partial: Todas as propriedades são opcionais

type Usuario = {
    id: number;
    nome: string;
    email: string;
}

function atualizarUsuario(usuario: Usuario, dados: Partial<Usuario>) {
    console.log(`Atualizando o usuario: ${usuario} com os dados: ${dados}`);
}

atualizarUsuario({
    id: 1,
    nome: "João",
    email: "joao@email.com",
}, { nome: "João Almeida" });

// Required: Todas as propriedades são obrigatórias
interface Post {
    id: number;
    titulo: string;
    descricao?: string;
};

const post: Required<Post> = {
    id: 1,
    titulo: "Teste",
    descricao: "Um post teste"
};
console.log(post);

// Readonly: Torna todas as propriedades imutáveis
interface Config {
    timeout: number;
    baseUrl: string;
}

const cfg: Readonly<Config> = {
    timeout: 3000,
    baseUrl: "https://api.exemplo.com",
};

// cfg.timeout = 1000; Erro

// Record: Cria um tipo de objeto com chaves K e valores T.
type Papeis = "admin" | "usuario" | "visitante";
const permissoes: Record<Papeis, string[]> = {
    admin: ["read", "write", "delete"],
    usuario: ["read"],
    visitante: [],
}
console.log(permissoes);

// Pick: Seleciona apenas algumas chaves de um tipo
interface Carro {
    id: number;
    nome: string;
    cor: string;
};

type CarroPreview = Pick<Carro, "nome" | "cor">;
const carro: CarroPreview = {
    nome: "Jeep Renegade",
    cor: "Preto",
};

// Omit: Remove certas chaves.
type UsuarioSemEmail = Omit<Usuario, "email">;
const usuario: UsuarioSemEmail = {
    id: 1,
    nome: "Maria"
};
console.log(usuario);

// Exclude: Remove de uma union um tipo
type Status = "open" | "closed" | "draft";

type WithoutDraft = Exclude<Status, "draft">;
const status: WithoutDraft = "closed";
console.log(status);

// Extract: Mantém somente os tipos compatíveis com U
type Acoes = "create" | "update" | "delete" | "view";
type WriteActions = Extract<Acoes, "create" | "update">;

// NonNullable: Remove null e undefined de um tipo
type TalvezString = "string" | null | undefined;
type ApenasString = NonNullable<TalvezString>;

// ReturnType: Obtém o tipo de retorno de uma função
function getUsuario() {
    return { id: 1, nome: "Will" };
}

type UsuarioRetorno = ReturnType<typeof getUsuario>;

// InstanceType: Cria o tipo baseado na instância de uma classe
class Pessoa {
    constructor(public name: string) {}
}

type PessoaInstancia = InstanceType<typeof Pessoa>;

// Parameters: Cria uma tupla com os tipos de parâmetros de uma função
function soma(a: number, b: number): number {
    return a + b;
}

type SomaParametros = Parameters<typeof soma>;

// ConstructorParameters: Igual a Parameter só que para construtores.
type PessoaParametros = ConstructorParameters<typeof Pessoa>;

// Awaited: Usado para descobrir o tipo resolvida de uma Promise, sem precisar dar await
type UsuarioPromise = Promise<{ nome: string}>;
type UsuarioAwaited = Awaited<UsuarioPromise>;


