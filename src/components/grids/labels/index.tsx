import './styles.css';

interface Props {
  labels: string[];
}

const LabelsGrid = (props: Props) => {
  if (!props.labels) return <></>;
  const content = props.labels.map(text => <span class="label">{text}</span>);

  return <div class="labels-grid">{content}</div>;
};

export default LabelsGrid;
