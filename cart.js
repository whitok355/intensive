"use strict";

const cart = () =>{
    const btn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const close = cart.querySelector(`.modal-close`);

    btn.addEventListener('click', () => {
        cart.style.display = 'flex';
    })
    close.addEventListener('click', () =>{
        cart.style.display = '';
    })
}

cart()


