var a = 3;
let b = 4;

// No caso do var, você pode redeclarar durante o código, por exemplo:

var a = 30;

// E se você imprimir no console, não haverá problema:

console.log(a, b);

// Mas se você redeclarar o let, haverá conflito:
// let b = 40;
// O que pode ser feito, é:

b = 40;

console.log(a, b);

const c = 5;

console.log(a, b, c);

// E no caso da const, você não pode redeclarar/alterar
