# Aula 02 – Funções avançadas, combinação de tipos e type casting
### 🕒 Carga horária: 4 horas

---

# 📘 **Conteúdos Abordados**
- [ ] Função com parâmetro padrão 
- [ ] Never 
- [ ] Função como um tipo 
- [ ] Sobrecarga de função 
- [ ] Tipos literais
- [ ] União de tipos 
- [ ] Intersecção de tipos 
- [ ] Type guards  
- [ ] Type casting

---

# 📝 **Exercícios – Aula 02**

## Exercícios sobre funções avançadas
### **1) Função com parâmetro padrão:**
Crie uma função `calcularFrete` que:
- Recebe o peso e a taxa base (valor padrão é 5)
- Retorna o valor total do frete usando a fórmula `total = taxaBase + peso * 0.5`

---

### **2) Função como tipo:**
Crie um tipo `Operacao` que representa uma função que recebe diversos números e retorna um número.
Crie duas funções `subtrair` e `dividir` que usam esse tipo.

---

### **3) Função como tipo para validar dados:**
Crie um tipo `Validador = (valor: string) => boolean`.
Depois:
- Crie funções `validarEmail` e `validarSenha` que respeitam esse tipo
- Crie uma função `rodarValidacao(valor: string, fn: Validador): boolean` que apenas chama o callback e retorna o resultado.

---

### **4) Callback em lista de números:**
Crie uma função `aplicarEmNumeros(valores: number[], fn: (n: number) => number): number[]` que aplica a função a cada número e retorna um novo array.

Exemplo esperado:
```ts
aplicarEmNumeros([1, 2, 3], n => n * 2) // [2, 4, 6]
```

---

### **5) Function overloading para buscar usuário:**
Implemente `buscarUsuario` com overloading:
- `buscarUsuario(id: number): string` -> retorna `"Usuário com id X"`
- `buscarUsuario(email: string): string` -> retorna `"Usuário com email Y"`

---

## Exercícios sobre union types
### **6) Union com type guards em array**  
Crie:
```ts
type Item = string | number;
```
Dado um array `itens: Item[]`, escreva a função `somarNumeros(itens)` que:
- Soma apenas os números
- Ignora strings

---

### **7) Union como resposta de função**  
Crie:
```ts
type Resposta = "SUCESSO" | "ERRO";
```
A função salvarDados() deve retornar "SUCESSO" 70% das vezes e "ERRO" 30% das vezes.
Execute a função 100 vezes e valide através do código a taxa de sucesso e erro das 100 execuções.

---

### **8) Union com valores heterogêneos**
Crie: 
```ts
type Dados = number[] | string;
```
Crie a função `processarDados(d: Dados)` que:
- se for string -> retorna o tamanho da string
- se for number[] -> retorna a soma dos valores

---

### **9) Intersection type para item de estoque:**
Crie: 
- Um tipo `Item` para salvar informações de um item do estoque.
- Um tipo `Auditavel` para salvar informações de auditoria do item.
Utilize a intersecção para criar um `ItemAuditavel` e mostrar uma mensagem mostrando uma propriedade oriunda de cada tipo.

---

## Exercícios sobre type casting
### **10) Contador com botão**  
No HTML:
```html
<p id="contador">0</p>
<button id="incrementar">Incrementar</button>
<button id="decrementar">Decrementar</button>
<button id="resetar">Resetar</button>
```
No TypeScript:
- Busque os elementos com `getElementById` + casting (`as HTMLParagraphElement`, `as HTMLButtonElement`).
- Crie uma variável valorContador: number controlada apenas no TS.
- Use addEventListener("click", ...) nos botões:
- incrementar → aumenta o contador e atualiza o <p>
- decrementar → diminui o contador e atualiza o <p>
- resetar → volta para 0
- Crie uma função `atualizarTela(fn: (valorAtual: number) => number)` que recebe um callback para transformar o valor e já atualiza o DOM (ou seja, usa callback para controlar o contador).
