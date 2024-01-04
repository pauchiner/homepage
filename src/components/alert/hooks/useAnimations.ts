import type {AlertProps} from '../types';
import {useEffect} from 'preact/hooks';

const useAnimations = (props: AlertProps) => {
  useEffect(() => {
    const alert = document.querySelector(`#${props.id}`) as HTMLElement;
    alert.style.display = props.visible ? 'flex' : 'none';
  }, [props.visible]);
};

export default useAnimations;
