import * as ACTIONS from '../constants/Accounts';

const inputExchangeData = (state = { to: '', from: '' }, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_FROM:
      return { ...state, from: action.from };

    case ACTIONS.INPUT_TO:
      return { ...state, to: action.to };

    case ACTIONS.RECALCULATE_FROM:
      return { ...state, from: `${action.to * action.rate}` };

    case ACTIONS.RECALCULATE_TO:
      return { ...state, to: `${action.from / action.rate}` };
    default:
      return state;
  }
};

export default inputExchangeData;
