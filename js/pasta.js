$(document).ready(function () {
    // Object Pasta
    const pasta = [
        {
            img: '../img/products/pasta/pasta-1.webp',
            title: 'Лазанья Болоньезе',
            description: 'Паста з мясним соусом Болоньєзе, моцарелою, кедровими горішкам та сиром Грана Падано',
            weight: '280г',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/products/pasta/pasta-2.webp',
            title: 'Лазанья Фунгі',
            description: 'Паста лазанья, соус Бешамель, соус Рікотта, Вершки, Печериці, соус сирний Макчіз, гриби запечені білі та печериці, сир Моцарела, сир Пармезан',
            weight: '380г',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/products/pasta/pasta-3.webp',
            title: 'Лінгвіні по-міланські з томатом та беконом',
            description: 'Паста лінгвіні з беконом, томатами, пармезаном та спеціями у томатному соусін',
            weight: '315г',
            price: 130,
            button: 'Замовити'
        },
        {
            img: '../img/products/pasta/pasta-4.webp',
            title: 'Лінгвіні з овочами та соусом Песто',
            description: 'Паста лінгвіні з помідорами, броколі, солодким перцем та спеціями у соусі Песто',
            weight: '300г',
            price: 139,
            button: 'Замовити'
        },
        {
            img: '../img/products/pasta/pasta-5.webp',
            title: 'Фетучині 4 сири',
            description: 'Паста фетучіні з з вершковим сиром, моцарелою, дорблю та пармезаном у сирному соусі',
            weight: '350г',
            price: 149,
            button: 'Замовити'
        },
        {
            img: '../img/products/pasta/pasta-6.webp',
            title: 'Mac&Cheese з шинкою та печерицями',
            description: 'Чіфферіні з шинкою та печерицями запечені в сирному соусі, заправлені сирами Грана Падано та Чеддер',
            weight: '315г',
            price: 129,
            button: 'Замовити'
        },
        {
            img: '../img/products/pasta/pasta-7.webp',
            title: 'Фетучіні Карбонара',
            description: 'Фетучіні в соусі Карбонара з беконом та сиром Грана Падано',
            weight: '250г',
            price: 129,
            button: 'Замовити'
        }
    ];

    // Виведення елементів з даними products в HTML
    let j = 0;
    $(function add_pasta() {
        for (let i = 0; i < pasta.length; i++) {
            j++;
            // -- Створення елементів в HTML --
            let cardProductWrapper = $('#pasta');
            let cardProductBox = $(`<div class="card-product__box product-${j}">` + '</div>');
            let cardProductImg = $(`<img class="card-product__img"src="${pasta[i].img}" alt="${pasta[i].title}" title="${pasta[i].title}">`);
            let cardProductTitle = $(`<h2 class="card-product__title">${pasta[i].title}</h2>`);
            let cardProductDescription = $(`<p class="card-product__description" data-name="${pasta[i].components}">${pasta[i].description}</p>`);
            let cardProductWeight = $(`<p class="card-product__weight">${pasta[i].weight}</p>`);
            let cardProductPriceBtnBuy = $('<div class="card-product__price-btn-buy">' +
                `<span class="price">${pasta[i].price}</span>` +
                `<button class="btn btn-buy">${pasta[i].button}</button>` +
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