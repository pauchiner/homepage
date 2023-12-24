import {DoneIcon, ErrorIcon, InfoIcon} from 'components/icons';
import type {AlertIconProps} from './types';

const AlertIcon = (props: AlertIconProps) => {
  switch (props.type) {
    case 'info':
      return <InfoIcon />;
    case 'success':
      return <DoneIcon variant="circle" />;
    default:
      return <ErrorIcon />;
  }
};

export default AlertIcon;
