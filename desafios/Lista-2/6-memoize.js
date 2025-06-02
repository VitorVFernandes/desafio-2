function memoizar(funcao) {
  const cache = new Map(); 

  return function(...argumentos) {
    const chave = JSON.stringify(argumentos); 

    if (cache.has(chave)) {
      return cache.get(chave); 
    }

    const resultado = funcao(...argumentos); 
    cache.set(chave, resultado); 
    return resultado;
  };
}

function somaLenta(a, b) {
  console.log('Calculando...');
  return a + b;
}

const somaMemoizada = memoizar(somaLenta);

console.log(somaMemoizada(2, 3)); 
console.log(somaMemoizada(2, 3)); 
