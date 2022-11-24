const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const lightTheme = {
    ' background': 'linear-gradient(116.34deg, #FFDDE4 10.06%, #FFFFFF 96.59%)'
}

const darkTheme = {
    '--background': 'linear-gradient(116.63deg, #B64A5E 5.16%, #471B23 97.77%)' //na div .first
}

inputContainer.addEventListener('change', function(){
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){
    //alterando o tema

    console.log(Object.entries(theme))
    for (let[property, value] of Object.entries(theme)) {
        changeProperty(property, value)
    }
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}