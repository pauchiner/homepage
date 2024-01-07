import LabelsGrid from 'components/grids/labels';
import BaseCard from '../base';
import './styles.css';

interface Props {
  date: string;
  title: string;
  image: string;
  labels: string[];
  description: string;
}

export const ProjectCard = (props: Props) => {
  return (
    <BaseCard class="project-card">
      <div class="image">
        <img src={props.image} alt="project preview" />
      </div>
      <div class="content">
        <h4>
          {props.title}
          <span class="date">{props.date}</span>
        </h4>
        <p>{props.description}</p>
        <LabelsGrid labels={props.labels} />
      </div>
    </BaseCard>
  );
};

export default ProjectCard;
