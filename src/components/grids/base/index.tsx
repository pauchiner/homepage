import type {ComponentChildren} from 'preact';
import styles from './styles.module.css';

interface Props {
  children: ComponentChildren;
}

export const BaseGrid = (props: Props) => {
  return <div class={styles.grid}>{props.children}</div>;
};

export default BaseGrid;
