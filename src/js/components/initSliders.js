import slick from 'slick-carousel';

export function initSliders() {
  const iconLeft = '<img src="static/img/icons/gray-arr_l.svg"/>';
  const iconRight = '<img src="static/img/icons/gray-arr_r.svg"/>';

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const $successSld = $('.js-employees-slider');
  $successSld.slick($.extend({}, defaultOptions));

}