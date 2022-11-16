// O fato da linguagem ser de tipagem fraca, não significa que ela não tem tipo:

let qualquer = "Teste";
console.log(qualquer);
console.log(typeof qualquer);

// O let "qualquer" é uma string!

qualquer = 3.1516;
console.log(qualquer);
console.log(typeof qualquer);

// Agora o let "qualquer" é um number!

// >> Evitar nomes genéricos e siglas!
// Por exemplo, let valor = "..." > "Valor" é um termo genérico
