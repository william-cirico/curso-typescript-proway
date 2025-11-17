# Aula 01 – Introdução ao TypeScript  
### 🕒 Carga horária: 4 horas

---

# 📘 **Conteúdos Abordados**
- [ ] O que é TypeScript  
- [ ] TypeScript vs JavaScript  
- [ ] Vantagens e desvantagens  
- [ ] Histórico e evolução da linguagem  
- [ ] Onde o TypeScript é usado (frameworks e ecossistema)  
- [ ] Preparando o ambiente de desenvolvimento  
- [ ] Compilação e execução  
- [ ] Fundamentos da linguagem  
  - Declaração de variáveis  
  - Tipos primitivos  
  - Inferência de tipos  
  - Funções básicas  

---

# 🧰 **Preparando o Ambiente de Desenvolvimento**

### **1. Criar o projeto**
```bash
mkdir typescript-course
cd typescript-course
```

### **2. Inicializar o package.json**
```bash
npm init -y
```

### **3. Instalar o TypeScript**
```bash
npm install -D typescript
```

### **4. Instalar uma engine de execução**  
*(Necessário apenas para Node < 23)*  
```bash
npm install -D tsx
# ou
npm install -D ts-node
```

### **5. Gerar o tsconfig.json**
```bash
npx tsc --init
```

Após gerar, configure o **rootDir**:
```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

### **6. Criar o primeiro arquivo TypeScript**

Crie a pasta `src` e o arquivo `index.ts`:

```ts
const mensagem: string = "Olá mundo!";
console.log(mensagem);
```

### **7. Compilar o código**
```bash
npx tsc
```

### **8. Executar o JavaScript gerado**
```bash
node dist/index.js
```

### **9. Rodar com engine de execução**  
*(Node < 23)*

```bash
npx ts-node src/index.ts
# ou
npx tsx src/index.ts
```

---

# 📝 **Exercícios – Aula 01**

## Exercícios sobre os tipos básicos
### **1) Crie variáveis dos seguintes tipos:**
- string  
- number  
- boolean  
- string[]  
- number[]  

---

### **2) Crie uma tupla:**
Crie uma tupla chamada endereço com as seguintes informações: número, rua e código postal.

---

## Exercícios sobre funções
### **3) Função `ehPrimo`**  
Recebe um número e retorna um booleano indicando se o número é primo.

---

### **4) Função `saudar`**  
Recebe:  
- `nome: string`  
- `horario?: string` (opcional)

Comportamento:  
- Com horário → `Olá, NOME! Agora são HORARIO.`  
- Sem horário → `Olá, NOME!`

---

### **5) Função `calcularIdade`**  
Recebe:  
- `ano de nascimento: number`  
- `anoCalculo?: number` (opcional)

Comportamento:  
- Com anoCalculo → calcula a idade da pessoa no ano fornecido.  
- Sem anoCalculo → calcula a idade da pessoa no ano atual.

---

### **6) Converter o código JS para TypeScript**
```js
function mostrarInfo(pessoa) {
  return pessoa.nome + " tem " + pessoa.idade + " anos.";
}
```
Adicione tipagem adequada.

---

### **7) Função `criaEstado`**

Simular um mecanismo de estado interno. A função deve retornar o valor armazenado e uma função para modificar esse valor em formato de tupla.

Exemplo:
```ts
const [texto, setTexto] = criaEstado("");
console.log(texto); 
setTexto("Olá");
console.log(texto);
```

---

## Exercícios sobre objetos e rest parameters
### **8) Desestruturar o objeto `pedido`**

```ts
const pedido = {
  id: 55,
  cliente: {
    nome: "Marcos",
    idade: 41,
  },
  itens: ["Mouse", "Teclado", "Monitor"],
  total: 1200,
};
```

Desestruture:
- `nome` do cliente  
- o array `itens`  
- o restante das propriedades em `extras`  

---

### **9) Função para somar números**
Crie uma função `somarTudo` que recebe qualquer quantidade de números e retorne a soma total.
```ts
somarTudo(1, 2, 3) // 6
```

---

### **10) Função para contar palavras**
Crie uma função `somarTudo` que receba um texto principal como primeiro parâmetro e depois receba várias palavras via rest.
```ts
contarPalavras("eu gosto de estudar js", "js", "python", "estudar") // 2
```

---

## Exercícios sobre types
### **11) Função de autenticação:**
Recebe um usuário, email e senha e deve retornar:
- `true` → se email e senha estiverem corretos **e** `usuario.ativo === true`  
- `false` → caso contrário  

---

## Exercícios sobre map, filter e reduce
### **12) Função `filtrarPorAno` – versão básica**

Recebe:
- vetor de livros  
- ano inicial  

Retorna todos os livros daquele ano.

---

### **13) `filtrarPorAno` com intervalo opcional**

Parâmetro opcional:
- `anoTermino?: number`

Se informado, retornar livros entre `anoInicio` e `anoTermino`.

---

### **14) Função `listarAdmins`**

Dado um vetor de usuários, retornar **somente os nomes** dos usuários administradores.

---

### **15) Total da compra**
Dado o carrinho:
```ts
const carrinho = [
  { produto: "Mouse", preco: 50 },
  { produto: "Teclado", preco: 120 },
  { produto: "Monitor", preco: 900 },
];
```
Use `reduce` para calcular o valor total do carrinho.
