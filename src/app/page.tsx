import { getSite } from '../../lib/helpers/getters/get-site';
import Tracks from '../../sites/mapawynajmu-pl/tracks/tracks';

export async function fetchRootData() {
  const site = await getSite();

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${site}/sync`, {
    headers: {
      'route-url': '/',
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
