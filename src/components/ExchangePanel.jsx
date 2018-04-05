import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';

import Input from '../components/Input';
import './EchangePanel.css';


import EN from '../constants/l10n/en';

const ExchangePanel = (props) => {
  const {
    value,
    currencies,
    currency,
    direction,
    onChange,
    onCurrencyChange,
  } = props;

  const onInputChange = (data) => {
    onChange(data, direction);
  };

  const onSelectChange = (data) => {
    onCurrencyChange(data.value, direction);
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
        <div className="exchange-panel-left__balance">{EN.BALANCE}: </div>
      </Col>
      <Col xs={6} className="exchange-panel-right">
        <Input
          onChange={onInputChange}
          className="exchange-panel-right__input"
          autoFocus={direction === 'from'}
          placeholder={direction === 'from' ? EN.INPUT_PLACEHOLDER : ''}
          value={value}
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
  onChange: PropTypes.func.isRequired,
};

export default ExchangePanel;
