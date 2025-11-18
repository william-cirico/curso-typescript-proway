// Union type
type ID = number | string;

let idUsuario: ID = 123;
idUsuario = "abc-123";
console.log(idUsuario);

// Narrowing
function imprimirId(id: ID) {
  if (typeof id === "string") {
    console.log("ID (string):", id.toUpperCase());
  } else {
    console.log("ID (number):", id.toFixed(2));
  }
}

imprimirId(10);
imprimirId("user-10");

// Literal types
type StatusPedido = "PENDENTE" | "PAGO" | "CANCELADO";

let statusAtual: StatusPedido = "PENDENTE";

function atualizarStatus(novoStatus: StatusPedido) {
  statusAtual = novoStatus;
  console.log("Status atualizado para:", statusAtual);
}

atualizarStatus("PAGO");
// atualizarStatus("EM PROCESSO"); // ❌ erro de compilação

// Narrowing com checagem de propriedade
type User = { type: "user"; nome: string };
type Admin = { type: "admin"; nome: string; permissoes: string[] };

type UsuarioSistema = User | Admin;

function descreverUsuario(usuario: UsuarioSistema) {
  if (usuario.type === "admin") {
    console.log(`Admin: ${usuario.nome} | Permissões: ${usuario.permissoes.join(", ")}`);
  } else {
    console.log(`User: ${usuario.nome}`);
  }
}

descreverUsuario({ type: "user", nome: "Ana" });
descreverUsuario({ type: "admin", nome: "Carlos", permissoes: ["LEITURA", "ESCRITA"] });

// Type intersection
type Pessoa = {
  nome: string;
};

type Funcionario = {
  salario: number;
}

type FuncionarioPessoa = Pessoa & Funcionario;

const funcionario: FuncionarioPessoa = {
  nome: "Marcos",
  salario: 2000,
};

console.log(funcionario);

export {};