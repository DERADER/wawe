$(function(){
    $('.blog__slider-inner').slick({
        dots: true,
        arrows: false
    });
    var mixer = mixitup('.gallery__items');

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

});


