import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = props => <a href={props.href} className={`link ${props.className}`}>{props.text}</a>;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: '',
};

export default Link;