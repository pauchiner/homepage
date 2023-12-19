export interface ButtonProps {
  id: string;
  children: any;
  icon?: Element;
}

export interface BaseButtonProps extends ButtonProps {
  onClick?: () => void;
}
