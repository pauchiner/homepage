import {TableLink, TableNameLink} from 'components/links';
import LabelsGrid from 'components/grids/labels';

interface Props {
  year: string;
  name: string;
  href?: string;
  labels: string[];
}

const Item = (props: Props) => (
  <tr>
    <td class="table-year-column">{props.year}</td>
    <td class="table-name-column">
      <TableNameLink href={props.href}>{props.name}</TableNameLink>
    </td>
    <td class="table-name-column">{props.name}</td>
    <td class="table-labels-column">
      <LabelsGrid labels={props.labels} />
    </td>
    <td class="table-link-column">
      <TableLink href={props.href} />
    </td>
  </tr>
);

export default Item;
