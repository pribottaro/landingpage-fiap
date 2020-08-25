/*Script Slider*/

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*Button Categories Responsive*/
$(function() {     
    $('.menu-responsive').on('click',function(e) {
        e.preventDefault();
        $('.side-links').slideToggle();
    });
});

/*Animation Text Title*/
var options = {
    stringsElement: '#typed-strings',
    strings: ['Pense o novo em um dos nossos 30 Mbas nas áreas de Tecnologia, inovação e negócios.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    smartBackspace: true,
    fadeOut: true,
    showCursor: false,
    startDelay: 1000,
    loop: true
};
var typed = new Typed('.typing-element', options);

/*Menu Responsive*/
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});