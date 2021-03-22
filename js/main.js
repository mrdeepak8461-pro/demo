
const nextIcon = '<img src="img/Assets/next.svg" alt="right">';
const prevIcon = '<img src="img/Assets/previous.svg" alt="left">';



$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    dots:false,
    navText:[
        prevIcon,
        nextIcon
    ],
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


