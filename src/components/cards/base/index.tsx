import useAnimation from './hooks/useAnimation';
import './styles.css';

interface Props {
  class?: string;
  children: any;
}

export const BaseCard = (props: Props) => {
  useAnimation();

  return (
    <div class={`card ${props.class}`}>
      <div class="card-border" />
      <article>{props.children}</article>
    </div>
  );
};

export default BaseCard;
