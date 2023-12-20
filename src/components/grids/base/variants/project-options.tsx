import {TotalProjectsBadge} from 'components/badges';
import {BackIcon} from 'components/icons';
import Link from 'components/links';
import BaseGrid from '..';

export const ProjectOptions = () => (
  <BaseGrid>
    <TotalProjectsBadge>11</TotalProjectsBadge>
    <Link id="back-button" href="/" icon={<BackIcon />} removeTopMargin>
      Back
    </Link>
  </BaseGrid>
);

export default ProjectOptions;
