let vendas =[
    {cliente: "vitor", total: 100},
    {cliente: "karine", total: 150},
    {cliente: "vitor", total: 80}
]

function somaPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    if (acc[venda.cliente]) {
      acc[venda.cliente] += venda.total;
    } else {
      acc[venda.cliente] = venda.total;
    }
    return acc;
  }, {});
}

let totalclientes = somaPorCliente(vendas);

console.log(totalclientes)
