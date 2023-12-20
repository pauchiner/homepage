import type {VNode} from 'preact';

export interface ButtonProps {
  id: string;
  children: any;
  icon?: VNode<any>;
}

export interface BaseButtonProps extends ButtonProps {
  onClick?: () => void;
}
