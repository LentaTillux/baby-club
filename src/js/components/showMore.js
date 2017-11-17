export function showMore() {
  const $moreBtn = $('.js-more-btn');

  if (!$moreBtn.length) return;

  $moreBtn.on('click', function (e) {
    const $thatBtn = $(this);
    const $btnText = $thatBtn.find('span');
    const $tems = $thatBtn.prev().children();

    e.preventDefault();

    $tems.each(function () {
      const _this = $(this);
      if (_this.hasClass('is-visible')) {
        setTimeout(function () {
          _this.slideUp(1000).removeClass('is-visible');
        }, 50);
      }
      if (_this.is(':hidden')) {
        setTimeout(function () {
          _this.slideDown(1000).css('display', 'inline-block').removeClass('is-hidden').addClass('is-visible');
        }, 50);
      }
    });

    $btnText.text($btnText.text() === $btnText.data('default-text') ? $btnText.data('change-text') : $btnText.data('default-text'));
  });
}
