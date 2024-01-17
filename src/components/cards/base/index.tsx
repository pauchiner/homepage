import type {ComponentChildren} from 'preact';
import './styles.css';

interface Props {
  class?: string;
  children: ComponentChildren;
}

export const BaseCard = (props: Props) => (
  <div class={`card ${props.class}`}>
    <div class="card-border" />
    <article>{props.children}</article>
  </div>
);

export default BaseCard;
