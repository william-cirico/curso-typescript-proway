// Tipos primitivos
let nome: string = "William";
let idade: number = 25;
let ativo: boolean = true;

// Arrays
let notas: number[] = [10, 9, 8];
let tecnologias: string[] = ["TypeScript", "React", "Angular", "Vue"];

// Tuple
let aluno: [string, number] = ["João", 25];

// Any
let qualquerCoisa: any = "anything";
qualquerCoisa = 10;

// Unknown
let dado: unknown = "texto";

// Null e undefined
let semValor: null = null;
let indefinido: undefined = undefined;
let x;

console.log(nome, idade, ativo, notas, tecnologias, aluno, qualquerCoisa, dado, semValor, indefinido, x);

