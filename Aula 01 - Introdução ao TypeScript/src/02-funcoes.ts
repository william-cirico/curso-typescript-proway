function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

function calcularDobro(valor: number): number {
    return valor * 2;
}

function apresentar(nome: string, idade?: number): string {
    if (idade) return `${nome} tem ${idade} anos.`;
    return `${nome} não informou idade.`;
}

// Rest parameters em funções
function cadastrarUsuario(nome: string, ...habilidades: string[]) {
    console.log(`Nome: ${nome}`);
    console.log(`Habilidades: ${habilidades.join(", ")}`);
}

console.log(saudacao("William"));
console.log(calcularDobro(827162902932));
console.log(apresentar("Maria"));
console.log(cadastrarUsuario("João", "Typescript", "Node", "Nest"));
