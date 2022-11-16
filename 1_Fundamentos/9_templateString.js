const nome = "Gabriel";
const concatenacao = "Olá " + nome + "!";

console.log(concatenacao);

const template = `
    Olá
    ${nome}!`;

console.log(template);

// Você pode colocar expressões dentro das template strings:

console.log(`1 + 1 = ${1 + 1}`);

// Exemplo de função com template string:

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
