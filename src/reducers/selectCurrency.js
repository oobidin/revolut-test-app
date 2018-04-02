import * as ACTIONS from '../constants/Accounts';

const selectCurrency = (state = 'GBP', action) => {
  switch (action.type) {
    case ACTIONS.SELECT_CURRENCY:
      return action.currency;
    default:
      return state;
  }
};

export default selectCurrency;