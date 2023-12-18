interface Props {
  href: string;
  children: any;
}

const Link = (props: Props) => (
  <a href={props.href} target="_blank">
    {props.children}
  </a>
);

export default Link;
