import React from 'react';
import PropTypes from 'prop-types';

import ExchangePanel from '../components/ExchangePanel';

const Exchange = (props) => {
  const { formData } = props;

  //debugger;

  return (
    <div>
      <ExchangePanel onChange={props.onChange} direction="from" value={formData.from} currency={'GBR'} />
      <ExchangePanel onChange={props.onChange} direction="to" value={formData.to} currency={'EUR'} />
    </div>
  );
};

Exchange.propTypes = {
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Exchange;