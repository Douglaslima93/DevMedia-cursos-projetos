const numeros = [10, 1, 2];

console.log("\nAntes da ordenação:\n");
console.info(numeros);

function ordenaNumeros(a, b) {
    return a - b;
}

numeros.sort(ordenaNumeros);

console.log("\nDepois da ordenação:\n");
console.info(numeros);
console.log("\n");