// Decorador de classe
function Controller(prefix: string) {
  return function (target: Function) {
    target.prototype.basePath = prefix;
  };
}

@Controller("/users")
class UsuarioController {}

const controller = new UsuarioController() as any;
console.log(controller.basePath); // "/users"


// Decorador de método
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Chamando ${propertyKey} com:`, args);
    return original.apply(this, args);
  };
}

class Calculadora {
  @Log
  sum(a: number, b: number) {
    return a + b;
  }
}

new Calculadora().sum(2, 3);
// Output:
// Chamando sum com: [2, 3]


// Decorador para setter
function MinLength(length: number) {
  return function (
    target: any,
    
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const setter = descriptor.set;
    descriptor.set = function (value: string) {
      if (value.length < length) {
        throw new Error(`${key} deve ter ao menos ${length} caracteres`);
      }
      setter!.call(this, value);
    };
  };
}

class Produto {
  private _nome: string = "";

  @MinLength(3)
  set name(valor: string) {
    this._nome = valor;
  }
}

const p = new Produto();
p.name = "PC"; // Erro

