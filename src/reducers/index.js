import { combineReducers } from 'redux';
import accounts from './accounts';
import inputExchangeData from './inputExchangeData';

export default combineReducers({
  accounts,
  formData: inputExchangeData,
});
