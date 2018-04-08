import { combineReducers } from 'redux';
import accounts from './accounts';
import formInputData from './formInputData';
import selectCurrency from './selectCurrency';
import getRates from './rates';
import notification from './notification';
import exchangeLink from './exchangeLink';

const appReducer = combineReducers({
  accounts,
  notification,
  exchangeLink,
  formData: formInputData,
  currencies: selectCurrency,
  rate: getRates,
});

export default appReducer;
