const modal = document.querySelector('.modal')
const cartBtn = document.querySelector('.nav .right')
const cartwrapper = document.querySelector('.cart-wrapper')
const cartModal = document.querySelector('.cart-modal')
const closeBtn = document.querySelector('.bx-x')

document.addEventListener('DOMContentLoaded', ()=> modal.classList.add('active'))

cartBtn.addEventListener('click', ()=> {
    cartModal.classList.add('active')
    cartwrapper.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{
    cartModal.classList.remove('active')
    cartwrapper.classList.remove('active')
})