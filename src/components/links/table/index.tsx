import type {TableLinkProps, TableNameLinkProps} from './types';
import useLink from './hooks/useLink';
import './styles.css';

export const TableLink = (props: TableLinkProps) => {
  if (!props.href) return <></>;

  const {parseUrl} = useLink();

  return (
    <a class="table-link" href={props.href} target="_blank">
      <span>{parseUrl(props.href)}</span>
      <svg width="12" height="13" viewBox="0 0 18 18" fill="currentColor">
        <path d="M6.5413 18.9663L4.67497 17.1L13.95 7.82502H5.8163V5.17498H18.4663V17.825H15.8163V9.69135L6.5413 18.9663Z" />
      </svg>
    </a>
  );
};

export const TableNameLink = (props: TableNameLinkProps) => {
  if (!props.href) return <span class="table-name-link">{props.children}</span>;

  return (
    <a class="table-name-link hover" href={props.href} target="_blank">
      <span>{props.children}</span>
      <svg width="12" height="13" viewBox="0 0 18 18" fill="currentColor">
        <path d="M6.5413 18.9663L4.67497 17.1L13.95 7.82502H5.8163V5.17498H18.4663V17.825H15.8163V9.69135L6.5413 18.9663Z" />
      </svg>
    </a>
  );
};
