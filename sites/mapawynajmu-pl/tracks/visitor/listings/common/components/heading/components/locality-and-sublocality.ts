interface LocalityAndSublocalityProps {
  locality: string;
  sublocality?: string;
}

export const LocalityAndSublocality = (props: LocalityAndSublocalityProps) => {
  const { locality, sublocality } = props;

  if (locality && sublocality) return `${locality} - ${sublocality}`;

  return locality;
};
