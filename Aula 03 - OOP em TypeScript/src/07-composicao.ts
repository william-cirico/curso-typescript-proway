import { Curso } from "./01-classes-objetos.js";

// Composição: Um objeto é dono de outro. Se o dono morre, o dependente também morre.

class ItemCarrinho {
    curso: Curso;
    quantidade: number;
    precoUnitario: number;

    constructor(curso: Curso, quantidade: number, precoUnitario: number) {
        this.curso = curso;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    get total(): number {
        return this.quantidade * this.precoUnitario;
    }
}

class Carrinho {
    private itens: ItemCarrinho[] = [];

    adicionarItem(curso: Curso, quantidade: number, precoUnitario: number) {
        this.itens.push(new ItemCarrinho(curso, quantidade, precoUnitario));
    }

    get valorTotal(): number {
        return this.itens.reduce((acc, item) => acc + item.total, 0);
    }

    listarItens(): void {
        this.itens.forEach(i => console.log(`${i.curso.nome} x ${i.quantidade} = ${i.total}`));
    }
}

const carrinho = new Carrinho();
const cursoTS = new Curso("TypeScript", 20);
carrinho.adicionarItem(cursoTS, 1, 100);
carrinho.listarItens();
console.log("Total:", carrinho.valorTotal);