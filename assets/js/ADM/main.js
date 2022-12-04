window.addEventListener('load', () =>{
    const CadastroProdutos = document.querySelector('#CadastroProdutos')
    const nome = document.querySelector('#nomeBolo')
    const recheio = document.querySelector('#recheioBolo')
    const preco = document.querySelector('#precoBolo')
    const ProdutoCadastrado = document.querySelector('#Cadastrados-produtos')


    CadastroProdutos.addEventListener('submit', (e) => {
        e.preventDefault();

        const coluna1 = nome.value;
        const coluna2 = recheio.value;
        const coluna3 = preco.value;

        if (!coluna1 || !coluna2 || !coluna3){
            alert('preencha a coluna')
            return
        }

        const produto = document.createElement("div")
        produto.classList.add("ProdutoCadastrado")
        const conteudoProduto = document.createElement("div")
        conteudoProduto.classList.add("produtinho")
 

        produto.appendChild(conteudoProduto)

        const nome_input = document.createElement("input")
        nome_input.type="text"
        nome_input.value = coluna1
        nome_input.setAttribute("readonly", "readonly")

        
        const recheio_input = document.createElement("input")
        recheio_input.type="text"
        recheio_input.value = coluna2
        recheio_input.setAttribute("readonly", "readonly")

        
        const preco_input = document.createElement("input")
        preco_input.type="number"
        preco_input.value = coluna3
        preco_input.setAttribute("readonly", "readonly")

        conteudoProduto.appendChild(nome_input)
        conteudoProduto.appendChild(recheio_input)
        conteudoProduto.appendChild(preco_input)


        const sessao_alteracao = document.createElement("div")

        const produto_acoes_editar = document.createElement("button")
        produto_acoes_editar.innerHTML = "Editar"
        produto_acoes_editar.classList.add('botao-editar')
        const produto_acoes_excluir = document.createElement("button")
        produto_acoes_excluir.innerHTML = "Excluir"
        produto_acoes_excluir.classList.add('botao-excluir')


        sessao_alteracao.appendChild(produto_acoes_editar)
        sessao_alteracao.appendChild(produto_acoes_excluir)

        produto.appendChild(sessao_alteracao)
        ProdutoCadastrado.appendChild(produto)

        nome.value = "";
        recheio.value = "";
        preco.value = "";



        produto_acoes_editar.addEventListener('click', () =>{
          if(produto_acoes_editar.innerText == "Editar"){
            nome_input.removeAttribute("readonly")
            recheio_input.removeAttribute("readonly")
            preco_input.removeAttribute("readonly")
            nome_input.focus()
            produto_acoes_editar.innerText = "Salvar"
          } else{
            nome_input.setAttribute("readonly", "readonly")
            recheio_input.setAttribute("readonly", "readonly")
            preco_input.setAttribute("readonly", "readonly")
            produto_acoes_editar.innerText = "Editar"
          } 
        })


        produto_acoes_excluir.addEventListener('click', () =>{
            ProdutoCadastrado.removeChild(produto)
        })
    })
})
 