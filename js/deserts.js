$(document).ready(function () {
    // Object Deserts
    const deserts = [
        {
            img: '../img/products/deserts/desert-1.webp',
            title: 'Брауні з вишенькою',
            description: 'Гарячий десерт на основі шоколаду з вишнями',
            weight: '120г',
            price: 89,
            button: 'Замовити'
        },
        {
            img: '../img/products/deserts/desert-2.webp',
            title: 'Десерт Тірамісу',
            description: 'Бісквіт Савоярді, кавовий сироп з Амаретто, крем з Маскарпоне, какао',
            weight: '240г',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/products/deserts/desert-3.webp',
            title: 'Сіннамон Роллс',
            description: 'Cвіжа випічка з корицею та розмариновим сиропом під вершковою карамеллю ',
            weight: '185г',
            price: 55,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_deserts() {
        for (let i = 0; i < deserts.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#deserts');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${deserts[i].img}" alt="${deserts[i].title}" title="${deserts[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${deserts[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${deserts[i].components}">${deserts[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${deserts[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${deserts[i].price}</span>` +
                `<button class="btn btn-buy">${deserts[i].button}</button>` +
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