function paresParaObjeto(pares){
    return Object.fromEntries(pares)
}

let pares = [
    ['nome', 'vh'],
    ['time', 'inter'],
    ['estado', 'RS']
]

console.log(paresParaObjeto(pares))

/////////////////////

function objetosparapares(objetos){
    return Object.entries(objetos)
}

let objetos = {
    nome: 'vh',
    cidade: 'RS',
    time: 'inter'
}

console.log(objetosparapares(objetos))