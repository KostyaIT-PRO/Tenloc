const swiperOne = new Swiper('.feedback__slider', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    mousewheel: true,
    keyboard: true,

});


const swiperTwo = new Swiper(".blog__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    
    loop: true,
        autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});