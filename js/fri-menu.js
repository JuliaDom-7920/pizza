$(document).ready(function () {
    // Object Fri
    const fri = [
        {
            img: '../img/products/fri/fri-1.webp',
            title: 'Крильця Баффало',
            description: 'Крильця з соусом Луїзіана, смажені в паніровці',
            weight: '150г',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/products/fri/fri-2.webp',
            title: 'Крила Мадрас Чікен',
            description: 'Крильця в соусі Карі',
            weight: '150г',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/products/fri/fri-3.webp',
            title: 'Моцарела фрі',
            description: 'Піца Міт Супрім M, крильця Баффало, лазанья Болоньезе, діп Барбекю та діп Вершковий з Дорблю. ',
            weight: '150г',
            price: 90,
            button: 'Замовити'
        },
        {
            img: '../img/products/fri/fri-4.webp',
            title: 'Картопля фрі',
            description: 'Картопля, смажена у фритюрі  ',
            weight: '150г',
            price: 65,
            button: 'Замовити'
        },
        {
            img: '../img/products/fri/fri-5.webp',
            title: 'Цибулеві кільця',
            description: 'Цибулеві кільця, смажені у фритюрі',
            weight: '150г',
            price: 79,
            button: 'Замовити'
        },
        {
            img: '../img/products/fri/fri-5.webp',
            title: 'Асорті Deep-fried',
            description: 'ТОП-5 з фрі-меню в одному наборі: Курячі крильця 2х, моцарелла фрі, картопля, цибулеві кільця',
            weight: '700г',
            price: 289,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_fri() {
        for (let i = 0; i < fri.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#fri-menu');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${fri[i].img}" alt="${fri[i].title}" title="${fri[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${fri[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${fri[i].components}">${fri[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${fri[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${fri[i].price}</span>` +
                `<button class="btn btn-buy">${fri[i].button}</button>` +
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