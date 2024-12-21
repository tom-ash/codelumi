import { SyncProps } from '@/app/[...sync]/page';
import { cookies } from 'next/headers';
import { getSite } from '../../../../lib/helpers/getters/get-site';

export async function fetchTrackData(props: SyncProps) {
  const {
    params,
    // searchParams,
  } = props;
  const { sync } = await params;
  const route = sync.join('/');
  const site = await getSite();

  const accessToken = (await cookies()).get('access_token')?.value;

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${site}/sync`, {
    // @ts-ignore
    headers: {
      'route-url': route,
      'Access-Token': accessToken,
    },
  });

  const jsonData = await data.json();

  return jsonData;
}
