import React from 'react';
import PropTypes from 'prop-types';
import EN from '../constants/l10n/en';
import './Exchange.css';
import preloader from '../assets/preloader.gif';
import { CURRENCIES } from '../constants/Currencies';
import ExchangePanel from '../components/ExchangePanel';

const Exchange = (props) => {
  const {
    formData,
    rate,
    currencies,
    getRate,
    accounts,
  } = props;

  const currenciesForOptions = CURRENCIES;

  return (
    <div className="exchange">
      <ExchangePanel
        onInputChange={props.onInputChange}
        onCurrencyChange={props.onCurrencyChange}
        currencies={currenciesForOptions}
        direction="from"
        value={formData.from}
        currency={currencies.baseCurrency}
        getRate={getRate}
        account={accounts.fromAccount}
      />
      <div className="exchange-rate">
        {
          rate.isFetching
            ? <img src={preloader} alt="preloader" />
            : `${EN.CURRENT_RATE}: ${rate.rate}`
        }
      </div>
      <ExchangePanel
        onInputChange={props.onInputChange}
        onCurrencyChange={props.onCurrencyChange}
        currencies={currenciesForOptions}
        direction="to"
        value={formData.to}
        currency={currencies.toCurrency}
        getRate={getRate}
        account={accounts.toAccount}
      />
    </div>
  );
};

Exchange.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  formData: PropTypes.PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
  rate: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired,
  currencies: PropTypes.shape({
    toCurrency: PropTypes.string.isRequired,
    baseCurrency: PropTypes.string.isRequired,
  }).isRequired,
  accounts: PropTypes.shape({
    toAccount: PropTypes.PropTypes.shape({
      currency: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
    fromAccount: PropTypes.PropTypes.shape({
      currency: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  getRate: PropTypes.func.isRequired,
};

export default Exchange;
