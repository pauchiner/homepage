import type {FormButtonProps} from '../base/types';
import {SendIcon} from 'components/icons';
import Spinner from 'components/spinner';

interface Props {
  submitted: boolean;
  submitting: boolean;
  children: any;
}

const ButtonContent = (props: Props) => {
  if (props.submitting || props.submitted) {
    return (
      <div class="button-content">
        <Spinner state={props.submitted ? 'done' : 'loading'} />
      </div>
    );
  }

  return (
    <div class="button-content">
      <span>{props.children}</span>
      <SendIcon />
    </div>
  );
};

export default ButtonContent;
