import { combineReducers } from 'redux';
import accounts from './accounts';
import inputExchangeData from './inputExchangeData';
import selectCurrency from './selectCurrency';

export default combineReducers({
  accounts,
  formData: inputExchangeData,
  currencies: selectCurrency,
});
