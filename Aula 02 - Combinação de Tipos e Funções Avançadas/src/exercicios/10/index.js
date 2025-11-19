document.addEventListener("DOMContentLoaded", function () {
    var contador = document.getElementById("contador");
    var incrementarBtn = document.getElementById("incrementar");
    var decrementarBtn = document.getElementById("decrementar");
    var resetarBtn = document.getElementById("resetar");
    var valorContador = 0;
    function atualizarTela(fn) {
        valorContador = fn(valorContador);
        contador.textContent = valorContador.toString();
    }
    incrementarBtn.addEventListener("click", function () {
        atualizarTela(function (valorAtual) { return valorAtual + 1; });
    });
    decrementarBtn.addEventListener("click", function () {
        atualizarTela(function (valorAtual) { return valorAtual - 1; });
    });
    resetarBtn.addEventListener("click", function () {
        atualizarTela(function () { return 0; });
    });
});
