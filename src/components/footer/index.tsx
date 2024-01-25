import Divider from 'components/divider';
import styles from './styles.module.css';
import Link from './link';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      <Divider />
      <p class={styles.paragraph}>
        Designed with <Link href="https://figma.com">Figma</Link>, Built with{' '}
        <Link href="https://astro.build">Astro</Link>, Deployed with{' '}
        <Link href="https://vercel.com">Vercel</Link>.
      </p>
    </footer>
  );
};

export default Footer;
