//pega o checkbox
const botaoDark = document.getElementById('checkbox')

//verifica se tem no localstorage a seleção do dark theme
if (localStorage.getItem('data-theme') == 'dark'){
    botaoDark.checked = true
}

// Liga a função ao chelbox
botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (!botaoDark.checked) {
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
})

//cria a função de mudar para modo claro
const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('data-theme', 'light')
}

//cria a função de mudar para modo escuro
const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('data-theme', 'dark')
}

//se caso tiver localstorage, vai fazer a alteração de tema
let theme = localStorage.getItem('data-theme')

if (theme == 'dark') changeThemeToDark()

