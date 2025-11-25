/* 
Interface para representar um "Map" tipado:**

Crie uma interface `MapOf<T>` que permite:

const mapa: MapOf<number> = {
  idade: 30,
  ano: 2024,
};
*/

interface MapOf<T> {
    [key: string]: T;
}

const mapa: MapOf<number> = {
    idade: 30,
    ano: 2024,
};

console.log(mapa);