type Livro = {
    titulo: string;
    ano: number;
}

function filtrarPorAno(livros: Livro[], anoInicial: number, anoTermino?: number) {
    if (anoTermino) return livros.filter(livro => 
        livro.ano >= anoInicial && livro.ano <= anoTermino);
    return livros.filter(livro => livro.ano >= anoInicial);
}

const livros: Livro[] = [
    { titulo: "Livro 1", ano: 1895 },
    { titulo: "Livro 2", ano: 1881 },
    { titulo: "Livro 3", ano: 1930 },
    { titulo: "Livro 4", ano: 1959 },
];

console.log(filtrarPorAno(livros, 1900));
console.log(filtrarPorAno(livros, 1880, 1900));