import Divider from 'components/divider';
import Link from './link';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <Divider />
      <p>
        Designed with <Link href="https://figma.com">Figma</Link>, Built with{' '}
        <Link href="https://astro.build">Astro</Link>, Deployed with{' '}
        <Link href="https://vercel.com">Vercel</Link>.
      </p>
    </footer>
  );
};

export default Footer;
