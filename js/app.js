$(document).on('click', '.nav_toggle', function(){
    $(this).toggleClass('active');
    $(this).next('.header_nav').slideToggle(400); 
})

$(document).ready(function() {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500000,
        dots: true,
        arrows: true,
        accessibility: false
    });
});