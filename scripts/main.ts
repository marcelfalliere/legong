import {i18n} from './modules/i18n';
import {lazyload} from './modules/lazyload';

export default function(): void {
  console.log('hello world');

  i18n.bootstrap();

  lazyload.bootstrap();
};