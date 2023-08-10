const produtos = [
    { id: 1, nome:"Açucar", estoque: 100, valor: 2.00},
    { id: 2, nome:"Álcool", estoque: 50, valor: 9.95},
    { id:3, nome:"Luvas descartaveis", estoque: 1000, valor: 2.50}
];

function imprimirProdutos(produto, index) {
    console.log(index + ' - ' + produto.nome);
}

produtos.forEach(imprimirProdutos);
