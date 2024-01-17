import type {ComponentChildren} from 'preact';

export interface TableLinkProps {
  href?: string;
}

export interface TableNameLinkProps extends TableLinkProps {
  children: ComponentChildren;
}
