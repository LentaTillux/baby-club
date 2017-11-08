import slick from 'slick-carousel';

export function initSliders() {
  const grayIconLeft = '<img src="static/img/icons/gray-arr_l.svg"/>';
  const grayIconRight = '<img src="static/img/icons/gray-arr_r.svg"/>';
  const greenIconLeft = '<img src="static/img/icons/green-arr_l.svg"/>';
  const greenIconRight = '<img src="static/img/icons/green-arr_r.svg"/>';

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${grayIconLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${grayIconRight}</button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const $employeesSld = $('.js-employees-slider');
  $employeesSld.slick($.extend({}, defaultOptions));

  const $photosSld = $('.js-photos-slider');
  $photosSld.slick($.extend({}, defaultOptions, {
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${greenIconLeft}</button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next">${greenIconRight}</button>`,
  }));

}