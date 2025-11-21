// Generics em funções
function primeiroElemento<T>(lista: T[]): T {
  return lista[0];
}

console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(["a", "b", "c"]));

// Função com dois tipos genéricos
function juntar<A, B>(a: A, b: B) {
  return { a, b };
}

const r1 = juntar("idade", 25);
const r2 = juntar(true, { nome: "Ana" });
console.log(r1, r2);

// Função genérica com restrição (Só aceita objetos que possuem a propriedade nome)
function mostrarNome<T extends { nome: string }>(obj: T): void {
  console.log(obj.nome);
}

mostrarNome({ nome: "William" });
// mostrarNome({ idade: 25 }) // ❌ erro

// Generics com interface
interface RepostaAPI<T> {
  data: T;
  sucesso: boolean;
}

const respostaAPIUsuario: RepostaAPI<{ nome: string }> = {
  data: { nome: "William" },
  sucesso: true,
};

console.log(respostaAPIUsuario);


interface Repository<T, ID> {
  findAll(): Promise<T[]>;
  findById(id: ID): Promise<T | null>;
  save(data: T): Promise<T>;
}

type Usuario = {
  id: string;
  nome: string;
  email: string;
};

class UsuarioRepositorioEmMemoria implements Repository<Usuario, string> {
  private usuarios: Usuario[] = [];

  async findAll(): Promise<Usuario[]> {
    return this.usuarios;
  }

  async findById(id: string): Promise<Usuario | null> {
    return this.usuarios.find(u => u.id === id) || null;
  }

  async save(data: Usuario): Promise<Usuario> {
    this.usuarios.push(data);
    return data;
  }
}

const repositorio = new UsuarioRepositorioEmMemoria();
repositorio.save({
  id: "1",
  nome: "William",
  email: "william.cirico@email.com",
});
repositorio.findAll().then(res => console.log(res));


// Generics com classes
class CuidadorAbelha {
  temMascara: boolean = true;
}

class CuidadorZoologico {
  nome: string = "Mike";
}

class Animal {
  numPernas: number = 4;
}

class Abelha extends Animal {
  numPernas = 6;
  cuidador: CuidadorAbelha = new CuidadorAbelha();
}

class Leao extends Animal {
  cuidador: CuidadorZoologico = new CuidadorZoologico();
}

// Generics restringido
function criarObjeto<T extends Animal>(construtor: new () => T): T {
  return new construtor();
}

criarObjeto(Leao).cuidador.nome;
criarObjeto(Abelha).numPernas;
// criarObjeto(CuidadorAbelha).numPernas; // ❌ Erro

// Generics com angle brackets
const idAlunos = new Map<number, string>();
idAlunos.set(1, "João");
idAlunos.set(2, "Marcos");
console.log(idAlunos);

const numeros = [1, 2, 3, 4];
const soma = numeros.reduce<number>((acc, n) => acc + n, 0);
console.log(soma);