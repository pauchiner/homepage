import './styles.css';

export const ArrowButton = () => {
  return (
    <div id="arrow-container">
      <button tabindex="-1" aria-hidden="true" class="arrow-button">
        <svg viewBox="0 0 16 16" fill="none">
          <g transform="rotate(45 1254.793 524.438)">
            <path
              fill="currentColor"
              d="M.536 1044.409v-1.997h9v-9h2v11z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ArrowButton;
