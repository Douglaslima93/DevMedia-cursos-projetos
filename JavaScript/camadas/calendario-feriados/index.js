import retornaProximosFeriados from "./retornaFeriado.js";
import imprimeFeriados from "./imprimeFeriado.js";


console.log('\nOs próximos feriados serão:\n');

let numeroFeriados = 3;

let proximosFeriados = retornaProximosFeriados(numeroFeriados);
imprimeFeriados(proximosFeriados);