function debounce(fn, delay){
    let timeout;

    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function salvarBusca(texto) {
    console.log("Salvando:", texto);
}

const buscaDebounced = debounce(salvarBusca, 500);

buscaDebounced("V");
buscaDebounced("Vi");
buscaDebounced("Vit");
buscaDebounced("Vito");
buscaDebounced("Vitor");