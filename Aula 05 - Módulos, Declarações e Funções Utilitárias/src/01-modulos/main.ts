import { soma, PI, log } from "@utils/index.js";

// Import de type (Não é emitido no JS final)
import type { Usuario } from "./usuario.js";

log(soma(10, PI).toString());

const usuario: Usuario = {
    nome: "João",
    email: "joao@email.com",
};

console.log(usuario.nome);
