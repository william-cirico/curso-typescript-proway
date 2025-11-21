interface Notificavel {
  enviarMensagem(msg: string): void;
}

class EmailService implements Notificavel {
  enviarMensagem(msg: string) {
    console.log("Email enviado:", msg);
  }
}

class SMSService implements Notificavel {
    enviarMensagem(msg: string) {
    console.log("SMS enviado:", msg);
  }
}

const emailService = new EmailService();
const smsService = new SMSService();
console.log(emailService.enviarMensagem("Teste"));
console.log(smsService.enviarMensagem("Teste"));

// Extendendo interfaces
interface ComId {
    id: string;
}

interface Pessoa extends ComId {
    nome: string;
}

const pessoa: Pessoa = {
    id: "1234",
    nome: "João",
};

console.log(pessoa);

// Interface com readonly
interface Ponto {
  readonly x: number;
  readonly y: number;
}

const ponto: Ponto = { x: 20, y: 20 };
console.log(ponto.x, ponto.y);
// ponto.x = 10; Erro


/* Interfaces são ideais para:
- Definir a forma de objetos
- Criar contratos de classes
- Quando você sabe que o tipo pode crescer no futuro
- Quando você quer permitir extensão via extends

Type é ideal para:
- Criar uniões
- Criar interseções
- Criar alias de tipos complexos
- Tipar funções
- Criar mapped types
- Tipar tuplas
*/