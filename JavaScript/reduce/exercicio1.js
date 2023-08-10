const itensCarrinho = [
    { id: 1, nome:"Açucar", qnt: 2, valor: 2.00},
    { id: 2, nome:"Álcool", qnt: 3, valor: 9.95},
    { id:3, nome:"Luvas descartaveis", qnt: 50, valor: 2.50}
];

function somarValor(total, itemCarrinho) {
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

    return total + valorTotal;
}

const valorAPagar = itensCarrinho.reduce(somarValor, 0);

console.log(valorAPagar);