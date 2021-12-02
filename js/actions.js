$(document).ready(function () {
    // Object Actions
    const actions = [
        {
            img: '../img/actions/action-1.webp',
            title: 'Електронний сертифікат',
            description: 'Сертифікат 500 грн.',
            price: 500,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-2.webp',
            title: 'Мітсупрім M + Гаваї M + 2 Pepsi',
            description: 'Спеціальний сет з найпопулярніших піц. Гаваї + Міт Супім + 2 Pepsi',
            price: 399,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-3.webp',
            title: 'Комбо Кантрі + Комбо Барбекю + 4 Pepsi',
            description: 'Величезний сет для великих компаній: комбо-бокс Кантрі + комбо-бокс Барбекю + 4 Pepsi',
            price: 699,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-4.webp',
            title: 'Годфазер L + Мамамія L + 4 банки Pepsi',
            description: 'Спеціальна пропозиція. Годфазер L + Мамамия L + 4 банки Pepsi',
            price: 589,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-5.webp',
            title: 'Обідній комбо 2 страви',
            description: 'Піца S на вибір + Салат. Мінімальне замовлення доставки - 2 комбо',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-6.webp',
            title: 'Обідній комбо 3 страви',
            description: 'Піца S на вибір + Суп + Салат. Мінімальне замовлення доставки - 2 комбо',
            price: 169,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-7.webp',
            title: 'Асорті Deep-fried',
            description: 'ТОП-5 з фрі-меню в одному наборі: Курячі крильця в 2х маринадах, моцарелла фрі, картопля, цибулеві кільця, часниковий соус',
            price: 289,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-8.webp',
            title: 'Піца Чіз Супрім L + 2 коктейлі Martini Fiero',
            description: 'Спеціальна пропозиція. Піца Чіз Супрім L + 2 коктейлі Martini Fiero & Tonic',
            price: 510,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-9.webp',
            title: 'Кантрі',
            description: 'Піца Кантрі M, Картопля фрі, Крила Баффало, діп Барбекю, діп Вершковий з Дорблю',
            price: 405,
            button: 'Замовити'
        },
        {
            img: '../img/actions/action-10.webp',
            title: 'Барбекю',
            description: 'Піца Барбекю M, крильця Баффало, Цибулеві кільця, діп Барбекю, діп Часниковий',
            price: 419,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними actions в HTML
    let j = 0;
    $(function add_actions() {
        for (let i = 0; i < actions.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#actions');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${actions[i].img}" alt="${actions[i].title}" title="${actions[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${actions[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description">${actions[i].description}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${actions[i].price}</span>` +
                `<button class="btn btn-buy">${actions[i].button}</button>` +
            '</div>');

            // -- Додавання елементів в HTML --
            cardProductBox
                .append(cardProductImg)
                .append(cardProductTitle)
                .append(cardProductDescription)
                .append(cardProductPriceBtnBuy);
            cardProductWrapper
                .append(cardProductBox);
        }
    });   
});