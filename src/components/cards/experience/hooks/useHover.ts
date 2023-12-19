import {useEffect} from 'preact/hooks';

const useHover = () => {
  const handleHover = (event: MouseEvent) => {
    const cards = [
      ...document.querySelectorAll('.experience-card')
    ] as HTMLElement[];

    cards.forEach(card => {
      const rect = card.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  useEffect(() => {
    const grid = document.querySelector('.experience-grid');

    grid.addEventListener('mousemove', handleHover);
    return () => grid.removeEventListener('mousemove', handleHover);
  }, []);
};

export default useHover;
