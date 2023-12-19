import LabelsGrid from 'components/grids/labels';
import BaseCard from '../base';
import './styles.css';

interface Props {
  date: string;
  title: string;
  labels: string[];
  subtitle: string;
  description: string;
}

export const ExperienceCard = (props: Props) => {
  return (
    <BaseCard class="experience-card">
      <span class="date">{props.date}</span>
      <div>
        <h5>{props.title}</h5>
        <h6>{props.subtitle}</h6>
        <p>{props.description}</p>
        <LabelsGrid labels={props.labels} />
      </div>
    </BaseCard>
  );
};

export default ExperienceCard;
