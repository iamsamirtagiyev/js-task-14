const modal = document.querySelector('.modal')
const cartBtn = document.querySelector('.nav .right')
const cartwrapper = document.querySelector('.cart-wrapper')
const cartModal = document.querySelector('.cart-modal')
const closeBtn = document.querySelector('.bx-x')
const menuIcon = document.querySelector('.bx-menu')
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')

document.addEventListener('DOMContentLoaded', ()=> modal.classList.add('active'))

cartBtn.addEventListener('click', ()=> {
    cartModal.classList.add('active')
    cartwrapper.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{
    cartModal.classList.remove('active')
    cartwrapper.classList.remove('active')
})

menuIcon.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 30){
        nav.style.background = 'black'
        nav.style.height = '60px'
        nav.querySelector('.logo').style.color = 'white'
        nav.querySelectorAll('li').forEach(element => element.classList.add('active'))
        nav.querySelector('.right').style.color = 'white'
    }
    else{
        nav.style.background = 'white' 
        nav.style.height = '80px'
        nav.querySelector('.logo').style.color = 'black'
        nav.querySelectorAll('li').forEach(element => element.classList.remove('active'))
        nav.querySelector('.right').style.color = 'black'
    }
})