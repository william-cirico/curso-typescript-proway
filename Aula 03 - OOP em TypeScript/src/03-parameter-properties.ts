class Categoria {
    constructor(
        public nome: string,
        public descricao: string,
        private _ativa: boolean = true,
    ) {}

    get ativa(): boolean {
        return this._ativa;
    }
}

const backend = new Categoria("Backend", "Cursos de backend");
console.log(backend.nome, backend.ativa);