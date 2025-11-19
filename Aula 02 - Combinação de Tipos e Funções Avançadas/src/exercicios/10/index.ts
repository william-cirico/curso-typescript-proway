document.addEventListener("DOMContentLoaded", () => {
    const contador = document.getElementById("contador") as HTMLParagraphElement;
    const incrementarBtn = document.getElementById("incrementar") as HTMLButtonElement;
    const decrementarBtn = document.getElementById("decrementar") as HTMLButtonElement;
    const resetarBtn = document.getElementById("resetar") as HTMLButtonElement;

    let valorContador = 0;

    function atualizarTela(fn: (valorAtual: number) => number): void {
        valorContador = fn(valorContador);
        contador.textContent = valorContador.toString();
    }

    incrementarBtn.addEventListener("click", () => {
        atualizarTela(valorAtual => valorAtual + 1);
    });

    decrementarBtn.addEventListener("click", () => {
        atualizarTela(valorAtual => valorAtual - 1);
    });

    resetarBtn.addEventListener("click", () => {
        atualizarTela(() => 0);
    });
});



