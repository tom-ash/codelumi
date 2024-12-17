import setCookie from './cookie';

export const setVerificationToken = (verificationToken: string) => {
  setCookie('verificationToken', verificationToken, 'oneDay');
};
