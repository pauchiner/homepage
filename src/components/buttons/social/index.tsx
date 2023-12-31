import './styles.css';

interface Props {
  name: string;
  href: string;
  children: any;
}

export const SocialButton = (props: Props) => {
  return (
    <a
      aria-label={props.name}
      class="social-button"
      href={props.href}
      target="_blank">
      {props.children}
    </a>
  );
};

export default SocialButton;
