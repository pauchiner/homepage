import LabelsGrid from 'components/grids/labels';
import type {ComponentChildren} from 'preact';
import BaseCard from '../base';
import './styles.css';

interface Props {
  date: string;
  title: string;
  labels: string[];
  subtitle: string;
  children: ComponentChildren;
}

export const ExperienceCard = (props: Props) => {
  return (
    <BaseCard class="experience-card">
      <span class="date">{props.date}</span>
      <div>
        <h4>{props.title}</h4>
        <h5>{props.subtitle}</h5>
        <p>{props.children}</p>
        <LabelsGrid labels={props.labels} />
      </div>
    </BaseCard>
  );
};

export default ExperienceCard;
