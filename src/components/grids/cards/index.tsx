import useAnimations from './hooks/useAnimations';
import type {ComponentChildren} from 'preact';
import './styles.css';

interface Props {
  className: string;
  children: ComponentChildren;
}

export const CardsGrid = (props: Props) => {
  useAnimations(props.className);

  return <div class={`cards-grid ${props.className}`}>{props.children}</div>;
};

export default CardsGrid;
