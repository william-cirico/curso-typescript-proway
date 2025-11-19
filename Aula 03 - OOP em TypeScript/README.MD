# Aula 03 – OOP em TypeScript
### 🕒 Carga horária: 4 horas

---

# 📘 **Conteúdos Abordados**
- [ ] Classes
- [ ] Objetos
- [ ] Encapsulamento
- [ ] Parameter properties
- [ ] Herança
- [ ] Classes abstratas
- [ ] Polimorfismo
- [ ] Enum
- [ ] Composição
- [ ] Agregação
- [ ] Interfaces

---

# 📝 **Trabalho – Aula 03**

## Objetivo geral
Desenvolver um jogo simples baseado em turnos (turn-based combat game) aplicando de forma prática os principais pilares da Programação Orientada a Objetos

---

## Descrição do Trabalho
Criar um jogo de combate em turnos onde dois personagens batalham entre si até que apenas um permaneça vivo.

O jogo pode ser inspirado em RPGs clássicos (Pokémon, Final Fantasty, D&D, etc.), mas deve ser projeto com criatividade e identidade própria.

O foco principal não é a complexidade do jogo, e sim a qualidade do código, da modelagem e da aplicação dos conceitos de OOP.

## Requisitos técnicos obrigatórios
### **1) Modelagem com OOP**
Aplicar e demonstrar:
#### Classes e objetos
- Criar personagens, inimigos, habilidades, itens, etc.

#### Encapsulamento
- Atributos privados ou protegidos.
- Getters e setters quando necessário.

#### Herança
- Ex.: `Guerreiro` e `Mago` herdando de `Personagem`.

#### Polimorfismo
- Métodos como `atacar()`, `usarHabilidade()` e `tomarDano()` sendo sobrescritos em subclasses.

#### Classes Abstratas
- Ex.: Classe abstrata `Personagem` definindo comportamento comum.

#### Interfaces
- Ex.: Interface `Habilidade` ou `Item` definindo contratos.

#### Composição
- Ex.: Um personagem tem um inventário, tem habilidades, tem atributos.
### **2) Regras de Jogo**
O sistema de combate deve conter, no mínimo:

#### Atributos básicos
- vida (HP)
- ataque
- defesa
- velocidade
- mana/energia (opcional)

#### Turnos
- O personagem mais rápido começa
- Os turnos se alternam automaticamente

#### Ações do jogador
Pelo menos três ações diferentes, como:
- Atacar
- Usar habilidade
- Usar item
- Defender

#### Habilidades
- Pelo menos 3 habilidades diferentes
- Cada uma com efeitos e custos distintos

#### Sistema de danos
- Fórmula livre, mas consistente
- Deve considerar ataque, defesa e efeitos especiais (opcional)

#### Condição de vitória
- O jogo termina quando um personagem chegar a HP <= 0

### **3) Implementações Adicionais**
Caso consiga, implemente o combate utilizando html e css.