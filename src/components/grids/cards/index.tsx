import useAnimations from './hooks/useAnimations';
import './styles.css';

interface Props {
  className: string;
  children: any;
}

export const CardsGrid = (props: Props) => {
  useAnimations(props.className);

  return <div class={`cards-grid ${props.className}`}>{props.children}</div>;
};

export default CardsGrid;
