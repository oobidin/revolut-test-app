import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Exchange from '../components/Exchange';

import * as accountActions from '../actions/AccountActions';
import * as inputActions from '../actions/InputExchangeDataActions';

import './App.css';
import '../bootstrap.css';
import selectCurrency from '../reducers/selectCurrency';
import inputExchangeData from '../reducers/inputExchangeData';


const App = (props) => {
  const { onChange } = props.inputActions;
  const { formData } = props;
  //debugger;

  return (
    <Grid>
      <Header />
      <Exchange onChange={onChange} formData={formData} />
    </Grid>
  );
};



const mapStateToProps = state => ({
  selectCurrency,
  formData: inputExchangeData,
  //accounts: state,
});

const mapDispatchToProps = (dispatch) => {
  //debugger;
  return {
    accountActions: bindActionCreators(accountActions, dispatch),
    inputActions: bindActionCreators(inputActions, dispatch),
    //userActions: bindActionCreators(userActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
