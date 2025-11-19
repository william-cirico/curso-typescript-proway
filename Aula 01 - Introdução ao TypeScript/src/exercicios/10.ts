function contarPalavras(texto: string, ...palavras: string[]): number {
    let contador = 0;
    const palavrasTexto = texto.toLowerCase().split(" ");   
    for (const palavra of new Set(palavras)) {
        if (palavrasTexto.includes(palavra.toLowerCase())) contador++
    }

    return contador;
}

console.log(contarPalavras("eu gosto de estudar js", "js", "est", "estudar", "estudar", "gosto"));