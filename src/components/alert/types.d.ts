type AlertType = 'info' | 'warning' | 'success' | 'error';

export interface AlertIconProps {
  type: AlertType;
}

export interface AlertProps {
  type: AlertType;
  children: any;
}
