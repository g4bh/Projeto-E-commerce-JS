bolosJson.map((item) =>{
  let boloItem = document.querySelector('.card-produto').cloneNode(true)

  document.querySelector('.content-produto-section').append(boloItem)

  boloItem.querySelector('.imagem-produto-card img').src = item.img;
  boloItem.querySelector('.nome-produto').innerHTML = item.name;
  boloItem.querySelector('.sabor-produto').innerHTML = item.description;
  boloItem.querySelector('.preco-produto').innerHTML = `R$ ${item.price.toFixed(2)}`;
})