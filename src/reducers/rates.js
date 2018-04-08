import {
  REQUEST_RATES,
  RECEIVE_RATES,
} from '../constants/Rates';

const getRates = (state = { rate: 1 }, action) => {
  switch (action.type) {
    case REQUEST_RATES:
      return { ...state, isFetching: true };
    // eslint-disable-next-line no-case-declarations
    case RECEIVE_RATES:
      const { rates, toCurrency, baseCurrency } = action;

      return {
        ...state,
        isFetching: false,
        rates,
        rate: toCurrency === baseCurrency ? 1 : rates[action.toCurrency],
      };
    default:
      return state;
  }
};

export default getRates;
