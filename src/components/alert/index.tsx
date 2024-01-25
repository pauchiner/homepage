import useAnimations from './hooks/useAnimations';
import type {AlertProps} from './types';
import Icon from './icon';
import useStyles from './hooks/useStyles';

const Alert = (props: AlertProps) => {
  const {styles} = useStyles(props.type);
  useAnimations(props);

  return (
    <div id={props.id} class={styles.alert}>
      <div class={styles.icon}>
        {props.children && <Icon type={props.type} />}
      </div>
      <p>{props.children}</p>
    </div>
  );
};

Alert.defaultProps = {
  visible: true
};

export default Alert;
