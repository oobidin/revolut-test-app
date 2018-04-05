import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const onChange = (e) => {
    const { target } = e;
    const { value } = target;
    const afterPoint = value.split('.')[1] || '';
    const rightLengthAfterPoint = afterPoint ? afterPoint.length <= 2 : true;
    const valueNum = +target.value;
    const fixed = valueNum ? valueNum.toFixed(2) : null;

    if (
      value !== '' &&
      (
        (rightLengthAfterPoint && !(/\d.\d{0,2}/g).test(fixed))
        || !rightLengthAfterPoint
      )
    ) {
      target.value = target.previousValue || target.defaultValue;
      return;
    }

    target.previousValue = value;
    props.onChange(value);
  };

  return (
    <input
      type="text"
      onChange={onChange}
      className={`input ${props.className}`}
      autoFocus={props.autoFocus}// eslint-disable-line
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  className: '',
  autoFocus: false,
  placeholder: '',
  value: '',
};

export default Input;
