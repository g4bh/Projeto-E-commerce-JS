const cep = document.querySelector('#cep')

//seleciona e insere o valor em cada campo
const showData = (result) =>{
    for(const campo in result){
        if(document.querySelector('#'+ campo)){
            document.querySelector('#'+campo).value = result[campo]
        }
    }
}


//verifica se o usuario tirou o foco no input
cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace('-', '')
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    //conecta a api
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(responde => {responde.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu errooooo' + e, message))
})