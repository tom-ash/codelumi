import { saveFile } from '../../../../../../../../../shared/app/components/support/file-input/functions/save-file';
import API_URL from '../../../../../../../../shared/constants/urls/api';

interface SubmitApplication {
  (params: {
    postingId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    linkedInProfile: string;
    gitHubAccount: string;
    cV: File;
  }): void
}

export const submitApplication: SubmitApplication = async (params) => {
  const {
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cV,
  } = params

  const persistedCV = await saveFile({
    apiUrl: API_URL,
    file: cV,
    path: 'temporary',
    randomizeKey: true,
  })

  const body = JSON.stringify({
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cv: persistedCV,
  })

  const response = await fetch(API_URL + '/posting-applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })

  if (response.status == 201) {
    // TODO
  }
}
