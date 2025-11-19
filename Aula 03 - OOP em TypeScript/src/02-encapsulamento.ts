class Usuario {
    private _nome: string;
    private _email: string;

    constructor(nome: string, email: string) {
        this.validaEmail(email);
        this._email = email;
        this._nome = this.formatarNome(nome);
    }

    private formatarNome(nome: string): string {
        return nome
            .trim()
            .split(" ")
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(" ");
    }

    private validaEmail(email: string): void {
        if(!RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) {
            throw new Error("E-mail precisa ser válido");
        };
    }

    get nome(): string {
        return this._nome;
    }

    set nome(valor: string) {
        this._nome = this.formatarNome(valor);
    }

    get email(): string {
        return this._email;
    }

    set email(valor: string) {
        this.validaEmail(valor);
        this._email = valor;
    }

    // Sobrescrevendo método toString de object
    toString(): string {
        return `Usuario(nome=${this._nome}, email=${this._email})`;
    }
}

const usuario = new Usuario("William Círico", "will@email.com");
console.log(`${usuario}`); // toString() só é chamado nesse contexto
