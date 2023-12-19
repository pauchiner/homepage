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
      <img src={props.image} />
      <div>
        <h5>
          {props.title}
          <span class="date">{props.date}</span>
        </h5>
        <p>{props.description}</p>
        <LabelsGrid labels={props.labels} />
      </div>
    </BaseCard>
  );
};

export default ProjectCard;