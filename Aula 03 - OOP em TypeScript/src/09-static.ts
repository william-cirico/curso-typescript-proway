class Calculadora {
    static PI: number = 3.14159;

    static somar(a: number, b: number): number {
        return a + b;
    }

    static calcularCircunferência(raio: number): number {
        return 2 * Calculadora.PI * raio;
    }
}

console.log(Calculadora.PI);
console.log(Calculadora.somar(1, 2));
console.log(Calculadora.calcularCircunferência(10));