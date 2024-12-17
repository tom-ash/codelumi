import { changeUrl } from '../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import {
  fetchApi,
  FetchMethod,
} from '../../../../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';

interface UpdateAsset {
  (args: { id: string; originalUrl: string; redirectedUrl: string }): void;
}

export const updateAsset: UpdateAsset = (args) => {
  const { id, originalUrl, redirectedUrl } = args;

  fetchApi({
    path: `redirects/${id}`,
    method: FetchMethod.PUT,
    body: {
      originalUrl,
      redirectedUrl,
    },
  }).then(() => {
    changeUrl({ href: window.location.href });
  });
};
