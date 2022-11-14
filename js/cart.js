"use strict";

const cart = () =>{
    const btn = document.querySelector(`.button-cart`);
    const modal = document.getElementById(`modal-cart`);
    const close = modal.querySelector(`.modal-close`);

    btn.addEventListener('click', () => {
        modal.style.display = 'flex'
    })
    close.addEventListener('click', () =>{
        modal.style.display = ''
    })

}

cart()