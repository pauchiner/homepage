import type {ComponentChildren} from 'preact';
import styles from './styles.module.css';

interface Props {
  name: string;
  href: string;
  children: ComponentChildren;
}

export const SkillButton = (props: Props) => {
  return (
    <a
      aria-label={props.name}
      class={styles.button}
      href={props.href}
      target="_blank"
      tabindex={-1}>
      {props.children}
      <span class={styles.tooltip}>{props.name}</span>
    </a>
  );
};

export default SkillButton;
