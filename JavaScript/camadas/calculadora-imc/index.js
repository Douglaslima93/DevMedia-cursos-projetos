import { validaPeso, validaAltura } from "./pesoAlturaValidacao.js";
import { calculadoraIMC, retornaStatusIMC } from "./calculadoraIMC.js";

let peso = 72;
let altura = 1.72;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if (verificaPesoValido && verificaAlturaValida) 
{
    let resultado = calculadoraIMC(peso, altura);
    let statusIMC = retornaStatusIMC(resultado);

    console.log("Seu IMC é: " + resultado + "e você esta " + statusIMC);
} else 
{
    console.log("Peso e Altura devem ser maior que zero");
}