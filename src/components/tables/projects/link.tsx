import {GithubIcon} from 'components/icons';

type LinkType = 'github' | 'no-link' | 'other';

interface Props {
  href: string;
  linkName: string;
  linkType: LinkType;
}

const Link = (props: Props) => {
  switch (props.linkType) {
    case 'github':
      return (
        <a href={props.href} tabindex={-1} target="_blank">
          <GithubIcon />
        </a>
      );
    case 'other':
      return (
        <a href={props.href} tabindex={-1} target="_blank">
          {props.linkName}
        </a>
      );
  }

  return <></>;
};

Link.defaultProps = {
  linkType: 'no-link',
  linkName: '',
  href: ''
};

export default Link;
