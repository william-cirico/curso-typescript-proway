// Para observar o arquivo npx tsc --watch <nome_arquivo>

const botao = document.getElementById("btn") as HTMLButtonElement;

botao.addEventListener("click", () => {
    alert("O botão foi clicado");
});