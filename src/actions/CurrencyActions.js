import * as ACTIONS from "../constants/Accounts";

export function onCurrencyChange(data, direction) {
  return (dispatch) => {
    if (direction === 'from') {
      dispatch({ type: ACTIONS.SELECT_BASE_CURRENCY, baseCurrency: data });
    } else {
      dispatch({ type: ACTIONS.SELECT_TO_CURRENCY, toCurrency: data });
    }
  };
};

