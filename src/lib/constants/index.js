import * as en from './en';
import * as id from './id';

export function getContent(language = 'en') {
  return language === 'id' ? id : en;
}
