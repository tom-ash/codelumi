import { changeUrl } from '../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import {
  fetchApi,
  FetchMethod,
} from '../../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';

interface UpdateAsset {
  (args: { id: string; name: string; pathData: string; viewBox: string }): void;
}

export const updateAsset: UpdateAsset = (args) => {
  const { id, name, pathData, viewBox } = args;

  fetchApi({
    path: `assets/${id}`,
    method: FetchMethod.PUT,
    body: {
      name,
      pathData,
      viewBox,
    },
  }).then(() => {
    changeUrl({ href: window.location.href });
  });
};
