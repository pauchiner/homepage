import {TotalProjectsBadge} from 'components/badges';
import {BackIcon} from 'components/icons';
import {BackLink} from 'components/links';
import BaseGrid from '..';

export const ProjectOptions = () => (
  <BaseGrid>
    <TotalProjectsBadge>13</TotalProjectsBadge>
    <BackLink removeTopMargin> Back </BackLink>
  </BaseGrid>
);

export default ProjectOptions;
