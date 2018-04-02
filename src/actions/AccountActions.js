import { EXCHANGE } from '../constants/Accounts';

export function exchange(to, from, amount) {
  return (dispatch) => {
    dispatch({
      type: EXCHANGE,
      to,
      from,
      amount,
    });
  };
};