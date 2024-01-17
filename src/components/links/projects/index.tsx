import type {ComponentChildren} from 'preact';
import {ArchiveIcon} from 'components/icons';
import {BaseLink} from '..';

interface Props {
  children: ComponentChildren;
}

export const ProjectsLink = (props: Props) => (
  <BaseLink id="projects-archive-link" href="/projects" icon={<ArchiveIcon />}>
    {props.children}
  </BaseLink>
);

export default ProjectsLink;
