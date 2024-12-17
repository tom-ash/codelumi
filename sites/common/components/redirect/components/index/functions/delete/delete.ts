import { changeUrl } from '../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import {
  fetchApi,
  FetchMethod,
} from '../../../../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';

interface DeleteAsset {
  (id: string): void;
}

export const deleteAsset: DeleteAsset = (id) => {
  fetchApi({
    path: `redirects/${id}`,
    method: FetchMethod.DELETE,
  }).then(() => {
    changeUrl({ href: window.location.href });
  });
};
