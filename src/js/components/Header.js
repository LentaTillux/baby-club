import { $body, $scrolledElements, $window, $header, throttle, Resp, css } from '../modules/dev/helpers';
export default class Header {
  constructor() {
    this.$header = $('.js-header');
    this.$btn = $('.js-hamburger');
    this.$nav = $('.js-nav');
    this.init();
  }

  fixHeader() {
    const toggleHeaderScroll = throttle(() => {
      toggleHeader();
    }, 0, this);

    function toggleHeader() {
      if ($window.scrollTop() > 0) {
        $header.addClass('is-fixed');
      } else {
        $header.removeClass('is-fixed');
      }
    }

    $window.on('scroll', toggleHeaderScroll);
  }

  toggleNav() {
    this.$btn.on('click', function () {
      $(this).toggleClass(css.active);
      $(this).prev(this.$nav).toggleClass(css.active);
      $body.toggleClass(css.locked);
    });
  }

  onResize() {
    $window.on('resize', () => {
      this.$nav.removeClass(css.active);
      this.$btn.removeClass(css.active);
      $body.removeClass(css.locked);
    });
  }

  navEvents() {

    let lastId,
      $header = $('.js-header'),
      headerHeight = $header.outerHeight() - 120,
      menuItems = this.$nav.find('a'),
      scrollSpeed = 500,
      scrollItems = menuItems.map(function() {
        let item = $($(this).attr('href'));
        if (item.length) { return item; }
      });

    menuItems.on('click', function(e){
      const href = $(this).attr('href'),
        offsetTop = href === '#' ? 0 : $(href).offset().top - headerHeight + 1;
      $scrolledElements.stop().animate({
        scrollTop: offsetTop
      }, scrollSpeed);
      e.preventDefault();
    });

    $(window).on('scroll', function(){
      const fromTop = $(this).scrollTop() + headerHeight;

      let cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
      });
      cur = cur[cur.length -1 ];
      const id = cur && cur.length ? cur[0].id : '';

      if (lastId !== id) {
        lastId = id;
        menuItems
          .parent().removeClass(css.active)
          .end().filter(`[href='#${id}']`).parent().addClass(css.active);
      }
    });

  }

  init() {
    this.fixHeader();
    this.navEvents();
    this.toggleNav();
    this.onResize();
  }
}