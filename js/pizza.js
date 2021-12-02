$(document).ready(function () {
    // Object Pizza
    const pizza = [
        {
            img: '../img/products/pizza/pizza-1.webp',
            icon: '../img/icons/meat.png',
            iconTitle: 'М’ясна',
            title: 'Дабл Пепероні',
            description: 'Подвійна порція Пепероні, соус Класичний',
            components: ['Пепероні', 'соус Класичний'],
            weight: '510г',
            price: 179,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-2.webp',
            icon: '../img/icons/vega.png',
            iconTitle: 'Вегетаріанська',
            title: 'Маргарита',
            description: 'Томати, Моцарела, соус Песто, соус Класичний',
            components: ['Томати', 'Моцарела', 'соус Песто', 'соус Класичний'],
            weight: '520г',
            price: 181,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-3.webp',
            icon: '../img/icons/meat.png',
            iconTitle: 'М’ясна',
            title: 'Кантрі',
            description: 'Шинка, Пепероні, Томати, Печериці, соус Класичний',
            components: ['Шинка', 'Пепероні', 'Томати', 'Печериці', 'соус Класичний'],
            weight: '555г',
            price: 211,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-4.webp',
            icon: '../img/icons/fair.png',
            iconTitle: 'Гостра',
            title: 'Дьябло',
            description: 'Подвійні мисливські ковбаски, Халапеньо, соус Барбекю',
            components: ['Мисливські ковбаски', 'Халапеньо', 'соус Барбекю'],
            weight: '540г',
            price: 195,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-5.webp',
            icon: '../img/icons/meat.png',
            iconTitle: 'М’ясна',
            title: 'Mamamia!',
            description: 'Ананаси, Шинка, Пепероні, Маринований солодкий перець, Класичний соус',
            components: ['Ананаси', 'Шинка', 'Пепероні', 'Перець маринований', 'соус Класичний'],
            weight: '520г',
            price: 211,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-6.webp',
            icon: '../img/icons/vega.png',
            iconTitle: 'Вегетеріанська',
            title: 'Порчіні',
            description: 'Соус Рікота, Гриби запечені білі та Печериці з цибулею, Печериці свіжі, Рукола',
            components: ['Соус Рікота', 'Маринована Цибуля', 'Печериці', 'Рукола'],
            weight: '500г',
            price: 205,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-7.webp',
            icon: '../img/icons/meat.png',
            iconTitle: 'М’ясна',
            title: 'Гаваї',
            description: 'Куряче філе, Маринований солодкий перець, Ананаси, Класичний соус',
            components: ['Куряче філе', 'Перець маринований', 'Ананаси', 'соус Класичний'],
            weight: '510г',
            price: 183,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-8.webp',
            icon: '../img/icons/meat.png',
            iconTitle: 'М’ясна',
            title: 'Барбекю',
            description: 'Бекон, Телятина, Печериці, Маринована Цибуля, соус Барбекю',
            components: ['Бекон', 'Телятина', 'Печериці', 'Маринована Цибуля', 'соус Барбекю'],
            weight: '520г',
            price: 211,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-9.webp',
            icon: '../img/icons/meat.png',
            iconTitle: 'М’ясна',
            title: 'Годфазер',
            description: 'Мисливські ковбаски, Корнішони, Бекон, Цибуля, Печериці, соус Барбекю',
            components: ['Мисливські ковбаски', 'Корнішони', 'Бекон', 'Маринована Цибуля', 'Печериці', 'соус Барбекю'],
            weight: '540г',
            price: 227,
            button: 'Замовити'
        },
        {
            img: '../img/products/pizza/pizza-10.webp',
            icon: '../img/icons/meat.png',
            title: 'Модильяні',
            description: 'Подвійна Качка, Підвійний Маринований перець, Фета, Каперси, соус Класичний',
            components: ['Філе качки', 'Перець маринований', 'Фета', 'Каперси', 'соус Класичний'],
            weight: '550г',
            price: 277,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_pizza() {
        for (let i = 0; i < pizza.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#pizza');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductIcon = $(`<img class="card-product__icon" src="${pizza[i].icon}" alt="${pizza[i].iconTitle}" title="${pizza[i].iconTitle}" >`);
            let cardProductImg = $(`<img class="card-product__img"src="${pizza[i].img}" alt="${pizza[i].title}" title="${pizza[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${pizza[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${pizza[i].components}">${pizza[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${pizza[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${pizza[i].price}</span>` +
                `<button class="btn btn-buy">${pizza[i].button}</button>` +
            '</div>');

            // -- Додавання елементів в HTML --
            cardProductBox
                .append(cardProductIcon)
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