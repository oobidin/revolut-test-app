import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Exchange from '../components/Exchange';

import * as inputHandler from '../actions/FormDataActions';
import * as currencyHandler from '../actions/CurrencyActions';
import * as rateActions from '../actions/RateActions';
import * as accountActions from '../actions/AccountActions';

import './App.css';

const App = (props) => {
  const {
    onInputChange,
    onCurrencyChange,
    formData,
    currencies,
    rate,
    getRate,
    accounts,
    exchange,
    notification,
    exchangeLink,
  } = props;

  return (
    <Grid>
      <Header
        exchange={exchange}
        isNotificationVisible={notification.isVisible}
        isExchangeDisabled={exchangeLink.isDisabled}
      />
      <Exchange
        onInputChange={onInputChange}
        formData={formData}
        currencies={currencies}
        onCurrencyChange={onCurrencyChange}
        rate={rate}
        getRate={getRate}
        accounts={accounts}
      />
    </Grid>
  );
};

App.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
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
  getRate: PropTypes.func.isRequired,
  exchange: PropTypes.func.isRequired,
  notification: PropTypes.PropTypes.shape({
    isVisible: PropTypes.bool.isRequired,
  }).isRequired,
  exchangeLink: PropTypes.shape({
    isDisabled: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  formData: state.formData,
  currencies: state.currencies,
  rate: state.rate,
  accounts: state.accounts,
  notification: state.notification,
  exchangeLink: state.exchangeLink,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: bindActionCreators(inputHandler.default, dispatch),
  onCurrencyChange: bindActionCreators(currencyHandler.default, dispatch),
  getRate: bindActionCreators(rateActions.default, dispatch),
  exchange: bindActionCreators(accountActions.default, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
