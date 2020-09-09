import Vue from 'vue';
import { AsYouType } from 'libphonenumber-js';

Vue.filter('money', val => {
  if (val) {
    const regex = /(?!^)(?=(?:\d{3})+(?:\.|$))/gm;
    return val.replace(regex, ' ');
  }
  return '';
});

Vue.filter('sms', val => {
  if (val.length > 1 && val.length <= 6) {
    let res = '';
    for (let i = 0; i < val.length; i++) {
      if (i > 0 && i % 3 === 0) {
        res += ' ';
      }
      res += val[i];
    }
    return res;
  }
  return val;
});

Vue.filter('phone', val => {
  return new AsYouType().input(val);
});