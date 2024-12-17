interface SVGProps {
  data: {
    viewBox: string;
    pathData: string;
  };
  className?: string;
}

export const SVG = (props: SVGProps) => {
  const { data, className } = props;

  if (!data) {
    return null;
  }

  const { viewBox, pathData } = data;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
    >
      <path d={pathData} />
    </svg>
  );
};
