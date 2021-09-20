$(document).ready(function() {
    $('.hpmain-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        items:1,
        navText: [ '<img src="icons/hp_banner-left.svg" class="bannerPrev">', '<img src="icons/hp_banner-right.svg" class="bannerNext">' ],
    });
    $('.firmy-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        items:5,
        stagePadding: 275,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:2,
            },
            1200:{
                items:4,
            }
        }
    });
    var owlNovinky = $('.novinky-slider');
    owlNovinky.owlCarousel({
        loop:true,
        margin:16,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            993:{
                items:4,
            },
            1200:{
                items:6,
            }
        }
    });
    $('.novinkyNext').click(function() {
        owlNovinky.trigger('next.owl.carousel');
    })
    $('.novinkyPrev').click(function() {
        owlNovinky.trigger('prev.owl.carousel');
    })
});
