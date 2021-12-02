$(document).ready(function () {
    // Object Salads
    const salads = [
        {
            img: '../img/products/salads/salad-1.webp',
            title: 'Салат зі свіжих овочів з соусом Рікота',
            description: 'Свіжі овочі: морква, огірок,  селера, солодкий перець з сиром фета у ніжному соусі Рікота',
            weight: '290г',
            price: 115,
            button: 'Замовити'
        },
        {
            img: '../img/products/salads/salad-2.webp',
            title: 'Цезар з Пармською шинкою',
            description: 'Мікс салату, Пармська шинка, Помідори черрі, Крутони, Соус з анчоусів, Грана Падано. ',
            weight: '240г',
            price: 148,
            button: 'Замовити'
        },
        {
            img: '../img/products/salads/salad-3.webp',
            title: 'Цезар Класичний',
            description: 'З соусом з анчоусів, міксом салату, помідорами чері, крутонами та Грана Падано',
            weight: '200г',
            price: 99,
            button: 'Замовити'
        },
        {
            img: '../img/products/salads/salad-4.webp',
            title: 'Цезар з куркою',
            description: 'Мікс салату, філе курки су-від, помідори черрі, крутони, соус з анчоусів, Грана Падано.',
            weight: '280г',
            price: 158,
            button: 'Замовити'
        },
        {
            img: '../img/products/salads/salad-5.webp',
            title: 'Цезар з креветками',
            description: 'Мікс салату, креветки, помідори черрі, крутони, соус з анчоусів, Грана Падано. ',
            weight: '280г',
            price: 198,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_salads() {
        for (let i = 0; i < salads.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#salads');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${salads[i].img}" alt="${salads[i].title}" title="${salads[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${salads[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${salads[i].components}">${salads[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${salads[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${salads[i].price}</span>` +
                `<button class="btn btn-buy">${salads[i].button}</button>` +
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