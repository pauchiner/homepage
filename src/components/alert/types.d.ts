type AlertType = 'info' | 'warning' | 'success' | 'error';

export interface AlertIconProps {
  type: AlertType;
}

export interface AlertProps {
  id: string;
  type: AlertType;
  children: any;
  visible: boolean;
}
