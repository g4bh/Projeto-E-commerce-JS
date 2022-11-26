var corpinho = document.querySelector(".tabelinhas")

function gerador() {
    const tabelinha = document.createElement("table")
    const tabelinhabody = document.createElement("tbody")

    for (i = 0; i < 1; i++){
        const linha = document.createElement("tr")

        for (g = 0; g < 3; g ++){
            const celula = document.createElement("td")
            const tituluzin = document.createElement("th")
            const title1 = document.createTextNode("Nome do produto")
            const title2 = document.createTextNode("Recheio")
            const title3 = document.createTextNode("Preço (em reais)")
            const conteudo = document.createElement("input")
            
            tituluzin.classList.add("table-th")
            
            if( g == 0 ){
                tituluzin.appendChild(title1)
            }else{
                if( g == 1){
                    tituluzin.appendChild(title2)
                }else{
                    tituluzin.appendChild(title3)
                }
            }

            conteudo.classList.add("espaco-bottom")
            celula.appendChild(tituluzin)
            celula.appendChild(conteudo)
            linha.appendChild(celula)
        }

        linha.classList.add("linhazinha")
        tabelinhabody.appendChild(linha)

    }

    
    const editar = document.createElement("button")
    const excluir = document.createElement("button")


    tabelinha.appendChild(tabelinhabody)
    tabelinha.classList.add("sessao-produto")
    corpinho.appendChild(tabelinha)
    corpinho.classList.add("first-page-sessao-cadastro")


}