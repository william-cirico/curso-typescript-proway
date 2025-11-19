function calcularIdade(anoNascimento: number, anoCalculo?: number): number {
    const ano = anoCalculo ?? new Date().getFullYear();
    return Math.max(0, ano - anoNascimento);
}

console.log(calcularIdade(2000, 2005));
console.log(calcularIdade(2000));