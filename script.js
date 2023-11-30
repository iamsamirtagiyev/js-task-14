const modal = document.querySelector('.modal')
const cartBtn = document.querySelector('.nav .right')
const cartwrapper = document.querySelector('.cart-wrapper')
const cartModal = document.querySelector('.cart-modal')
const closeBtn = document.querySelector('.bx-x')
const menuIcon = document.querySelector('.bx-menu')
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const scroll = document.querySelector('.scroll')
const productsItem1 = document.querySelector('.bottom-1')
const productsItem2 = document.querySelector('.bottom-2')

const products1 = [
    {url: './assets/toy1.png', names: 'Teddy Bear', price: 30.00},
    {url: './assets/toy3.png', names: 'Mega Plush Toy', price: 38.00},
    {url: './assets/toy4.png', names: 'Cute Dog', price: 24.00},
    {url: './assets/toy5.png', names: 'Little Friend', price: 27.00},
]

const products2 = [
    {url: './assets/toy2.png', names: 'Happy Flower', price: 30.00},
    {url: './assets/toy6.png', names: 'Lift Machine', price: 38.00},
    {url: './assets/toy7.png', names: 'Wooden Camera', price: 24.00},
    {url: './assets/toy8.png', names: 'Little Rabbit', price: 27.00},
]

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
        menuIcon.style.color = 'white'
        menu.style.background = 'black'
    }
    else{
        nav.style.background = 'white' 
        nav.style.height = '80px'
        nav.querySelector('.logo').style.color = 'black'
        nav.querySelectorAll('li').forEach(element => element.classList.remove('active'))
        nav.querySelector('.right').style.color = 'black'
        menuIcon.style.color = 'black'
        menu.style.background = 'white'
    }
})

scroll.onclick = ()=>{
    window.scroll({
        top: 300,
        behavior: "smooth",
      });
}

products1.forEach(item =>{
    productsItem1.innerHTML += `
    <div class="product">
        <div class="product-img">
            <img src='${item.url}'>
        </div>
        <div class="text">
            <span class="name">${item.names}</span>
            <span class="price">$${item.price}USD</span>
        </div>
    </div>
    `
})

products2.forEach(item =>{
    productsItem2.innerHTML += `
    <div class="product">
        <div class="product-img">
            <img src='${item.url}'>
        </div>
        <div class="text">
            <span class="name">${item.names}</span>
            <span class="price">$${item.price}USD</span>
        </div>
    </div>
    `
})