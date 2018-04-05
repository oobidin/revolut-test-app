import * as ACTIONS from '../constants/Accounts';

const poll = () => {

};

const getRate = () => {
  return () => {
    dispatch({ type: ACTIONS.REQUEST_RATES });


  };
};

export getRate;

