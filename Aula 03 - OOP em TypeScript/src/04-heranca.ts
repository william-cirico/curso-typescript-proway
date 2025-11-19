import { differenceInYears, format } from "date-fns";

// Classe abstrata não pode ser instanciada
abstract class Usuario {
    private _nome: string;
    private _email: string;
    private static readonly EMAIL_REGEX = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/; // Atributo estático

    constructor(nome: string, email: string) {
        this.validaEmail(email);
        this._email = email;
        this._nome = this.formatarNome(nome);
    }

    // Explicar protected
    private formatarNome(nome: string): string {
        return nome
            .trim()
            .split(" ")
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(" ");
    }

    private validaEmail(email: string): void {
        if (!Usuario.EMAIL_REGEX.test(email)) {
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

class Aluno extends Usuario {
    private _dataNascimento: Date;

    constructor(nome: string, email: string, dataNascimento: Date) {
        super(nome, email);
        this.validaDataNascimento(dataNascimento);
        this._dataNascimento = dataNascimento;
    }

    private validaDataNascimento(dataNascimento: Date): void {
        if (differenceInYears(new Date(), dataNascimento) < 6) {
            throw new Error("Crianças com idade inferior a 6 anos não podem ser matriculadas.")
        }
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(valor: Date) {
        this.validaDataNascimento(valor);
        this._dataNascimento = valor;
    }

    dataNascimentoFormatada(): string {
        return format(this._dataNascimento, "dd/MM/yyyy");
    }

    toString(): string {
        return `Aluno(nome=${this.nome}, email=${this.email}, dataNascimento=${this.dataNascimentoFormatada()})`;
    }
}

class Professor extends Usuario {
    private _salario: number;

    constructor(nome: string, email: string, salario: number) {
        super(nome, email);
        this.validaSalario(salario);
        this._salario = salario;
    }

    private validaSalario(salario: number) {
        if (salario < 0) {
            throw new Error("Salário não pode ser negativo");
        }
    }

    get salario(): number {
        return this._salario;
    }

    set salario(valor: number) {
        this.validaSalario(valor);
        this._salario = valor;
    }

    toString(): string {
        return `Professor(nome=${this.nome}, email=${this.email}, salario=${this.salario})`;
    }
}

const aluno = new Aluno("João", "joao@email.com", new Date(2005, 3, 24));
console.log(`${aluno}`);

const professor = new Professor("Marcos", "marcos@email.com", 1000);
console.log(`${professor}`);

export { Aluno, Professor };