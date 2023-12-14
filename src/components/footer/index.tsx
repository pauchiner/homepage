import Divider from 'components/divider';
import './styles.css';

interface LinkProps {
  href: string;
  children: any;
}

const Link = (props: LinkProps) => {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <Divider />
      <p>
        Designed with <Link href="https://figma.com">Figma</Link>, Built with{' '}
        <Link href="https://astro.build">Astro</Link> and{' '}
        <Link href="https://preactjs.com">Preact</Link>, Deployed with{' '}
        <Link href="https://vercel.com">Vercel</Link>.
      </p>
    </footer>
  );
};

export default Footer;
