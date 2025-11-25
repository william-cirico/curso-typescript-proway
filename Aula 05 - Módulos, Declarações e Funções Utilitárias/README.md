# Aula 04 – Interfaces, Generics, Código Assíncrono e Operador Keyof

### 🕒 Carga horária: 4 horas

---

# 📘 **Conteúdos Abordados**

- [ ] Módulos
- [ ] Declarações de tipos com arquivos .d.ts
- [ ] Tipos utilitários

---

# 📝 **Exercícios – Aula 05**

## **1) Utilizando Pick para DTO:**
Baseado no seguinte tipo:
```ts
type Produto = {
    id: string;
    nome: string;
    preco: string;
    createdAt: Date;
    updatedAt: Date;
};
```
Crie e exporte um tipo `ProdutoDto` usando Pick e depois crie uma função
toProdutoDto(produto: Produto): ProdutoDto. O DTO deve conter apenas id, nome e preco do produto.

---

## **2) Usando Omit para esconder campos sensíveis:**
Baseado no tipo de usuário:
```ts
type Usuario = {
    id: number;
    nome: string;
    email: string;
    hashSenha: string;
}
```
Use `Omit` para declarar um tipo UsuarioDto e crie uma função `sanitizarUsuario(usuario: Usuario): UsuarioDto` que remove o campo hashSenha.

---

## **3) Utilizando Readonly e Record:**
Baseado no tipo dos papeis:
```ts
type Papel = "admin" | "gerente" | "usuario";
```
- Crie um tipo `Permissoes = ReadonlyArray<string>`;
- Crie uma constante de permissoes do tipo `Readonly<Record<Papel, Permissoes>>, inicializando com permissões coerentes para cada papel.

---

## **4) Exclude e Extract para filtrar tipos em módulos de eventos:**
```ts
type TipoEvento = "USER_CREATED" | "USER_DELETED" | "ORDER_PLACED" | "ORDER_CANCELLED";
```
- Crie `type EventosUsuario` com eventos relacionados ao usuário.
- Crie `type EventosPedido` com eventos relacionados aos pedidos.

## **5) Tipando funções com Parameters:**
Baseado nas funções:
```ts
export function get(url: string, config?: { timeout?: number; headers?: Record<string, string> }) {
  // ...
}

export function post(url: string, body: unknown, config?: { timeout?: number; headers?: Record<string, string> }) {
  // ...
}
```
Crie as funções `logGet` e `logPost` que reaproveitam a tipagem dos parâmetros das funções originais e mostra no console os argumentos passados para a função.

---

## **6) Validar valores em um setter:**
- Crie o decorator `MaxLength(n: number)`
- Ele deve lançar erro se o valor de um setter tiver menos caracteres que n
- Teste com uma classe Produto e um setter para `nome`

---

## **7) Estudo das configurações do tsconfig.json:**
Pesquise e estude as propriedades disponíveis no arquivo **tsconfig.json**, entendendo a finalidade de cada uma e como influenciam o processo de compilação do TypeScript.

Você deve pesquisar e explicar com um exemplo pelo menos 1 item de cada uma das divisões abaixo:

**1. Propriedades gerais:**
- compilerOptions
- include
- exclude
- extends
- files

**2. Checagem de tipo:**
- allowUnreachableCode
- allowUnusedLabels
- alwaysStrict
- exactOptionalPropertyTypes
- noFallthroughCasesInSwitch
- noImplicitAny
- noImplicitOverride
- noImplicitReturns
- noImplicitThis
- noPropertyAccessFromIndexSignature
- noUncheckedIndexedAccess
- noUnusedLocals
- noUnusedParameters
- strict
- strictBindCallApply
- strictBuiltinIteratorReturn
- strictFunctionTypes
- strictNullChecks
- strictPropertyInitialization
- useUnknownInCatchVariables

**3. Módulos:**
- allowArbitratyExtensions
- allowImportingTsExtensions
- allowUmdGlobalAccess
- baseUrl
- customConditions
- module
- moduleResolution
- moduleSuffixes
- noResolve
- noUncheckedSideEffectImports
- paths
- resolveJsonModule
- resolvePackageJsonExports
- resolvePackageJsonImports
- rewriteRelativeImportExtensions
- rootDir
- rootDirs
- typeRoots
- types

**4. Emit:**
- declaration
- declarationDir
- declarationMap
- downlevelIteration
- emitBOM
- emitDeclarationOnly
- importHelpers
- inlineSourceMap
- inlineSources
- mapRoot
- newLine
- noEmit
- noEmitHelpers
- noEmitOnError
- outDir
- outFile
- preserveConstEnums
- removeComments
- sourceMap
- sourceRoot
- stripInternal

**5: Restrições de interoperabilidade:**
- allowSyntheticDefaultImports
- erasableSyntaxOnly
- esModuleInterop
- forceConsistentCasingInFileNames
- isolatedDeclarations
- isolatedModules
- preserveSymlinks
- verbatimModuleSyntax

**6 Linguagem e Ambiente:**
- emitDecoratorMetadata
- experimentalDecorators
- jsx
- jsxFactory
- jsxFragmentFactory
- jsxImportSource
- lib
- libReplacement
- moduleDetection
- noLib
- reactNamespace
- target
- useDefineForClassFields

**7 Completude:**
- skipDefaultLibCheck
- skipLibCheck


