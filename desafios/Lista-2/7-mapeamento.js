let produtos = [
    {nome: "controle", preco: 200},
    {nome: "assinatura", preco: 100},
    {nome: "game", preco: 150}
]

function valorcrescente(produtos){
    return produtos
            .sort((a,b) => a.preco - b.preco)
            .map(i => i.nome);
}

let emordem = valorcrescente(produtos)

console.log(emordem)