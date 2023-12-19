import useAnimations from './hooks/useAnimations';
import type {ButtonProps, BaseButtonProps} from './types';
import './styles.css';

export const Button = (props: BaseButtonProps) => {
  useAnimations(props.id);

  return (
    <button id={props.id} class="button" onClick={props.onClick || undefined}>
      <div class="button-border" />
      <div class="button-content">
        <span>{props.children}</span>
        {props.icon || <></>}
      </div>
    </button>
  );
};

export const FormButton = (props: ButtonProps) => {
  useAnimations(props.id);

  return (
    <button id={props.id} class="button" type="submit">
      <div class="button-border" />
      <div class="button-content">
        <span>{props.children}</span>
        {props.icon || (
          <svg width="18" height="18" viewBox="0 0 18 18">
            <mask
              id="mask0_113_878"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18">
              <rect width="18" height="18" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_113_878)">
              <path
                d="M2.25 15V10.5L8.25 9L2.25 7.5V3L16.5 9L2.25 15Z"
                fill="#F77FBD"
              />
            </g>
          </svg>
        )}
      </div>
    </button>
  );
};

export default Button;
