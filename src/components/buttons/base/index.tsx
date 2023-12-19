import useAnimations from './hooks/useAnimations';
import './styles.css';

interface Props {
  id: string;
  children: any;
  onClick: () => void;
}

export const BaseButton = (props: Props) => {
  useAnimations(props.id);

  return (
    <button class="button" onClick={props.onClick}>
      <div class="button-border" />
      <div class="button-content">
        <span>{props.children}</span>
      </div>
    </button>
  );
};

export default BaseButton;
