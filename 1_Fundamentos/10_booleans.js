let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
console.log(!isAtivo);
console.log(!true);
console.log(!false);

// Os verdadeiros:
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"Texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// Os falsos:
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN); // Not a Number
console.log(!!undefined);
console.log(!!(isAtivo = false));

//

// || = "Ou"
console.log(!!("" || null || 0 || " "));

// Exemplo:
let nome = ""; // String vazia
console.log(nome || "Desconhecido");
