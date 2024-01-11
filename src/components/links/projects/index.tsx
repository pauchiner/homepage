import {ArchiveIcon} from 'components/icons';
import {BaseLink} from '..';

interface Props {
  children: any;
}

export const ProjectsLink = (props: Props) => (
  <BaseLink id="projects-archive-link" href="/projects" icon={<ArchiveIcon />}>
    {props.children}
  </BaseLink>
);

export default ProjectsLink;
