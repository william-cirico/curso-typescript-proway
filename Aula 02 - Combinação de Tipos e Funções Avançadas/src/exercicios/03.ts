/*
3) Função como tipo para validar dados:**
Crie um tipo `Validador = (valor: string) => boolean`.
Depois:
- Crie funções `validarEmail` e `validarSenha` que respeitam esse tipo
- Crie uma função `rodarValidacao(valor: string, fn: Validador): boolean` que apenas 
chama o callback e retorna o resultado.
*/

type Validador = (valor: string) => boolean;

const validarEmail: Validador = (valor) => new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .test(valor);

const validarSenha: Validador = (valor) => valor.length >= 8;

function rodarValidacao(valor: string, fn: Validador): boolean {
    return fn(valor);
}

console.log(rodarValidacao("will@email.com", validarEmail));
console.log(rodarValidacao("12345678", validarSenha));
