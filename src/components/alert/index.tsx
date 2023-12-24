import type {AlertProps} from './types';
import Icon from './icon';
import './styles.css';

const Alert = (props: AlertProps) => (
  <div class={`alert ${props.type}`}>
    <div class="icon">
      <Icon type={props.type} />
    </div>
    <p>{props.children}</p>
  </div>
);

export default Alert;
