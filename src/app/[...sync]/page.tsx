import { Metadata } from 'next';
import { fetchTrackData } from '../../../sites/common/helpers/fetch-track-data/fetch-track-data';
import Tracks from '../../../sites/mapawynajmu-pl/tracks/tracks';
import { cookies } from 'next/headers';

export type SyncProps = {
  params: Promise<{ sync: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: SyncProps): Promise<Metadata> {
  const trackData = await fetchTrackData(props);

  return {
    title: trackData.meta.title,
    // TODO
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

// const create

export default async function Sync(props: SyncProps) {
  const data = await fetchTrackData(props);

  return <Tracks data={data} />;
}
