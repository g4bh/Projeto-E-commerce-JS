inicializarLoja = () => {
  var containerProdutos = document.getElementById('produtos');
  bolosJson.map((val)=>{
    containerProdutos.innerHTML+= ` 
    
    <section class="content-produto-section">
      <div class="card-produto">
        <div class="info-produto-card">
        <div class="imagem-produto-card"><img src="`+val.img+`"/></div>
          <div class="info-produto-card-content">
            <h2 class="nome-produto">`+val.name+`</h2>
            <h3 class="sabor-produto">`+val.description+`</h3>
            <p class="preco-produto">R$`+val.price+`,00</p>
            <a key="`+val.id+`" href="#" id="botao-carrinho-produto">Adicionar ao carrinho</a>
          </div>
        </div>
      </div>
    `; //div para adicionar cada produto
  })
}

inicializarLoja();

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho2');
  containerCarrinho.innerHTML = "";
  bolosJson.map((val)=>{
    if(val.quantidade > 0){
    containerCarrinho.innerHTML+= `
    
    
    <div class="carrinho2">
      <button class="excluir">X</button>
      <img src="`+val.img+`" class="img-produto-card">
      <h2>`+val.name+`</h2>
      <p>Quantidade: `+val.quantidade+`</p>
      <h3>Preço: R$`+val.price+`,00 </h3>
      <hr>
    </div>

    `;
    }
  })
 

}

var links = document.getElementsByTagName('a');

// soma quantidade
for(var i = 0; i < links.length; i++){
  links[i].addEventListener("click",function(){ //realiza um evento
    let key = this.getAttribute('key'); //mostra o valor dentro da key
    bolosJson[key].quantidade++;
    atualizarCarrinho();
    return false;
  })
}

const divCarrinho = document.querySelector("#carrinho2")
// para apagar o div quando o botão excluir for clicado
divCarrinho.onclick = function(event){
  if(event.target.classList.contains('excluir'))
  {
    event.target.parentElement.remove() //remove a tag pai do elemento excluir
    bolosJson.map((val)=>{
    val.quantidade=0; //mapeia a qtd e dá valor zero
    })  
  }
}

