const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();

const dataFormatada = dia + " / " + mes + " / " + ano;

console.log("A data atual é: " + dataFormatada);