let tv = new Swiper(`.trend__tv-slider`, {
    slidesPerView: 1,
    spaceBetween: 27,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
        nextEl: `.trend__tv-slider .swiper-button-next`,
        prevEl: `.trend__tv-slider .swiper-button-prev`,
    },
    breakpoints: {
        1440: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    }
});

let awaited = new Swiper(`.popular__actors-slider`, {
    slidesPerView: 1,
    spaceBetween: 27,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    navigation: {
        nextEl: `.popular__actors-slider .swiper-button-next`,
        prevEl: `.popular__actors-slider .swiper-button-prev`,
    },
    breakpoints: {
        1440: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 5,
        },
        960: {
            slidesPerView: 4,
        },
        720: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    }
});




