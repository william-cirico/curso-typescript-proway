/* 
Função que valida se um objeto segue um schema:**
Crie uma função type guard `validarObjeto` usando generics que verifica se um objeto qualquer 
segue um schema definido.
*/
type Validador<T> = (valor: unknown) => valor is T;
type Schema<T> = {
    [K in keyof T]: Validador<T[K]>;
};

function validarObjeto<T>(obj: unknown, schema: Schema<T>): obj is T {
    if (typeof obj !== "object" || obj == null) {
        return false;
    }

    const objTipado = obj as Record<string, unknown>;

    for (const chave in schema) {
        const validador = schema[chave];
        const valor = objTipado[chave];

        if (!validador(valor)) {
            return false;
        }
    }

    return true;
}

const ehString: Validador<string> = (v: unknown): v is string =>
    typeof v === "string";

const ehNumero: Validador<number> = (v: unknown): v is number =>
    typeof v === "number" && !Number.isNaN(v);

const ehBooleano: Validador<boolean> = (v: unknown): v is boolean =>
    typeof v === "boolean";

type Usuario = {
    nome: string;
    idade: number;
    ativo: boolean;
};

const usuarioSchema: Schema<Usuario> = {
    nome: ehString,
    idade: ehNumero,
    ativo: ehBooleano,
};

function executar(dado: unknown) {
    if (validarObjeto<Usuario>(dado, usuarioSchema)) {
        console.log(dado.nome.toUpperCase());
    } else {
        console.log("Objeto inválido");
    }
}

const dado = {
    nome: "João",
    idade: 32,
    ativo: true,
};

executar(dado);