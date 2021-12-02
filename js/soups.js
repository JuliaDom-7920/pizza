$(document).ready(function () {
    // Object Soups
    const soups = [
        {
            img: '../img/products/soups/soup-1.webp',
            title: 'Грибний крем-суп',
            description: 'Вершковий крем-суп з печерицями',
            weight: '250г',
            price: 69,
            button: 'Замовити'
        },
        {
            img: '../img/products/soups/soup-2.webp',
            title: 'Консоме з куркою та фетучіні',
            description: 'Бульйон з курятиною та фетучіні',
            weight: '260г',
            price: 59,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_soups() {
        for (let i = 0; i < soups.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#soups');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${soups[i].img}" alt="${soups[i].title}" title="${soups[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${soups[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${soups[i].components}">${soups[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${soups[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${soups[i].price}</span>` +
                `<button class="btn btn-buy">${soups[i].button}</button>` +
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