import './noTouch';
import objectFitImages from 'object-fit-images';
import { MobNav } from './mobNav';
import { CTabs } from './contactBlockTabs';
import { initSliders } from './initSliders';
import { initContactBlock } from './initContactBlock';

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
  }
}

/** Export initialized common scripts by default */
export default Common.init();