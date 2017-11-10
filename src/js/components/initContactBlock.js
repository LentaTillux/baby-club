import {css} from '../modules/dev/helpers';

export function initContactBlock() {

  let $contactBlock = $('.contact');
  if (!$contactBlock.length) return;

  ymaps.ready(init);
  showInfo();
  chooseBranch();

  function init() {
    const contactMapMoscow = new ymaps.Map('contact-map-moscow', {
        center: [55.75366848567328, 37.621676554687504],
        zoom: 10,
        controls: []
      }),
      objectManager = new ymaps.ObjectManager({
        clusterize: false
      });

    contactMapMoscow.geoObjects.add(objectManager);

    $.ajax({
      url: 'static/js/mapMoscow.json'
    }).done(function(data) {
      objectManager.add(data);
    });

    showClubBranch();

    function showClubBranch() {
      const $branchList = $('.js-branch-list');
      const $branchBtn = $branchList.children();

      $branchBtn.on('click', function (e) {
        e.preventDefault();
        const $that = $(this);
        const $branchNumber = $that.index() + 1;

        switch ($branchNumber) {
          case 1:
            objectManager.setFilter('properties.branchNumber == "1"');
            break;
          case 2:
            objectManager.setFilter('properties.branchNumber == "2"');
            break;
          case 3:
            objectManager.setFilter('properties.branchNumber == "3"');
            break;
          case 4:
            objectManager.setFilter('properties.branchNumber == "4"');
            break;
          case 5:
            objectManager.setFilter('properties.branchNumber == "5"');
            break;
          case 6:
            objectManager.setFilter('properties.branchNumber == "6"');
            break;
          case 7:
            objectManager.setFilter('properties.branchNumber == "7"');
            break;
          case 8:
            objectManager.setFilter('properties.branchNumber == "8"');
            break;
          case 9:
            objectManager.setFilter('properties.branchNumber == "9"');
            break;
          case 10:
            objectManager.setFilter('properties.branchNumber == "10"');
            break;
          case 11:
            objectManager.setFilter('properties.branchNumber == "11"');
            break;
          case 12:
            objectManager.setFilter('properties.branchNumber == "12"');
            break;
          case 13:
            objectManager.setFilter('properties.branchNumber == "13"');
            break;
          case 14:
            objectManager.setFilter('properties.branchNumber == "14"');
            break;
          default:
            objectManager.setFilter('properties.branchNumber == " "');
        }

      });
    }

    const $clubLink = $('.js-club-link');

    $clubLink.on('click', function (e) {
      e.preventDefault();
      const $that = $(this);
      const $clubCoords = $that.data('club-coords');

      contactMapMoscow.panTo($clubCoords, {
        duration: 1000
      });
    });

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