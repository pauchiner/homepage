import type {ComponentChildren} from 'preact';
import {BackIcon} from 'components/icons';
import {BaseLink} from '..';

interface Props {
  removeTopMargin?: boolean;
  children: ComponentChildren;
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
