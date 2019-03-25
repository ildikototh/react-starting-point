import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  name, disabled, label, onChange, checked,
}) => (
  <div className="c-checkbox">
    <input
      name={name}
      type="checkbox"
      onChange={onChange}
      disabled={disabled}
      checked={checked}
      className="checkbox__input"
    />
    <label htmlFor={name} className="checkbox__label">
      {label}
    </label>
  </div>
);
Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: Checkbox.onChange,
};

export default Checkbox;
