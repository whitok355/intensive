"use strict";

const search = () =>{
    const search = document.querySelector(`.search-block > input`);
    const btn = document.querySelector(`.search-block > button`)

    btn.addEventListener('click', (e) => {
        console.log(search.value)
    })
}

search()