const menu=document.querySelector('.menu')
const burgerButton=document.querySelector('#burger-menu')
const ipad= window.matchMedia('screen and (max-width: 500px)')
ipad.addListener(resize)

function resize(event){
    if(event.matches){
        burgerButton.addEventListener('click', hsMenu)
    }
    else{
        burgerButton.removeEventListener('click', hsMenu)
    }
}
resize(ipad)
function hsMenu(){
    if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active')
    }
    else{
        menu.classList.add('is-active')
    }
}