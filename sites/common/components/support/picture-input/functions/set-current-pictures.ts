import { PersistedPicture } from '../types/persisted-picture.interface';
import { SetPictures } from '../types/set-pictures.interface';

interface SetCurrentPictures {
  (params: {
    persistedPictures: PersistedPicture[];
    setPictures: SetPictures;
  }): void;
}

export const setCurrentPictures: SetCurrentPictures = async (params) => {
  const { persistedPictures, setPictures } = params;

  const pictures = await Promise.all(
    persistedPictures.map(async (persistedPictures) => {
      const { source, database } = persistedPictures;

      const response = await fetch(source, {
        method: 'GET',
        headers: {
          // https://stackoverflow.com/questions/76669136/axios-get-from-s3-no-access-control-allow-origin
          'Cache-Control': 'no-cache',
        },
      });
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      return {
        blob,
        objectUrl,
        database,
      };
    }),
  );

  setPictures(pictures);
};
