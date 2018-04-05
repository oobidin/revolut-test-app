import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Exchange from '../components/Exchange';

import * as accountActions from '../actions/AccountActions';
import * as inputActions from '../actions/InputExchangeDataActions';
import * as selectActions from '../actions/CurrencyActions';

import './App.css';
import '../bootstrap.css';
import selectCurrency from '../reducers/selectCurrency';

const App = (props) => {
  const { onChange } = props.inputActions;
  const { onCurrencyChange } = props.selectActions;
  const { formData, currencies } = props;
  //debugger;

  return (
    <Grid>
      <Header />
      <Exchange
        onChange={onChange}
        formData={formData}
        currencies={currencies}
        onCurrencyChange={onCurrencyChange}
      />
    </Grid>
  );
};



const mapStateToProps = state => ({
  //selectCurrency,
  formData: state.formData,
  currencies: state.currencies,//inputExchangeData,
  //accounts: state,
});

const mapDispatchToProps = (dispatch) => {
  //debugger;
  return {
    accountActions: bindActionCreators(accountActions, dispatch),
    inputActions: bindActionCreators(inputActions, dispatch),
    selectActions: bindActionCreators(selectActions, dispatch),
    //userActions: bindActionCreators(userActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
