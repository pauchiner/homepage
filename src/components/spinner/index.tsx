import {LoadingIcon, DoneIcon} from 'components/icons';
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
