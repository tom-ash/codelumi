import { cookies } from 'next/headers';
import { getSite } from '../../lib/helpers/getters/get-site';
import Tracks from '../../sites/mapawynajmu-pl/tracks/tracks';

export async function fetchRootData() {
  const site = await getSite();

  const accessToken = (await cookies()).get('access_token')?.value;

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${site}/sync`, {
    // @ts-ignore
    headers: {
      'route-url': '/',
      'Access-Token': accessToken,
    },
  });

  const jsonData = await data.json();

  return jsonData;
}

const Root = async () => {
  const data = await fetchRootData();

  return <Tracks data={data} />;
};

export default Root;
