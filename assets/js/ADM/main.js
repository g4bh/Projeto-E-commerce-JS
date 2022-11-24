function gerador() {
    const tabelinha = document.createElement("table")
    const tabelinhabody = document.createElement("tbody")

    for (i = 0; i < 2; i++){
        const linha = document.createElement("tr")

        for (g = 0; g < 2; g ++){
            const celula = document.createElement("td")
            const conteudo = document.createTextNode(`olá`)

            celula.appendChild(conteudo)
            linha.appendChild(celula)
        }

        tabelinhabody.appendChild(linha)
    }

    tabelinha.appendeChild(tabelinhabody)
}