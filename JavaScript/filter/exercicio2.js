const carros = [
    { marca: "Fiat", modelo: "Uno", anoFabricacao: 2015},
    { marca: "GM", modelo: "Onix", anoFabricacao: 2018},
    { marca: "Ford", modelo: "KA+", anoFabricacao: 2018},
    { marca: "VW", modelo: "UP", anoFabricacao: 2022},
    { marca:"Nissan", modelo: "Sentra",
anoFabricacao: 2013}
];

function verificaMarca(carro){
    return (carro.marca == "Fiat");
};

const carrosFiat = carros.filter(verificaMarca);

console.log(carrosFiat)