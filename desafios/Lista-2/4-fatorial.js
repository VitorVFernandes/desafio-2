function fatorial(n){
    if(n < 0){
        console.error("Não existe fatorial menor que zero!");
    } else if(n === 0){
        return 1
    } else{
         return n * fatorial(n - 1);
        }
}

    console.log(fatorial(7))
