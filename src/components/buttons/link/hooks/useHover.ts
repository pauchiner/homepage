import {useEffect} from 'preact/hooks';

const useHover = () => {
  const handleHover = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target?.style.setProperty('--mouse-x', `${x}px`);
    target?.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.link-button');

    buttons.forEach(button => {
      button.addEventListener('mousemove', handleHover);
      return () => button.removeEventListener('mousemove', handleHover);
    });
  }, []);
};

export default useHover;
