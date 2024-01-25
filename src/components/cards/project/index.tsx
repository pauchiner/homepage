import LabelsGrid from 'components/grids/labels';
import styles from './styles.module.css';
import BaseCard from '../base';

interface Props {
  date: string;
  title: string;
  image: string;
  labels: string[];
  description: string;
}

export const ProjectCard = (props: Props) => {
  return (
    <BaseCard class={styles.card}>
      <div class={styles.image}>
        <img src={props.image} alt="project preview" loading="lazy" />
      </div>
      <div class={styles.content}>
        <h4>
          {props.title}
          <span class={styles.date}>{props.date}</span>
        </h4>
        <p>{props.description}</p>
        <LabelsGrid labels={props.labels} />
      </div>
    </BaseCard>
  );
};

export default ProjectCard;
