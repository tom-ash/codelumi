import { headers } from 'next/headers';

export const getSite = async () => {
  const host = (await headers()).get('host');

  if (host!.includes('mapawynajmu.pl')) {
    return 'mapawynajmu-pl';
  } else {
    return 'skillfind-tech';
  }
};
