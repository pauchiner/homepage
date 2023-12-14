import './styles.css';

interface Props {
  name: string;
  href: string;
  children: any;
}

export const SkillButton = (props: Props) => {
  return (
    <a
      aria-label={props.name}
      class="skill-button"
      href={props.href}
      target="_blank"
      tabindex={-1}>
      {props.children}
      <span>{props.name}</span>
    </a>
  );
};

export default SkillButton;
