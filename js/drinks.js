$(document).ready(function () {
    // Object Drinks
    const drinks = [
        {
            img: '../img/products/drinks/drink-1.webp',
            title: 'Martini Fiero & Tonic коктейль',
            description: 'Вермут Martini Fiero, Тонік Evervess, долька апельсина',
            weight: '200мл',
            price: 110,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-2.webp',
            title: 'Spritz',
            description: 'Легкий, солодкий, ігристий мікс з ароматними нотами цедри для ігривого настрою!',
            weight: '200мл',
            price: 120,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-3.webp',
            title: 'Negroni',
            description: 'Контрастне поєднання травяного типу гіркоти та солодкості, доповнене цедровими нотами',
            weight: '200мл',
            price: 140,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-4.webp',
            title: 'Gin Garden',
            description: 'Тонко збалансований мікс кислоти та гіркоти, неочікувано доповнений слайсом огірка',
            weight: '200мл',
            price: 120,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-5.webp',
            title: 'Leffe темне',
            description: 'Пиво темне ЖБ',
            weight: '500мл',
            price: 85,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-6.webp',
            title: 'Hoegaarden Blanche',
            description: 'Світле нефільтроване пиво',
            weight: '500мл',
            price: 85,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-7.webp',
            title: 'Stella Artois б/а',
            description: 'Безалкогольне світле пиво',
            weight: '500мл',
            price: 59,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-8.webp',
            title: 'Stella Artois',
            description: 'Світле пиво',
            weight: '500мл',
            price: 59,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-9.webp',
            title: 'Villa Tinta, Розе',
            description: 'Рожеве напівсолодке / Україна',
            weight: '750мл',
            price: 229,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-10.webp',
            title: 'Князя Трубецького, Піно Нуар',
            description: 'Червоне сухе / Україна',
            weight: '750мл',
            price: 329,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-11.webp',
            title: 'Villa Tinta, Совіньйон Блан',
            description: 'Біле сухе / Україна',
            weight: '750мл',
            price: 229,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-12.webp',
            title: 'Martini Bianco',
            description: 'Білий солодкий вермут / Італія',
            weight: '1л',
            price: 399,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-13.webp',
            title: 'Горілка Finlandia',
            description: 'Скандинавська горілка',
            weight: '500мл',
            price: 350,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-14.webp',
            title: 'Сік Sandora',
            description: 'Сік в асортименті',
            weight: '950мл',
            price: 65,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-15.webp',
            title: 'Pepsi',
            description: 'Солодкий безалкогольний газований напій',
            weight: '500мл',
            price: 35,
            button: 'Замовити'
        },
        {
            img: '../img/products/drinks/drink-16.webp',
            title: 'Моршинська',
            description: 'Негазована вода',
            weight: '330мл',
            price: 39,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_drinks() {
        for (let i = 0; i < drinks.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#drinks');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${drinks[i].img}" alt="${drinks[i].title}" title="${drinks[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${drinks[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${drinks[i].components}">${drinks[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${drinks[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${drinks[i].price}</span>` +
                `<button class="btn btn-buy">${drinks[i].button}</button>` +
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