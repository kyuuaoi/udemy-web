const peso1 = 1;
const peso2 = Number("2.0");

console.log(peso1, peso2);

// Para verificar se um "number" é inteiro:

console.log(Number.isInteger("peso1"));

//

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media);

// Use .toFixed(2) por exemplo, para controlar o número de casas decimais do resultado:

console.log(media.toFixed(2));

// Apesar de imprimir no console, ele não altera o valor da constante nem da variável.

// Para alternar um number para string, use:

console.log(media.toString);

// Em binário:

console.log(media.toString(2));

//

console.log(typeof media);
console.log(typeof Number);

// Number com "N" maiúsculo é uma função. Minúsculo, o tipo do dado quando há valor numérico.
