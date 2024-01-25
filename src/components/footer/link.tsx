import type {ComponentChildren} from 'preact';
import styles from './styles.module.css';

interface Props {
  href: string;
  children: ComponentChildren;
}

const Link = (props: Props) => (
  <a class={styles.link} tabindex={-1} href={props.href} target="_blank">
    {props.children}
  </a>
);

export default Link;
