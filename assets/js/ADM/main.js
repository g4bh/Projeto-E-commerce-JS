var corpinho = document.querySelector(".tabelinhas")

function gerador() {
    const tabelinha = document.createElement("table")
    const tabelinhabody = document.createElement("tbody")

    for (i = 0; i < 2; i++){
        const linha = document.createElement("tr")

        for (g = 0; g < 2; g ++){
            const celula = document.createElement("td")
            const tituluzin = document.createElement("th")
            const nomizin = document.createTextNode("Nome do produto")
            const conteudo = document.createTextNode(`olá`)
            
            tituluzin.classList.add("table-th")
            tituluzin.appendChild(nomizin)
            celula.appendChild(tituluzin)
            celula.appendChild(conteudo)
            linha.appendChild(celula)
        }
        linha.classList.add("linhazinha")
        tabelinhabody.appendChild(linha)
        tabelinha.classList.add("tabelinha")

    }
    tabelinha.appendChild(tabelinhabody)
    tabelinha.classList.add("sessao-produto")
    corpinho.appendChild(tabelinha)
}