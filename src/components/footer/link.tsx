interface Props {
  href: string;
  children: any;
}

const Link = (props: Props) => (
  <a tabindex={-1} href={props.href} target="_blank">
    {props.children}
  </a>
);

export default Link;
