import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';

import Input from '../components/Input';
import './ExchangePanel.css';


import EN from '../constants/l10n/en';

const ExchangePanel = (props) => {
  const {
    value,
    currencies,
    currency,
    direction,
    onInputChange,
    onCurrencyChange,
    getRate,
    account,
  } = props;

  const onChange = (data) => {
    onInputChange(data, direction);
  };

  const onSelectChange = (data) => {
    onCurrencyChange(data.value, direction);

    if (direction === 'from') {
      getRate();
    }
  };

  return (
    <Row className={`exchange-panel exchange-panel--${direction}`}>
      <Col xs={6} className="exchange-panel-left">
        <div className="exchange-panel-left__currency">
          <Select
            options={currencies.map(item => ({ value: item, label: item }))}
            value={currency}
            searchable={false}
            clearable={false}
            onChange={onSelectChange}
          />
        </div>
        <div className="exchange-panel-left__balance">{EN.BALANCE}: {account.balance}</div>
      </Col>
      <Col xs={6} className="exchange-panel-right">
        <Input
          onChange={onChange}
          className="exchange-panel-right__input"
          autoFocus={direction === 'from'}
          placeholder={direction === 'from' ? EN.INPUT_PLACEHOLDER : ''}
          value={
            +value > 0
            ? (direction === 'from' ? '- ' : '+ ') + value
            : value
          }
          max={direction === 'from' ? account.balance : -1}
        />
      </Col>
    </Row>
  );
};

ExchangePanel.propTypes = {
  direction: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  getRate: PropTypes.func.isRequired,
  account: PropTypes.PropTypes.shape({
    currency: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};

export default ExchangePanel;
