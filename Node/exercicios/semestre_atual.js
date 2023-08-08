const express = require('express');
const app = express();

let data = new Date();
let mes_atual = data.getMonth();


let semestre_atual;

if (mes_atual <= 5) {
    semestre_atual = {semestre: 'Primeiro semestre'};
} else {
    semestre_atual = {semestre: 'Segundo semestre'};
};

app.get('/', (req,res) => {
    res.json(semestre_atual);
});

app.listen(8080, () => {
    console.log('Servidor iniciado ' + semestre_atual);
});