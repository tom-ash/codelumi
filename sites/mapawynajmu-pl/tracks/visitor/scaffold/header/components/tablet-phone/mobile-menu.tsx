// import React from 'react';
// import { ShowButton } from './components/show-button';
// import { ListingNewLink } from '../links/components/listing-new-link';
// import { UserNewLink } from '../links/components/user-new-link';
// import { SignInLink } from '../links/components/sign-in';
// import { UserEditLink } from '../links/components/user-edit.link';
// import { SignOutButton } from '../links/components/sign-out-button';
// import { UserListingIndexLink } from '../links/components/user-listing-index';
// import useStyles from 'isomorphic-style-loader-react18/useStyles';
// import styles from './styles/styles.scss';
// import { useUser } from '../../../../../../src copy/sites/shared/app/functions/store/use-user';
// import { useControl } from '../../../../../../src copy/sites/shared/app/functions/store/use-control';
// import { useDispatch } from 'react-redux';

// export const MobileMenu = () => {
//   const { authorized } = useUser();
//   const { showMobileMenu } = useControl();
//   const dispatch = useDispatch();
//   const hideMobileMenuMenu = () =>
//     dispatch({ type: 'control', value: { showMobileMenu: false } });

//   useStyles(styles);

//   return (
//     <>
//       <ShowButton />
//       {showMobileMenu && (
//         <div className="menu-cover" onClick={hideMobileMenuMenu}>
//           <div className="menu mobile">
//             <ListingNewLink />
//             {authorized ? (
//               <>
//                 <UserListingIndexLink />
//                 <UserEditLink />
//                 <SignOutButton />
//               </>
//             ) : (
//               <>
//                 <UserNewLink />
//                 <SignInLink />
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
