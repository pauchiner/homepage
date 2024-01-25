import useAnimations from './hooks/useAnimations';
import type {BaseButtonProps} from './types';
import styles from './styles.module.css';

export const Button = (props: BaseButtonProps) => {
  useAnimations(props.id);

  return (
    <button
      id={props.id}
      class={styles.button}
      onClick={props.onClick || undefined}>
      <div class={styles.border} />
      <div class={styles.content}>
        <span>{props.children}</span>
        {props.icon || <></>}
      </div>
    </button>
  );
};

export default Button;
