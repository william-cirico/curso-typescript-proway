// Funções assíncronas sempre retornam Promises
function esperar(ms: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Esperou ${ms}ms`);
        }, ms);
    });
}

esperar(2000).then(msg => console.log(msg));

// Exemplo com ASYNC/AWAIT
async function buscarUsuario(id: number): Promise<string> {
    if (id <= 0) {
        throw new Error("ID inválido");
    }

    return `Usuário: ${id}`;
}

async function run(id: number) {
    try {
        const usuario = await buscarUsuario(id);
        console.log(usuario);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Erro: ", error.message);
        }
    }
}

run(1);
run(0);

// Exemplo Fetch API
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    if (res.ok) {
        const data = await res.json() as Post[];
        return data;
    } else {
        throw new Error("Falha ao obter os posts");
    }
}

async function runGetPosts() {
    try {
        const posts = await getPosts();
        console.log(posts);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Erro: ", error.message);
        }
    }
}

runGetPosts();