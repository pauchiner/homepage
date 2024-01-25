import styles from './styles.module.css';

const Avatar = () => {
  return (
    <div class={styles.container}>
      <img
        class={styles.avatar}
        alt="pauchiner's avatar"
        src="/images/avatar.webp"
      />
    </div>
  );
};

export default Avatar;
