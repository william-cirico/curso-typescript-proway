// Map (Transformar)
const frutas = ["laranja", "maçã", "pera"];
const sucos = frutas.map(fruta => `suco de ${fruta}`);
console.log(sucos);


// Filter (Filtrar)
const alimentos = [
  { nome: "Maçã", tipo: "fruta", quantidade: 12 },
  { nome: "Banana", tipo: "fruta", quantidade: 8 },
  { nome: "Cenoura", tipo: "legume", quantidade: 5 },
  { nome: "Batata", tipo: "legume", quantidade: 20 },
  { nome: "Alface", tipo: "verdura", quantidade: 3 },
  { nome: "Tomate", tipo: "fruta", quantidade: 10 },
  { nome: "Cebola", tipo: "legume", quantidade: 7 },
];

const legumes = alimentos.filter(alimento => alimento.tipo === "legume");
console.log(legumes);

// Reduce (Juntar tudo e transformar em um único valor)- Possui acumulador e o item
const notas = [10, 9, 8];
const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
const media = somaNotas / notas.length;
console.log(media);
