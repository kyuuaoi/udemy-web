const escola = "Udemy";
const escola2 = "Cod3r";

// .charAt > Utilizado para verificar qual o caractere "4"
console.log(escola.charAt(4));

// .charCodeAt > Utilizado para verificar um número na tabela Unicode
console.log(escola2.charCodeAt(3));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");

console.log(escola2.replace(3, "e"));

console.log("Ana,Maria,Pedro".split(","));
