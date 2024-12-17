interface SectionHeadingProps {
  value: string;
  className?: string;
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const { value, className } = props;

  return <h2 className={className}>{value}</h2>;
};
