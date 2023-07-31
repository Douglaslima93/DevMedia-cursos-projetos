const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({mensagem: 'Hello World 2023'});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});