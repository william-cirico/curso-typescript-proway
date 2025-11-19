import { Curso } from "./01-classes-objetos.js";
import { Aluno, Professor } from "./04-heranca.js";

class Turma {
    public nome: string;
    public curso: Curso;
    public alunos: Aluno[] = [];
    public professor: Professor;

    constructor(nome: string, curso: Curso, professor: Professor) {
        this.nome = nome;
        this.curso = curso;
        this.professor = professor;
    }

    adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno); // apenas referencia, não "possui" o ciclo de vida
    }

    listarAlunos(): void {
        console.log(`Turma: ${this.nome} - Curso: ${this.curso.nome}`);
        this.alunos.forEach((a) => console.log(a.toString()));
    }
}

const cursoTS = new Curso("TypeScript", 40);
const professorJoao = new Professor("João Silva", "joao.silva@email.com", 5000);

const aluno1 = new Aluno("Maria", "maria@email.com", new Date(2002, 3, 29));
const aluno2 = new Aluno("Carlos", "carlos@email.com", new Date(2002, 3, 29));
const aluno3 = new Aluno("Fernanda", "fernanda@email.com", new Date(2002, 3, 29));

const turmaManha = new Turma("Turma Manhã", cursoTS, professorJoao);

turmaManha.adicionarAluno(aluno1);
turmaManha.adicionarAluno(aluno2);
turmaManha.adicionarAluno(aluno3);

turmaManha.listarAlunos();