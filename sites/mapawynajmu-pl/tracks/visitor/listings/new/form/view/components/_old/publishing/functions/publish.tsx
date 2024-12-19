//   // @ts-ignore
//   const announcement = { ...buildAnouncement.call(this), addPromotion };
//   const user = authorized
//     ? {}
//     : buildUserObject({
//         accountType,
//         businessName,
//         emailAddress,
//         password,
//         countryCode,
//         phoneNumber,
//         termsOfServiceConsent,
//         termsOfServiceConsentLabel,
//         setErrors,
//       });

//   if (!authorized && !user) {
//     setControl({ connecting: false });

//     return scrollToElement(
//       document.getElementById('users-new-email-first-name'),
//       12,
//       -160,
//     );
//   }

//   // @ts-ignore
//   window.gtag('event', 'listing_added');

//   if (addPromotion) {
//     // @ts-ignore
//     window.gtag('event', 'promotion_added');
//   }

//   setData({ announcement, user });
//   setControl({ connecting: false, step: 'publishing' });
// }
