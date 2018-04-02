import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './Header.css';

import Link from './Link';

import commonConstants from '../constants/commonConstants';
import EN from '../constants/l10n/en';

//const currencies = commonConstants.CURRENCIES;

const Header = (props) => {
  const {
    currencies,
    baseCurrency,
    toCurrency,
  } = props;

  const selectOptions = currencies.map(currency => ({ value: currency, label: `${baseCurrency} to ${currency}` }));

  return (
    <Row className="header">
      <Col xs={4} className="header__left">
        <Link
          href={commonConstants.URL_BASE}
          text={EN.CANCEL_LINK}
          className="link--float-left"
        />
      </Col>
      <Col xs={4} className="header__right">
        <Select
          options={selectOptions}
          value={toCurrency}
        />
      </Col>
      <Col xs={4}>
        <Link
          href={commonConstants.URL_EXCHANGE}
          text={EN.EXCHANGE_LINK}
          className="link--float-right"
        />
      </Col>
    </Row>
  );
};

Header.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  baseCurrency: PropTypes.string,//.isRequired,
  toCurrency: PropTypes.string,//.isRequired,
};

Header.defaultProps = {
  currencies: [],
  baseCurrency: 'GBP',
  toCurrency: 'EUR'
};

export default Header;