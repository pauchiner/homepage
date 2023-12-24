import type {SpinnerState} from '../types';
import {useEffect} from 'preact/hooks';

const useAnimations = (state: SpinnerState) => {
  useEffect(() => {
    if (state === 'done') {
      const spinner = document.querySelector('.spinner') as HTMLElement;
      spinner.style.width = '18.5px';
    }
  }, [state]);
};

export default useAnimations;
