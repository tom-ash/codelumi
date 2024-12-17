import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Picture } from '../../../../common/components/support/picture-input/types/picture.interface';
import { getAccessToken } from '../../../../common/components/user/components/auth/functions/get-access-token';
import { savePictures } from '../common/components/form/components/pictures/functions/save-pictures';
import { createSocialImage } from '../../../../common/components/support/social-image-canvas/functions/create-social-image';

export const CREATE_API_ROUTE_DATA = {
  method: 'POST',
  route: '/announcement/create/as-user',
};

interface createParams {
  lang: string;
  category: number;
  latitude: number;
  longitude: number;
  pictures: Picture[];
  router: AppRouterInstance;
}

export const create = async (params: createParams) => {
  const {
    lang,
    category,
    latitude,
    longitude,
    pictures: picturesToSave,
    router,
  } = params;
  const { method, route } = CREATE_API_ROUTE_DATA;
  const accessToken = getAccessToken();
  const pictures = await savePictures(picturesToSave);

  const socialImage = await createSocialImage({
    apiUrl: process.env.NEXT_PUBLIC_MAPAWYNAJMU_PL_API_URL!,
  });

  const listingParams = {
    lang,
    category,
    latitude,
    longitude,
    pictures,
    socialImage,
    isPromoted: false, // TODO
    addPromotion: false, // TODO
  };

  const response = await fetch(
    process.env.NEXT_PUBLIC_MAPAWYNAJMU_PL_API_URL! + route,
    {
      method,
      // @ts-ignore // TODO
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken,
        Lang: lang,
      },
      body: JSON.stringify({
        announcement: listingParams,
      }),
    },
  );

  if (response.ok) {
    const href = await response.json();

    router.push(href);
  }

  // TODO: else
};

// // @ts-ignore
// function createWithUser(savedPictures, socialImage) {
//   // @ts-ignore
//   const { lang, announcement, user } = this.props;
//   const { method, route } = CREATE_WITH_USER_API_ROUTE_DATA;

//   fetch(API_URL + route, {
//     method,
//     headers: { 'Content-Type': 'application/json', Lang: lang },
//     body: JSON.stringify({
//       announcement: { ...announcement, pictures: savedPictures, socialImage },
//       user,
//     }),
//   })
//     .then((response) => {
//       if (response.ok) return response.json();
//     })
//     .then((jsonResponse) => {
//       const { verificationToken, href } = jsonResponse;

//       setVerificationToken(verificationToken);
//       changeUrl({ href });
//     });
// }

// export default createAnnouncement;
