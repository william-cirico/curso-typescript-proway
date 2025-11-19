// Polimorfismo é a capacidade de diferentes objetos responderem de maneiras distintas a 
// uma mesma ação ou chamada de método.

abstract class Avaliacao {
    private _titulo: string;
    constructor(titulo: string) {
        this._titulo = titulo;
    }

    abstract calcularNota(): number;

    get titulo(): string {
        return this._titulo;        
    }

    set titulo(valor: string) {
        this._titulo = valor;
    }
}

class Prova extends Avaliacao {
    private acertos: number;
    private totalQuestoes: number;

    constructor(titulo: string, acertos: number, totalQuestoes: number) {
        super(titulo);
        this.acertos = acertos;
        this.totalQuestoes = totalQuestoes;        
    }

    calcularNota(): number {
        return this.acertos / this.totalQuestoes * 10;
    }
}

class Trabalho extends Avaliacao {    
    private notaProfessor: number;
    private peso: number;
    constructor(titulo: string, notaProfessor: number, peso: number) {
        super(titulo);
        this.notaProfessor = notaProfessor;
        this.peso = peso;
    }

    calcularNota(): number {
        return this.notaProfessor * this.peso;
    }
}

function mostrarResultadoAvaliacao(avaliacao: Avaliacao) {
    console.log(`Avaliação: ${avaliacao.titulo} - Nota: ${avaliacao.calcularNota().toFixed(2)}`);
}

const provaMatematica = new Prova("Prova de Matemática", 18, 20);
const trabalhoHistoria = new Trabalho("Trabalho de História", 8.5, 1.2);

mostrarResultadoAvaliacao(provaMatematica);
mostrarResultadoAvaliacao(trabalhoHistoria);