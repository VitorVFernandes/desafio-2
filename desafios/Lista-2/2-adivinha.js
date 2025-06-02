function adivinha(){
    const prompt = require(`prompt-sync`)();
    const numeroadivinha = Math.floor(Math.random() * 100);
    let tentativa;
    let tentativas = 0;

    while(tentativa != numeroadivinha){
        tentativa = Number(prompt("Escolha um numero de 1 a 100:"));
        tentativas++;

        if(tentativa < numeroadivinha){
            console.log("Mais alto!")
        } else if(tentativa > numeroadivinha){
            console.log("Mais baixo!")
        } else {
            console.log(`Parabens, voce acertou em: ${tentativas} tentativas.`)
        }
    }
}

console.log(adivinha())