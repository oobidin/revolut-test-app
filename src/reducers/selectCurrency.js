import * as ACTIONS from '../constants/Accounts';

const initialState = { baseCurrency: 'GBP', toCurrency: 'EUR' };

const selectCurrency = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_BASE_CURRENCY:
      return { ...state, baseCurrency: action.baseCurrency };
    case ACTIONS.SELECT_TO_CURRENCY:
      return { ...state, toCurrency: action.toCurrency };
    default:
      return state;
  }
};

export default selectCurrency;
