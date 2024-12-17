import { SyncProps } from '@/app/[...sync]/page';
import { headers } from 'next/headers';

const getSite = async () => {
  const host = (await headers()).get('host');

  if (host!.includes('mapawynajmu.pl')) {
    return 'mapawynajmu-pl';
  } else {
    return 'skillfind-tech';
  }
};

export async function fetchTrackData(props: SyncProps) {
  const {
    params,
    // searchParams,
  } = props;
  const { sync } = await params;
  const route = sync.join('/');
  const site = await getSite();

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${site}/sync`, {
    headers: {
      'route-url': route,
    },
  });

  const jsonData = await data.json();

  return jsonData;
}
