import LabelsGrid from 'components/grids/labels';
import Link from './link';

type LinkType = 'github' | 'no-link' | 'other';

interface Props {
  year: string;
  name: string;
  href: string;
  labels: string[];
  linkName: string;
  linkType: LinkType;
}

const Item = (props: Props) => (
  <tr>
    <td class="table-year">{props.year}</td>
    <td class="table-name">{props.name}</td>
    <td class="table-labels">
      <LabelsGrid labels={props.labels} />
    </td>
    <td class="table-link">
      <Link
        linkType={props.linkType}
        linkName={props.linkName}
        href={props.href}
      />
    </td>
  </tr>
);

Item.defaultProps = {
  linkType: 'no-link',
  linkName: '',
  href: ''
};

export default Item;
