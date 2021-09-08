const inputEmail = document.querySelector('.input-email');
const formEmail = document.querySelector('.form-email')
const btn = document.querySelector('button')
const btnError = document.querySelector('.icon-error')
const wrapEmail = document.querySelector('.wrap-content-button')

document.addEventListener('DOMContentLoaded',function(){
    btnError.style.display = 'none'
})

formEmail.addEventListener('submit',function(e){
    let isTrueEmailValid = validEmail(inputEmail.value)
    if(!inputEmail.value || !isTrueEmailValid){
        e.preventDefault();
        console.log(inputEmail.value);
        btnError.style.display = 'flex';
    }

})

function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}