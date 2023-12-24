import useAnimations from '../base/hooks/useAnimations';
import type {FormButtonProps} from '../base/types';
import ButtonContent from './content';

export const FormButton = (props: FormButtonProps) => {
  useAnimations(props.id);

  return (
    <button id={props.id} class="button" type="submit">
      <div class="button-border" />
      <ButtonContent submitted={props.submitted} submitting={props.submitting}>
        {props.children}
      </ButtonContent>
    </button>
  );
};

export default FormButton;
