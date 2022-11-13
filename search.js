"use strict";

const search = () =>{
    const search = document.querySelector(`.form-control`);

    search.addEventListener('input', () => {
        console.log("ввод")
    })
}

search()