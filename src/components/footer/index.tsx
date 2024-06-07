import Divider from 'components/divider';
import styles from './styles.module.css';
import Link from './link';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <Divider />
      <p class={styles.paragraph}>
        Built with <Link href="https://astro.build">Astro</Link>
      </p>
    </footer>
  );
};

export default Footer;
