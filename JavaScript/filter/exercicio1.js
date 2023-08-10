const produtos = [
    { id: 1, nome:"Açucar", ativo: true, valor: 2.00},
    { id: 2, nome: "Sal", ativo: false, valor: 1.50},
    { id: 3, nome: "Farinha", ativo: false, valor: 4.00},
    { id: 4, nome: "Feijão", ativo: true, valor: 7.00}
];

function verificaProdutoAtivo(produto) {
    return produto.ativo == true;
};

const produtosAtivos = produtos.filter(verificaProdutoAtivo);

console.log(produtosAtivos);