// Nó da árvore
class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

// Árvore Binária de Busca
class ArvoreBinaria {
    constructor() {
        this.raiz = null;
    }

    // Inserir valor na árvore
    inserir(valor) {
        const novoNo = new No(valor);

        if (this.raiz === null) {
            this.raiz = novoNo;
        } else {
            this._inserirRecursivo(this.raiz, novoNo);
        }
    }

    // Função interna para inserir de forma recursiva
    _inserirRecursivo(noAtual, novoNo) {
        if (novoNo.valor < noAtual.valor) {
            if (noAtual.esquerda === null) {
                noAtual.esquerda = novoNo;
            } else {
                this._inserirRecursivo(noAtual.esquerda, novoNo);
            }
        } else {
            if (noAtual.direita === null) {
                noAtual.direita = novoNo;
            } else {
                this._inserirRecursivo(noAtual.direita, novoNo);
            }
        }
    }

    // Percurso em ordem (esquerda -> raiz -> direita)
    emOrdem(no = this.raiz) {
        if (no !== null) {
            this.emOrdem(no.esquerda);
            console.log(no.valor);
            this.emOrdem(no.direita);
        }
    }

    // Buscar um valor na árvore
    buscar(valor, no = this.raiz) {
        if (no === null) {
            return false;
        }

        if (valor === no.valor) {
            return true;
        }

        if (valor < no.valor) {
            return this.buscar(valor, no.esquerda);
        } else {
            return this.buscar(valor, no.direita);
        }
    }
}

// Testando
const arvore = new ArvoreBinaria();
arvore.inserir(50);
arvore.inserir(30);
arvore.inserir(70);
arvore.inserir(20);
arvore.inserir(40);
arvore.inserir(60);
arvore.inserir(80);

console.log("Valores em ordem:");
arvore.emOrdem(); // Deve imprimir os valores ordenados

console.log("Buscar 40:", arvore.buscar(40)); // true
console.log("Buscar 100:", arvore.buscar(100)); // false
