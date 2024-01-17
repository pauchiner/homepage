import type {ComponentChildren} from 'preact';
import './styles.css';

interface Props {
  title: string;
  children: ComponentChildren;
}

export const SkillsGrid = (props: Props) => {
  return (
    <article class="skills-grid">
      <h4>{props.title}</h4>
      <div>{props.children}</div>
    </article>
  );
};

SkillsGrid.defaultProps = {
  title: 'SKILLS'
};

export default SkillsGrid;
