import { TweenMax, CSSPlugin } from 'gsap';
import { css } from '../modules/dev/helpers';

export default class CTabs {
  constructor(el) {
    this.$tabNav = el.find('.js-branch-list').find('.contact__metro-branch');
    this.$tabItemContainer = el.find('.js-contact-info');
    this.$tabItem = this.$tabItemContainer.find('.contact__info-tab');
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    if (!this.$tabNav.hasClass('js-disabled') && this.getActiveIndex() !== 0) {
      this.$tabItem.hide()
        .eq(this.getActiveIndex()).show();
    }

    this.$tabNav.on('click', (ev) => {
      const currentIndex = this.getActiveIndex();
      const targetIndex = $(ev.currentTarget).index();

      this.changeTab(currentIndex, targetIndex);
    });
  }

  getActiveIndex() {
    let activeIndex = 0;

    this.$tabNav.each(function() {
      if ($(this).hasClass(css.active)) {
        activeIndex = $(this).index();
      }
    });

    return activeIndex;
  }

  changeTab(currentIndex, nextIndex) {
    const _this = this;
    const speed = 0.15;
    const $currentTabNav = this.$tabNav.eq(currentIndex);
    const $nextTabNav = this.$tabNav.eq(nextIndex);
    const $currentTab = this.$tabItem.eq(currentIndex);
    const $nextTab = this.$tabItem.eq(nextIndex);

    $currentTabNav.removeClass(css.active);
    $nextTabNav.removeClass(css.disabled).addClass(css.active);
    TweenMax.to($currentTab, speed, {
      autoAlpha: 0,
      y: 0,
      clearProps: 'transform',
      onComplete() {
        const currentHeight = _this.$tabItemContainer.outerHeight();
        TweenMax.set(_this.$tabItemContainer, { height: currentHeight });
        $(this.target).hide();
        TweenMax.set($nextTab, { autoAlpha: 1 });
        $nextTab.show();
        TweenMax.staggerFromTo($nextTab.children(), speed, {
          autoAlpha: 0,
          y: -10
        }, {
          autoAlpha: 1,
          y: 0
        }, speed / 2);
        TweenMax.set(_this.$tabItemContainer, { height: 'auto' });
        TweenMax.from(_this.$tabItemContainer, speed, { height: currentHeight });
      }
    });
  }
}

/** tabs init */
const $tabs = $('.contact__nav');
$tabs.each((index, el) => {
  const tab = new CTabs($(el));
  tab.init();
});