export function showMore() {
  const $moreBtn = $('.js-more-btn');

  if (!$moreBtn.length) return;

  $moreBtn.on('click', function (e) {
    const $thatBtn = $(this);
    const $btnText = $thatBtn.find('span');
    const $items = $thatBtn.prev().children();

    e.preventDefault();

    if ($items.hasClass('is-visible')) {
      $items
        .filter('.is-visible')
        .slideUp()
        .removeClass('is-visible')
        .addClass('is-hidden');
    } else {
      $items
        .filter('.is-hidden')
        .slideDown()
        .css('display', 'inline-block')
        .removeClass('is-hidden')
        .addClass('is-visible');
    }

    $btnText.text($btnText.text() === $btnText.data('default-text') ? $btnText.data('change-text') : $btnText.data('default-text'));
  });
}
