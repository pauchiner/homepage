export interface Button {
  id: string;
  children: any;
  icon?: Element;
}

export interface BaseButton extends Button {
  onClick?: () => void;
}
