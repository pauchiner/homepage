import type {ComponentChildren} from 'preact';
import styles from './styles.module.css';

interface Props {
  title: string;
  children: ComponentChildren;
}

export const SkillsGrid = (props: Props) => {
  return (
    <article>
      <h4 class={styles.title}>{props.title}</h4>
      <div class={styles.grid}>{props.children}</div>
    </article>
  );
};

SkillsGrid.defaultProps = {
  title: 'SKILLS'
};

export default SkillsGrid;
