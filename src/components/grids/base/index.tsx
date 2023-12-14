import './styles.css';

interface Props {
  name?: string;
  children: any;
}

export const BaseGrid = (props: Props) => {
  return (
    <div id={props.name || ''} class="base-grid">
      {props.children}
    </div>
  );
};

export default BaseGrid;
