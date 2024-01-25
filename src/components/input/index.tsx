import type {InputProps} from './types';
import styles from './styles.module.css';

export const Input = (props: InputProps) => {
  return (
    <label for={props.id}>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        class={styles.input}
        onChange={props.onChange}
        required={props.required}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        autocomplete={props.autocomplete}
      />
    </label>
  );
};

Input.defaultProps = {
  value: '',
  type: 'text',
  maxLength: 30,
  required: false,
  placeholder: '',
  onChange: () => {},
  autocomplete: 'off'
};

export default Input;
