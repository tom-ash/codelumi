import { LinkData } from '../../../../../../../../lib/types/link-data';
import { FloatClear } from '../../../../../../../common/components/support/float-clear/float-clear';
import { VisitorListingsNewLink } from '../common/visitor-listings-new-link';
import styles from '../../header.module.css';
import { VisitorUsersNewLink } from '../common/visitor-users-new-link';
import { VisitorUsersAuthLink } from '../common/visitor-users-auth-link';
import { UserUsersDeAuthButton } from '../common/user-users-de-auth-button';
import { PCUserUsersShowButton } from './pc-user-users-show.button';
import { SetControl } from '../../../../../../../../lib/types/setters';

interface PCLinksProps {
  authenticated: boolean;
  rootLinkData: LinkData;
  visitorListingsNewLinkData: LinkData;
  visitorUsersNewLinkData: LinkData;
  visitorUsersAuthLinkData: LinkData;
  setControl: SetControl;
  showDropDown: boolean;
}

export const PCLinks = (props: PCLinksProps) => {
  const {
    authenticated,
    rootLinkData,
    visitorListingsNewLinkData,
    visitorUsersNewLinkData,
    visitorUsersAuthLinkData,
    setControl,
    showDropDown,
  } = props;

  return (
    <div className={styles.desktopLinks}>
      <VisitorListingsNewLink data={visitorListingsNewLinkData} />
      {!authenticated && (
        <>
          <VisitorUsersNewLink data={visitorUsersNewLinkData} />
          <VisitorUsersAuthLink data={visitorUsersAuthLinkData} />
        </>
      )}
      {authenticated && (
        <>
          <UserUsersDeAuthButton rootLinkData={rootLinkData} />
          <PCUserUsersShowButton setControl={setControl} />
        </>
      )}
      {showDropDown && (
        // COVER
        <div>(USER MENU)</div>
      )}
      {/* <VisitorPageIndexLink /> */}
      <FloatClear />
    </div>
  );
};

// announcement/index/user
// user/edit
// visitorPageIndex // ARTYKULY
