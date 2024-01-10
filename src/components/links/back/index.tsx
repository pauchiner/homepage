import {BackIcon} from 'components/icons';
import {BaseLink} from '..';

interface Props {
  children: any;
  removeTopMargin?: boolean;
}

export const BackLink = (props: Props) => (
  <BaseLink
    id="back-link"
    href="/"
    icon={<BackIcon />}
    removeTopMargin={props.removeTopMargin}>
    {props.children}
  </BaseLink>
);

export default BackLink;
