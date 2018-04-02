import * as ACTIONS from '../constants/Accounts';
/*
const onChange = (data, direction) => (dispatch) => {
  if (direction === 'to') {
    dispatch({ type: ACTIONS.INPUT_TO, to: data });
    dispatch({ type: ACTIONS.RECALCULATE_FROM });
  } else {
    dispatch({ type: ACTIONS.INPUT_FROM, from: data });
    dispatch({ type: ACTIONS.RECALCULATE_TO });
  }
};*/

export function onChange(data, direction) {
  return (dispatch, getState) => {
    const state = getState();
    const rate = state.rate || 1;

    if (direction === 'to') {
      dispatch({ type: ACTIONS.INPUT_TO, to: data });
      dispatch({ type: ACTIONS.RECALCULATE_FROM, to: data, rate });
    } else {
      dispatch({ type: ACTIONS.INPUT_FROM, from: data });
      dispatch({ type: ACTIONS.RECALCULATE_TO, from: data, rate });
    }
  };
};
