import useAnimations from './hooks/useAnimations';
import type {AlertProps} from './types';
import Icon from './icon';
import './styles.css';

const Alert = (props: AlertProps) => {
  useAnimations(props);

  return (
    <div id={props.id} class={`alert ${props.type}`}>
      <div class="icon">{props.children && <Icon type={props.type} />}</div>
      <p>{props.children}</p>
    </div>
  );
};

Alert.defaultProps = {
  visible: true
};

export default Alert;
