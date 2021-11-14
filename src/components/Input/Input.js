import s from './Input.module.css';
import PropTypes from 'prop-types';

export default function Input({ name, type, labelName, value, onChange }) {
  return (
    <label className={s.nameLabel}>
      {labelName}
      <input
        className={s.contactsInput}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
