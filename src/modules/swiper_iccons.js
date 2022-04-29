
const swiperIccons = (selector) => {
    const swiper = new Swiper(selector, {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
     
      navigation: {
          nextEl: ".swiper__button__next",
          prevEl: ".swiper__button__prev",
      },
      breakpoints: {
        346: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1080: {
          slidesPerView: 4,
        },
        1240: {
          slidesPerView: 5,
          
        },
      },
    });
}
export default swiperIccons