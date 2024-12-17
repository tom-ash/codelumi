import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { setVerificationToken } from '../../../../../../../../../../common/helpers/cookies/setters/confirmation-token';
import { UserObject } from '../form.types';

interface PostUserObject {
  (args: {
    userObject: UserObject;
    lang: string;
    router: AppRouterInstance;
  }): void;
}

export const postUserObject: PostUserObject = (args) => {
  const { userObject, lang, router } = args;

  fetch(
    process.env.NEXT_PUBLIC_MAPAWYNAJMU_PL_API_URL +
      '/user/create/email-and-password',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Lang: lang },
      body: JSON.stringify(userObject),
    },
  )
    .then(
      (response) => {
        if (response.status == 201) return response.json();

        throw new Error('Something went wrong.');
      },
      (networkError) => console.dir(networkError.message),
    )
    .then((jsonResponse) => {
      const { verificationToken, href } = jsonResponse;

      setVerificationToken(verificationToken);

      router.push(href);
    })
    .catch((e) => console.dir(e));
};
