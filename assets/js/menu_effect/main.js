(function(){
    var menu = document.getElementById('menu');
        window.addEventListener('scroll', function(){
            if(window.scrollY > 0) menu.classList.add('menuAlterado');
            else menu.classList.remove('menuAlterado')
        })
    }
)();
