// bolosJson.map((item) =>{
//   let boloItem = document.querySelector('.card-produto').cloneNode(true)

//   document.querySelector('.content-produto-section').append(boloItem)

//   boloItem.querySelector('.imagem-produto-card img').src = item.img;
//   boloItem.querySelector('.nome-produto').innerHTML = item.name;
//   boloItem.querySelector('.sabor-produto').innerHTML = item.description;
//   boloItem.querySelector('.preco-produto').innerHTML = `R$ ${item.price.toFixed(2)}`;
// })

let bolosJson = 
[ 
  {
    id: 0,
    name: 'Bolo de Chocolate',
    img: 'assets/img/bolos/bolo1.png',
    price: 2.00,
    description: 'Bolo de chocolate com recheio de chocolate',
    type: 'chocolate',
    quantidade: 0 
  },
  {
    id: 1,
    name: 'Bolo de Morango',
    img: 'assets/img/bolos/bolo2.png',
    price: 2.00,
    description: 'Bolo branco com recheio de morango',
    type: 'morango',
    quantidade: 0
  },
  {
    id: 2,
    name: 'Bolo Prestígio',
    img: 'assets/img/bolos/bolo3.png',
    price: 2.00,
    description: 'Bolo de chocolate com recheio de coco',
    type: 'coco',
    quantidade: 0
   },
  {
   id: 3,
   name: 'Bolo Red Velvet',
   img: 'assets/img/bolos/bolo4.png',
   price: 2.00,
   description: 'Bolo de massa vermelha com creme ',
   type:'morango',
   quantidade: 0
  }
]

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
            <button id="botao-carrinho-produto"><a key="`+val.id+`" href="#">Adicionar ao carrinho</a></button>
          </div>
        </div>
      </div>
    `;
  })
}

inicializarLoja();

// somaProdutos = () => {

// }

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho');
  containerCarrinho.innerHTML = "";
  bolosJson.map((val)=>{
    if(val.quantidade > 0){
    containerCarrinho.innerHTML+= `
    
    <div class="carrinho">
    <button class="excluir">X</button>
    <img src="`+val.img+`" class="imagem-produto-card">
    <h2>`+val.name+`</h2>
    <p>quantidade: `+val.quantidade+`+</p>
    <h3>R$`+val.price+` unid</h3>
    </div>
    <hr>
    <div class="container-total">
        <h2>VALOR TOTAL</h2>
        <h3>R$15,87</h3>
    </div>

    <p>`+val.name+` | quantidade: `+val.quantidade+`+</p>
    <hr></hr>
    `;
    }
  })
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
  links[i].addEventListener("click",function(){
    let key = this.getAttribute('key');
    bolosJson[key].quantidade++;
    atualizarCarrinho();
    return false;
  })
}
