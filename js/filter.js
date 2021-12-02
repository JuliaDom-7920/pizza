$(document).ready(function () {
    // Відкрити блок Фільтри
    $('.popup-filter__open').click(function () {
        $('.popup-filter__fade').css('display', 'block');
        $('.popup-filter__wrapper').animate({'right':'0'}, 500);
    });

    // Закрити блок Фільтри
    $('.popup-filter__close').click(popupFilterClose);

    function popupFilterClose() {
        $('.popup-filter__wrapper').animate({'right':'-360px'}, 500);
        setTimeout(() => {
            $('.popup-filter__fade').css('display', 'none');
        }, 500);
    }

    // Range
    let sliderVal = 179;
    (function showSliderValue() {
        let rangeSlider = $('#rs-range-line');
        let rangeBullet = $('#rs-bullet');
        rangeBullet.css('left', `${rangeSlider.val() + 'px'}`);

        rangeSlider.on('input', () => {
            rangeBullet.text(rangeSlider.val());
            let bulletPosition = (rangeSlider.val() /rangeSlider.attr('max'));
            rangeBullet.css('left', `${(bulletPosition * 277) + 'px'}`);
            sliderVal = rangeSlider.val();
            //sliderVal = 1;
            console.log(sliderVal);
        });
    })();
    

    
    
    console.log(sliderVal);

    // Фільтр
    $('.popup-filter__apply').click( function () {
        //const cardProductBox = $('.card-product__box');
        /*$('input:checkbox:checked').each(function (item) {
            console.log($('input:checkbox + label').text()+', ');
        })*/
        /*if ('input:checkbox :checked') {
            //console.log($('input:checkbox + label').text());
            $.each($('input:checkbox:checked'), function (item) {
                console.log($('input:checkbox + label').text()+', ');
            })
        }*/
        popupFilterClose();
    });
    
 
});

/*const filterBox = document.querySelectorAll('.card-product__box');
console.log(filterBox);

document.querySelector('.popup-filter__wrapper').addEventListener('click', event => {
    if (event.target.tagName !== 'input' || 'label') {
        //return false;
    }

    let filterName = event.target.dataset['name'];
    console.log(filterName);
    filterBox.forEach(elem => {
        if (elem.includes(filterName)) {
            //elem.style.display = 'none';
            console.log(filterName);
        }
    })
    
});*/
(function () {
    const body = document.querySelector('body');
    body.addEventListener('click', function (e) {
        const target = e.target;
        const filter = target.getAttribute('data-filter');
        if (filter === null) {
            return;
        }
        console.log(filter);
    })
})();

