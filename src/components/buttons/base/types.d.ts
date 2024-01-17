import type {ComponentChildren, VNode} from 'preact';

interface ButtonProps {
  id: string;
  children: ComponentChildren;
}

export interface BaseButtonProps extends ButtonProps {
  onClick?: () => void;
  icon?: VNode<ComponentChildren>;
}

export interface FormButtonProps extends ButtonProps {
  submitted: boolean;
  submitting: boolean;
}
