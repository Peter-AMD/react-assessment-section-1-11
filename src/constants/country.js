import mapCountryCode from '../utilities/string';

export const COUNTRY_CODE_LIST = {
  PHILIPPINES: 'ph',
  CHINA: 'cn',
  US: 'us',
  RUSSIA: 'ru',
  UNITED_ARAB_EMIRATES: 'ae',
  ARGENTINA: 'ar',
  AUSTRIA: 'at',
  AUSTRALIA: 'au',
  BELGIUM: 'be',
  BULGARIA: 'bg',
};

export const COUNTRY_LIST = mapCountryCode(COUNTRY_CODE_LIST);