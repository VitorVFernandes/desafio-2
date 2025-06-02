function ehDataValida(dia, mes, ano){
    const data = new Date(ano, mes - 1, dia);
    return data.getDate() === dia &&
    data.getMonth() === mes - 1 &&
    data.getFullYear() === ano;
}

console.log(ehDataValida(21, 5, 2007))