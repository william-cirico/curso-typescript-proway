import { Curso } from "./01-classes-objetos.js";
import { Aluno } from "./04-heranca.js";

enum StatusMatricula {
    PENDENTE = "PENDENTE",
    ATIVA = "ATIVA",
    CANCELADA = "CANCELADA"
}

class Matricula {
    public aluno: Aluno;
    public curso: Curso;
    public status: StatusMatricula;

    constructor(aluno: Aluno, curso: Curso, status: StatusMatricula = StatusMatricula.PENDENTE) {
        this.aluno = aluno;
        this.curso = curso;
        this.status = status;
    }

    ativar() {
        this.status = StatusMatricula.ATIVA;
    }

    cancelar() {
        this.status = StatusMatricula.CANCELADA;
    }
}

const aluno = new Aluno("João", "joao@email.com", new Date(2005, 3, 24));
const cursoTS = new Curso("TypeScript", 20);
const matricula = new Matricula(aluno, cursoTS);
console.log(matricula);
matricula.ativar();
console.log(matricula);