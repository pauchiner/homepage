import LabelsGrid from 'components/grids/labels';
import type {ComponentChildren} from 'preact';
import styles from './styles.module.css';
import BaseCard from '../base';

interface Props {
  date: string;
  title: string;
  labels: string[];
  subtitle: string;
  children: ComponentChildren;
}

export const ExperienceCard = (props: Props) => {
  return (
    <BaseCard class={styles.card}>
      <span class={styles.date}>{props.date}</span>
      <div class={styles.content}>
        <h4>{props.title}</h4>
        <h5>{props.subtitle}</h5>
        <p>{props.children}</p>
        <LabelsGrid labels={props.labels} />
      </div>
    </BaseCard>
  );
};

export default ExperienceCard;
