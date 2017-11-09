import { css } from '../modules/dev/helpers';

export function initContactBlock() {

  let $contactBlock = $('.contact');
  if (!$contactBlock.length) return;

  ymaps.ready(init);
  chooseBranch();
  showInfo();

  function init() {
    const contactMapMoscow = new ymaps.Map('contact-map-moscow', {
        center: [55.75366848567328, 37.621676554687504],
        zoom: 12,
        controls: []
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="contact__map-icon">
             <img src="static/img/icons/map-icon.svg"/>
        </div>`
      ),
      yellowCollection = new ymaps.GeoObjectCollection(null, {
        iconLayout: 'default#image',
        iconImageHref: 'static/img/icons/map-icon.svg'
      }),
      blueCollection = new ymaps.GeoObjectCollection(null, {
        iconLayout: 'default#image',
        iconImageHref: 'static/img/icons/map-icon.svg'
      }),
      yellowCoords = [[55.814025145176245, 37.64934758465566], [55.81, 37.75]],
      blueCoords = [[55.814481568918886, 37.56202049999994], [55.81, 37.65]];

    for (let i = 0, l = yellowCoords.length; i < l; i++) {
      yellowCollection.add(new ymaps.Placemark(yellowCoords[i]));
    }
    for (let i = 0, l = blueCoords.length; i < l; i++) {
      blueCollection.add(new ymaps.Placemark(blueCoords[i]));
    }

    contactMapMoscow.geoObjects.add(yellowCollection).add(blueCollection);

    // [55.814025145176245,37.64934758465566] _6
    // [55.814481568918886,37.56202049999994] _9


    // const $streetsList = $('.js-contact-streets');
    // const $streetLink = $streetsList.find('a');
    //
    // $streetLink.on('click', function (e) {
    //   e.preventDefault();
    //   const $that = $(this);
    //   const $streetLinkCoord = $that.data('str-coords');
    //   const $parent = $that.parent();
    //
    //   contactMap.panTo($streetLinkCoord, {
    //     duration: 1000
    //   });
    //   $parent.siblings().removeClass(css.active);
    //   $parent.addClass(css.active);
    // });

  }

  function showInfo() {
    const $info = $('.js-contact-info');
    const $infoBtn = $info.find('.contact__info-title');
    const $infoDetails = $info.find('.contact__info-details');
    const duration = 150;

    $infoBtn.on('click', function (e) {
      e.preventDefault();
      const $that = $(this);
      const $thatDetails = $that.next();

      $infoBtn.removeClass(css.active);
      $that.addClass(css.active);
      $infoDetails.slideUp(duration);
      $thatDetails.slideDown(duration);
    });

    $infoBtn.each(function () {
      $(this).hasClass(css.active) ? $(this).trigger('click') : false;
    });
  }

  function chooseBranch() {
    const $branchList = $('.js-branch-list');
    const $branchBtn = $branchList.find('.contact__metro-branch');

    $branchBtn.on('click', function (ev) {
      ev.preventDefault();
      const $that = $(this);

      $that.addClass(css.active);
      $that.siblings().removeClass(css.active);
    });
  }
}