# Aula 04 – Interfaces, Generics, Código Assíncrono e Operador Keyof

### 🕒 Carga horária: 4 horas

---

# 📘 **Conteúdos Abordados**

- [ ] Interfaces
- [ ] Generics
- [ ] Como tipar código assíncrono
- [ ] Operador Keyof

---

# 📝 **Exercícios – Aula 04**

## Exercícios sobre interfaces

### **1) Interface estendida:**

Crie uma interface `Pessoa` e uma interface `Funcionario` que estende `Pessoa` adicionado:

- cargo: string
- salario: number
  Crie um objeto funcionario válido.

---

### **2) Interface para representar um "Map" tipado:**

Crie uma interface `MapOf<T>` que permite:

```ts
const mapa: MapOf<number> = {
  idade: 30,
  ano: 2024,
};
```

---

### **3) Interface com vários tipos possíveis:**

Crie uma interface `CampoFormulario` que pode ser:

- CampoTexto
- CampoSelect
  Exemplo:

```ts
interface CampoTexto {
  tipo: "text";
  placeholder: string;
}

interface CampoSelect {
  tipo: "select";
  opcoes: string[];
}
```

Crie uma função `render(campo: CampoFormulario)` que imprima as propriedades de cada tipo separadamente (Use type narrowing para lidar com cada caso).

## Exercícios sobre código assíncrono
### **4) Função que retorna uma Promise simples:**

Crie a função `delay(ms: number): Promise<void>` que deve aguardar `ms` milissegundos e depois resolver a Promise.
Teste com:

```ts
console.log("Início");
delay(1000).then(() => console.log("Passou 1 segundo"));
```

---

### **5) Requisição com retry:**

Crie uma função que simula uma requisição que falha às vezes:

```ts
function requisicaoInstavel(): Promise<string> {
  // 50% de chance de falhar
}
```

Depois crie:

```ts
async function requisicaoComRetry(tentativas: number): Promise<string> {
  // Tenta chamar requisicaoInstavel até 'tentativas' vezes
  // Se estourar o número de tentativas, lança erro
}
```

---

### **6) Fila de processamento com limite de concorrência:**

Implemente:

```ts
async function processarComLimite<T>(
  itens: T[],
  handler: (item: T) => Promise<void>,
  limite: number
): Promise<void> {
  // 'limite' indica quantas promises podem rodar ao mesmo tempo
}
```

Exemplo:

```ts
const itens = [1, 2, 3, 4, 5, 6];

processarComLimite(
  itens,
  async (n) => {
    console.log("Iniciando", n);
    await delay(1000);
    console.log("Finalizando", n);
  },
  2
);
```
Você deve ver no log no máximo 2 itens “em execução” ao mesmo tempo.

---
## Exercícios sobre generics e keyof
### **7) Pilha genérica:**
Crie uma classe:
```ts
class Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  size(): number;
}
```
Crie pilhas de:
- números
- strings
- objetos

---

### **8) Converter campos para readonly:**
Crie um tipoe genérico `SomenteLeitura<T>` que transforma todas as propriedades em opcionais usando generics;

---

### **9) Função que valida se um objeto segue um schema:**
Crie uma função type guard `validarObjeto` usando generics que verifica se um objeto qualquer segue um schema definido.

### **10) Função genérica para buscar por campo:**
Crie: 
```ts
function filtrarPorCampo<T, K extends keyof T>(lista: T[], campo: K, valor: T[K]): T[];
```
Teste filtrando uma lista de usuários.

