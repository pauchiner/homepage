import LabelsGrid from 'components/grids/labels';

interface Props {
  year: string;
  name: string;
  link: string;
  href: string;
  labels: string[];
}

const Item = (props: Props) => (
  <tr>
    <td class="table-year">{props.year}</td>
    <td class="table-name">{props.name}</td>
    <td class="table-labels">
      <LabelsGrid labels={props.labels} />
    </td>
    <td class="table-link">
      <a href={props.href} tabindex={-1} target="_blank">
        {props.link}
      </a>
    </td>
  </tr>
);

export default Item;
