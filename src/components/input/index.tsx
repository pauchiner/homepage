import type {InputProps} from './types';
import './styles.css';

export const Input = (props: InputProps) => {
  return (
    <label for={props.id} class="input">
      <input
        id={props.id}
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
        autocomplete={props.autocomplete}
      />
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  autocomplete: 'off'
};

export default Input;
