import {LoadingIcon, DoneIcon} from 'components/icons';
import useAnimations from './hooks/useAnimations';
import type {SpinnerProps} from './types';
import './styles.css';

const Icon = (props: SpinnerProps) => {
  switch (props.state) {
    case 'done':
      return <DoneIcon />;
    default:
      return <LoadingIcon />;
  }
};

export const Spinner = (props: SpinnerProps) => {
  useAnimations(props.state);

  return (
    <div class={`spinner ${props.state}`}>
      <Icon state={props.state} />
    </div>
  );
};

Spinner.defaultProps = {
  state: 'loading'
};

export default Spinner;
