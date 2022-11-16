// Array é uma estrutura unidirecional para agrupar várias váriaveis,
// onde podemos acessar pelos identificadores (1, 2, 3 etc)

const valores = [7.7, 8.9, 10.5, 5.5];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
valores[10] = 200;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, "Teste");
console.log(valores);

// Você pode misturar tipos dentro do array, mas o ideal é eu cada array tenha tipos separados

console.log(valores.pop()); // Desta forma você retira o último elemento do array
delete valores[0]; // Desta forma você deleta o elemento estipulado do array
console.log(valores);

console.log(typeof valores);

// No JavaScript, array é um objeto.
