$(document).ready(function () {
    // Object Combo
    const combo = [
        {
            img: '../img/products/combo/combo-1.webp',
            title: 'Кантрі',
            description: 'Піца Кантрі M, Картопля фрі, Крила Баффало, діп Барбекю, діп Вершковий з Дорблю.',
            weight: '1165г',
            price: 405,
            button: 'Замовити'
        },
        {
            img: '../img/products/combo/combo-2.webp',
            title: 'Барбекю',
            description: 'Піца Барбекю M, крильця Баффало, Цибулеві кільця, діп Барбекю, діп Часниковий. ',
            weight: '1110г',
            price: 419,
            button: 'Замовити'
        },
        {
            img: '../img/products/combo/combo-3.webp',
            title: 'Meatlovers',
            description: 'Піца Міт Супрім M, крильця Баффало, лазанья Болоньезе, діп Барбекю та діп Вершковий з Дорблю. ',
            weight: '1470г',
            price: 525,
            button: 'Замовити'
        },
        {
            img: '../img/products/combo/combo-4.webp',
            title: 'Cheese Fan',
            description: 'Піца Чіз Супрім M, Моцарелла Фрі, Цибулеві кільця, діп Журавлиновий, діп Вершковий з Дорблю.  ',
            weight: '930г',
            price: 435,
            button: 'Замовити'
        },
        {
            img: '../img/products/combo/combo-5.webp',
            title: 'Vegi',
            description: 'Піца Вірджин M, Цибулеві кільця Фрі, Картопля Фрі, діп Барбекю, діп Вершковий з Дорблю. ',
            weight: '1030г',
            price: 355,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_combo() {
        for (let i = 0; i < combo.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#combo-box');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${combo[i].img}" alt="${combo[i].title}" title="${combo[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${combo[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${combo[i].components}">${combo[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${combo[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${combo[i].price}</span>` +
                `<button class="btn btn-buy">${combo[i].button}</button>` +
            '</div>');

            // -- Додавання елементів в HTML --
            cardProductBox
                .append(cardProductImg)
                .append(cardProductTitle)
                .append(cardProductDescription)
                .append(cardProductWeight)
                .append(cardProductPriceBtnBuy);
            cardProductWrapper
                .append(cardProductBox);
        }
    });   
});