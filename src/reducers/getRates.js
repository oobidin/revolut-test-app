import * as ACTIONS from '../constants/Accounts';

const getRates = (state = 'GBP', action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_RATES:
      return { isFetching: true, items: [] };
    default:
      return state;
  }
};

export default getRates;