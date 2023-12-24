import useAnimations from './hooks/useAnimations';
import type {BaseButtonProps} from './types';
import './styles.css';

export const Button = (props: BaseButtonProps) => {
  useAnimations(props.id);

  return (
    <button id={props.id} class="button" onClick={props.onClick || undefined}>
      <div class="button-border" />
      <div class="button-content">
        <span>{props.children}</span>
        {props.icon || <></>}
      </div>
    </button>
  );
};

export default Button;
