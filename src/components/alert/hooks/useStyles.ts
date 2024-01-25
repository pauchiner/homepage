import type {AlertType} from '../types';
import styles from '../styles.module.css';

const useStyles = (type: AlertType) => {
  const typeStyles = () => {
    switch (type) {
      case 'info':
        return styles.info;
      case 'warning':
        return styles.warning;
      case 'success':
        return styles.success;
      case 'error':
        return styles.error;
    }
  };

  return {
    styles: {
      alert: `${styles.alert} ${typeStyles()}`,
      icon: `${styles.icon}`
    }
  };
};

export default useStyles;
