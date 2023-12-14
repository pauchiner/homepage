interface Props {
  color: string;
}

export const TwitterIcon = (props: Props) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <path
        fill={props.color}
        d="M27.9893 28.1333L18.608 14.4565L18.624 14.4693L27.0827 4.66667H24.256L17.3653 12.6453L11.8933 4.66667H4.48L13.2384 17.4357L13.2373 17.4347L4 28.1333H6.82667L14.4875 19.2565L20.576 28.1333H27.9893ZM10.7733 6.80001L23.936 26H21.696L8.52267 6.80001H10.7733Z"
      />
    </svg>
  );
};

TwitterIcon.defaultProps = {
  color: 'var(--text)'
};

export default TwitterIcon;
