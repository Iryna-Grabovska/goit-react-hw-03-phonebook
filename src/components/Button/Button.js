import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ label }) {
  return (
    <button className={s.formButton} type="submit">
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string,
};
