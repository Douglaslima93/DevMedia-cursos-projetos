const carros = [
    { marca: "Fiat", modelo: "Uno", anoFabricacao: 2015},
    { marca: "GM", modelo: "Onix", anoFabricacao: 2018},
    { marca: "Ford", modelo: "KA+", anoFabricacao: 2018},
    { marca: "VW", modelo: "UP", anoFabricacao: 2022},
    { marca: "Nissam", modelo: "Versa", anoFabricacao: 2023},
    { marca: "Nissam", modelo: "Sentra", anoFabricacao: 2021}
];

function retornaCarro(carro) {
    return carro.marca + ' ' + carro.modelo + ' ano: ' + carro.anoFabricacao;
}

const novosCarros = carros.map(retornaCarro);

console.log(novosCarros);
