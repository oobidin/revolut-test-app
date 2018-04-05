import * as ACTIONS from '../constants/Accounts';

const getRates = (state = { rate: 1 }, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_RATES:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default getRates;
