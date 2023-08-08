const express = require('express');
const app = express();

const triangulo = require('./index');

app.get('/', (req,res) => {
    let base = req.query.base;
    let altura = req.query.altura;

    let areaTriangulo = triangulo.calcularAreaTriangulo(base, altura);

    res.json({area: areaTriangulo });
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data);
});

