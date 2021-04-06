import I18n from 'i18n-js';
import {plurals} from '../resorces/plurals';

I18n.locale = 'ru';
I18n.translations = plurals;

I18n.pluralization['ru'] = function (count: number) {
  var key =
    count === 0
      ? 'zero'
      : count % 10 === 1 && count % 100 !== 11
      ? 'one'
      : [2, 3, 4].indexOf(count % 10) >= 0 &&
        [12, 13, 14].indexOf(count % 100) < 0
      ? 'few'
      : count % 10 === 0 ||
        [5, 6, 7, 8, 9].indexOf(count % 10) >= 0 ||
        [11, 12, 13, 14].indexOf(count % 100) >= 0
      ? 'many'
      : 'other';
  return [key];
};

export default I18n;
