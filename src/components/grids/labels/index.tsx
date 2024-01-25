import styles from './styles.module.css';

interface Props {
  labels: string[];
}

const LabelsGrid = (props: Props) => {
  if (!props.labels) return <></>;
  const content = props.labels.map(text => (
    <span class={styles.label}>{text}</span>
  ));

  return <div class={styles.grid}>{content}</div>;
};

export default LabelsGrid;
