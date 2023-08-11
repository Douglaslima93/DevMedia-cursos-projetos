let tabela = [
    {equipe: "Time Azul", pontos: 25},
    {equipe: "Time Verde", pontos: 47},
    {equipe: "Time Amarelo", pontos: 39},
    {equipe: "Time Vermelho", pontos: 16}
];

function ordenarMaisPontos(a, b){
    return b.pontos - a.pontos;
};

tabela.sort(ordenarMaisPontos);

for(let i = 0; i < tabela.length; i++){
    let posicao = i+1;
    console.log(posicao + " | " + tabela[i].equipe + " - " + tabela[i].pontos + " pts ");
}