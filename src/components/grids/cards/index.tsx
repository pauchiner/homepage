import './styles.css';

interface Props {
  children: any;
}

export const CardsGrid = (props: Props) => {
  return <div class="cards-grid">{props.children}</div>;
};

export default CardsGrid;
