

const swiper = (selector) => {
    const swiper = new Swiper(selector, {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
        navigation: {
            nextEl: ".swiper__button__next",
            prevEl: ".swiper__button__prev",
          },
    });
}
export default swiper