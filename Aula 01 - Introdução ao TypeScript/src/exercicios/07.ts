function criaEstado(valorInicial: string): [() => string, (novoValor: string) => void] {
    let estado = valorInicial;

    function setEstado(novoValor: string): void {
        estado = novoValor;
    }

    function getEstado(): string {
        return estado
    }

    return [getEstado, setEstado];
}

const [getTexto, setTexto] = criaEstado("");
console.log(getTexto());
setTexto("Olá");
console.log(getTexto());