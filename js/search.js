"use strict";

const search = () =>{
    const input = document.querySelector(`.form-control > input`);
    const btn = document.querySelector(`.form-control > button`);
    
    const render = (array) => {
        const list = document.querySelector(`.long-goods-list`);

        list.innerHTML = '';

        array.forEach(good => {
            const div = document.createElement(`div`);
            div.classList.add(`col-lg-3`, `col-sm-6`);
            div.innerHTML = `
                <div class="goods-card">
                    <span class="${good.label? 'label': 'd-none'}">${good.label}</span>
                    <img src="db/${good.img}" alt="image: ${good.category}" class="goods-image">
                    <h3 class="goods-title">${good.name}</h3>
                    <p class="goods-description">${good.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                        <span class="button-price">$${good.price}</span>
                    </button>
                </div>
            `
            list.append(div)
        })


    }

    const getGoods = async(value) =>{
        try{
            const data = await fetch(`https://intensive-13-11-default-rtdb.firebaseio.com/db.json`);
            const response = await data.json()
            const regExp = new RegExp(value, 'gi')
            const array = response.filter(el => regExp.test(el.name));
            if(window.location.pathname !== '/C:/Users/31391/Desktop/Willberries/goods.html'){
                window.location.href = 'goods.html'
            } else{
                render(array)
            }
        } catch(err){
            console.error(err)
        }
    }


    btn.addEventListener('click', () =>{
        getGoods(input.value)
    })
}

search()