import './noTouch';
import objectFitImages from 'object-fit-images';
import './popupInit';
import Header from './Header';
import { CTabs } from './contactBlockTabs';
import { initSliders } from './initSliders';
import { initContactBlock } from './initContactBlock';
import { showMore } from './showMore';

/**
 * Website's common scripts.
 *
 * @module Common
 */

export class Common {
  /**
   * Initialize Main page scripts.
   */
  static init() {
    objectFitImages();
    initSliders();
    initContactBlock();
    showMore();
    new Header;
  }
}

/** Export initialized common scripts by default */
export default Common.init();