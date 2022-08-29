$(function(){
$('.photo__slider').slick({
    prevArrow: '<button tyre="button" class="slick-prev"><img src="Shape.svg" alt=""></button>',
    nextArrow: '<button tyre="button" class="slick-next"><img src="left.svg" alt=""></button>'
});

$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
});

});