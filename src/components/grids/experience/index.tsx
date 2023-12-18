import './styles.css';

interface Props {
  children: any;
}

export const ExperienceGrid = (props: Props) => {
  return <div class="experience-grid">{props.children}</div>;
};

export default ExperienceGrid;
