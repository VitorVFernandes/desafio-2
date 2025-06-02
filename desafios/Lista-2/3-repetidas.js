const frase = "opa opa tudo bom bom";
const palavras = frase.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    let repetida = false;

    for (let j = 0; j < unicas.length; j++) {
        if (palavraAtual === unicas[j]) {
            repetida = true;
            break;
        }
    }

    if (!repetida) {
        unicas.push(palavraAtual);
    }
}

console.log(unicas); 