class Curso {
    // Propriedades
    nome: string;
    cargaHoraria: number;

    // Construtor
    constructor(nome: string, cargaHoraria: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }

    // Métodos
    descrever(): string {
        return `${this.nome} - ${this.cargaHoraria}`;
    }
}

// Objeto
const cursoTS = new Curso("TypeScript", 20);
console.log(cursoTS.descrever());

export { Curso };