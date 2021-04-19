import numbro from 'numbro';

numbro.registerLanguage({
  languageTag: 'en-CX',
  delimiters: {
    thousands: ' ',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'K',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal: () => {
    return '';
  },
  currency: {
    symbol: '€',
    position: 'postfix',
    code: 'EUR',
  },
  formats: {
    fourDigits: {
      output: 'number',
      spaceSeparated: true,
      thousandSeparated: true,
      mantissa: 0,
      totalLength: 4,
    },
    fullWithTwoDecimals: {
      output: 'currency',
      mantissa: 2,
      spaceSeparated: true,
      thousandSeparated: true,
    },
    fullWithTwoDecimalsNoCurrency: {
      mantissa: 2,
      thousandSeparated: true,
    },
    fullWithNoDecimals: {
      output: 'currency',
      spaceSeparated: true,
      thousandSeparated: true,
      mantissa: 0,
    },
  },
});

numbro.setLanguage('en-CX');

export default numbro;
