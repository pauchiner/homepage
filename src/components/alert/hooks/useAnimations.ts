import type {AlertProps} from '../types';
import {useEffect} from 'preact/hooks';

const useAnimations = (props: AlertProps) => {
  useEffect(() => {
    const alert = document.querySelector(`#${props.id}`) as HTMLElement;
    if (props.visible) alert.scrollIntoView({behavior: 'smooth'});

    alert.style.visibility = props.visible ? 'visible' : 'hidden';
    alert.style.height = props.visible ? 'inherit' : '0px';
    alert.style.transform = props.visible ? 'scaleY(1)' : 'scaleY(0.95)';
    alert.style.opacity = props.visible ? '1' : '0';
  }, [props.visible]);
};

export default useAnimations;
