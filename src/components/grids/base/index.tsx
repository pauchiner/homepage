import type {ComponentChildren} from 'preact';
import './styles.css';

interface Props {
  name?: string;
  children: ComponentChildren;
}

export const BaseGrid = (props: Props) => {
  return (
    <div id={props.name || ''} class="base-grid">
      {props.children}
    </div>
  );
};

export default BaseGrid;
