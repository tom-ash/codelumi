// @ts-ignore TODO!
export const setConsents = (dispatch) => {
  const consent = localStorage.getItem('consent');

  if (consent) {
    const parsedConsent = JSON.parse(consent);
    const { analytics_storage, ad_storage } = parsedConsent;

    dispatch({
      type: 'visitor',
      value: {
        statisticsConsent: analytics_storage === 'granted',
        marketingConsent: ad_storage === 'granted',
      },
    });
  } else {
    dispatch({
      type: 'visitor',
      value: {
        statisticsConsent: null,
        marketingConsent: null,
      },
    });
  }
};
