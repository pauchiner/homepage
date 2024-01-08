import type {VNode} from 'preact';

interface ButtonProps {
  id: string;
  children: any;
}

export interface BaseButtonProps extends ButtonProps {
  icon?: VNode<any>;
  onClick?: () => void;
}

export interface FormButtonProps extends ButtonProps {
  submitted: boolean;
  submitting: boolean;
}
