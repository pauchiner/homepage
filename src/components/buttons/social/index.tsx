import type {ComponentChildren} from 'preact';
import styles from './styles.module.css';

interface Props {
  name: string;
  href: string;
  children: ComponentChildren;
}

export const SocialButton = (props: Props) => {
  return (
    <a
      aria-label={props.name}
      class={styles.button}
      href={props.href}
      target="_blank">
      {props.children}
    </a>
  );
};

export default SocialButton;
