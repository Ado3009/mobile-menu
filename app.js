let mobileBtn = document.querySelector('button')

mobileBtn.addEventListener('click', ()=>{
    let lista = document.querySelector('.main-list')
    if( mobileBtn.innerText === 'Menu'){
        lista.style.display = 'block'
        mobileBtn.innerText = 'Close'
    }else{
        lista.style.display = 'none'
        mobileBtn.innerText = 'Menu'
    }
})