/* 
Interface com vários tipos possíveis:**

Crie uma interface `CampoFormulario` que pode ser:

- CampoTexto
- CampoSelect
*/

interface CampoTexto {
  tipo: "text";
  placeholder: string;
}

interface CampoSelect {
  tipo: "select";
  opcoes: string[];
}

// 1ª forma
// type CampoFormulario = CampoTexto | CampoSelect;

// 2ª forma
interface CampoFormulario {
    tipo: "text" | "select";
    placeholder?: string;
    opcoes?: string[];
}

function render(campo: CampoFormulario) {
    if (campo.tipo === "text") { // Narrowing por propriedade
        console.log(`Campo de texto | Placeholder: ${campo.placeholder}`);
    } else if (campo.tipo === "select") {
        console.log(`Campo select | Opções: ${campo.opcoes}`);
    }
}

render({ tipo: "text", placeholder: "Digite seu texto" });