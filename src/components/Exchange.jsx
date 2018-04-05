import React from 'react';
import PropTypes from 'prop-types';
import EN from '../constants/l10n/en';

import './Exchange.css';
import commonConstants from '../constants/commonConstants';

import ExchangePanel from '../components/ExchangePanel';

const Exchange = (props) => {
  const { formData, rate, currencies } = props;

  const currenciesForOptions = commonConstants.CURRENCIES;

  return (
    <div className="exchange">
      <ExchangePanel
        onChange={props.onChange}
        onCurrencyChange={props.onCurrencyChange}
        currencies={currenciesForOptions}
        direction="from"
        value={formData.from}
        currency={currencies.baseCurrency}
      />
      <div className="exchange-rate">{EN.CURRENT_RATE}: {rate}</div>
      <ExchangePanel
        onCurrencyChange={props.onCurrencyChange}
        currencies={currenciesForOptions}
        direction="to"
        value={formData.to}
        currency={currencies.toCurrency}
      />
    </div>
  );
};

Exchange.propTypes = {
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  rate: PropTypes.string,
};

Exchange.defaultProps = {
  rate: '1',
};

export default Exchange;
