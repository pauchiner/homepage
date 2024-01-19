import type {AlertProps} from '../types';
import {useEffect} from 'preact/hooks';

const useAnimations = (props: AlertProps) => {
  useEffect(() => {
    const alert = document.querySelector(`#${props.id}`) as HTMLElement;

    if (props.visible) {
      alert.scrollIntoView({behavior: 'smooth'});

      alert.style.transitionDuration = '0.3s';
      alert.style.visibility = 'visible';
      alert.style.height = 'inherit';
      alert.style.opacity = '1';
    } else {
      alert.style.transitionDuration = '0s';
      alert.style.visibility = 'hidden';
      alert.style.opacity = '0';
    }
  }, [props.visible]);
};

export default useAnimations;
