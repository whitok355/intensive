"use strict";

const getGoods =  () => {

    const links = document.querySelectorAll(`.navigation-link`);

    const getData = async () =>{
        try{
            const data = await fetch(`https://intensive-13-11-default-rtdb.firebaseio.com/db.json`);
            const response = await data.json();
            localStorage.db = JSON.stringify(response)
        } catch(err){
            console.log(err)
        }
    }

    links.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault()
        getData()
    }))
}

getGoods();