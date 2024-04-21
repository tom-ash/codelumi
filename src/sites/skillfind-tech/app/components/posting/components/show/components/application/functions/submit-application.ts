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
    // TODO;
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
  } = params

  // TODO: Save CV in pdf.

  const body = JSON.stringify({
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
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
