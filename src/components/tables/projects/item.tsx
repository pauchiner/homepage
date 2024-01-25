import {TableLink, TableNameLink} from 'components/links';
import LabelsGrid from 'components/grids/labels';
import styles from './styles.module.css';

interface Props {
  year: string;
  name: string;
  href?: string;
  labels: string[];
}

const Item = (props: Props) => (
  <tr>
    <td class={styles.year}>{props.year}</td>
    <td class={styles.name}>
      <TableNameLink href={props.href}>{props.name}</TableNameLink>
    </td>
    <td class={styles.name}>{props.name}</td>
    <td class={styles.labels}>
      <LabelsGrid labels={props.labels} />
    </td>
    <td class={styles.link}>
      <TableLink href={props.href} />
    </td>
  </tr>
);

export default Item;
