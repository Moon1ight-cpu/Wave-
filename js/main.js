$(function () {
    let mixer = mixitup('.gallery__content');
});

$(".slider-blog__inner").slick({
    arrows: false,
    dots: true,
})

$('.header__button').on('click',function() {
    $('ul.menu__list').toggleClass('menu__list--active')
})