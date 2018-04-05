import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'react-select/dist/react-select.css';

import './Header.css';

import Link from './Link';

import commonConstants from '../constants/commonConstants';
import EN from '../constants/l10n/en';

//const currencies = commonConstants.CURRENCIES;

const Header = () => (
  <Row className="header">
    <Col xs={6} className="header__left">
      <Link
        href={commonConstants.URL_BASE}
        text={EN.CANCEL_LINK}
        className="link--float-left"
      />
    </Col>
    <Col xs={6} className="header__right">
      <Link
        href={commonConstants.URL_EXCHANGE}
        text={EN.EXCHANGE_LINK}
        className="link--float-right"
      />
    </Col>
  </Row>
);
/*
Header.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  baseCurrency: PropTypes.string,//.isRequired,
  toCurrency: PropTypes.string,//.isRequired,
};*/

Header.defaultProps = {
  currencies: [],
  baseCurrency: 'GBP',
  toCurrency: 'EUR',
};

export default Header;