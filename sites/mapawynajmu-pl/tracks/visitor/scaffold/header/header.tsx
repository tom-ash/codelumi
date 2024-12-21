import { useMemo } from 'react';
import { LinkData } from '../../../../../../lib/types/link-data';
import { LangSwitch } from '../../../../../common/components/support/lang-switch/lang-switch';
import { Lang } from '../../../common/types/lang';
import styles from './header.module.css';
import { FloatClear } from '../../../../../common/components/support/float-clear/float-clear';
import { LogoLink } from './components/common/logo';
import { PCLinks } from './components/pc/pc-links';
import { SetControl } from '../../../../../../lib/types/setters';

interface HeaderProps {
  lang: Lang;
  authenticated: boolean;
  currentPlLinkData?: LinkData;
  currentEnLinkData?: LinkData;
  rootLinkData: LinkData;
  visitorListingsNewLinkData: LinkData;
  visitorUsersNewLinkData: LinkData;
  visitorUsersAuthLinkData: LinkData;
  setControl: SetControl;
  showPCUserUsersShowDropDown: boolean;
}

const Header = (props: HeaderProps) => {
  const {
    lang,
    authenticated,
    rootLinkData,
    currentPlLinkData,
    currentEnLinkData,
    visitorListingsNewLinkData,
    visitorUsersNewLinkData,
    visitorUsersAuthLinkData,
    setControl,
    showPCUserUsersShowDropDown,
  } = props;

  const alternateLangLinks = useMemo(() => {
    const links = [];

    if (currentPlLinkData) {
      links.push({ ...currentPlLinkData, label: 'pl' });
    }

    if (currentEnLinkData) {
      links.push({ ...currentEnLinkData, label: 'en' });
    }

    return links;
  }, []);

  console.log('showDropDown', showPCUserUsersShowDropDown)

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <LogoLink
          rootLinkData={rootLinkData}
          extendedLogoClassName={styles.extendedLogo}
          extendedLogoTitleClassName={styles.extendedLogoTitle}
          className={styles.logoLink}
        />
        <LangSwitch
          lang={lang}
          alternateLangLinks={alternateLangLinks}
          styles={styles}
        />
        <PCLinks
          authenticated={authenticated}
          rootLinkData={rootLinkData}
          visitorListingsNewLinkData={visitorListingsNewLinkData}
          visitorUsersNewLinkData={visitorUsersNewLinkData}
          visitorUsersAuthLinkData={visitorUsersAuthLinkData}
          setControl={setControl}
          showDropDown={showPCUserUsersShowDropDown}
        />
        {/* {!isMobile && <Links />} */}
        {/* {showMyAccountMenu && <MyAccountMenu />} */}
        {/* {isMobile && <MobileMenu />} */}
        <FloatClear />
      </div>
    </header>
  );
};

export default Header;

// announcement/index/user // MY LISTINGS
// user/edit // ACCOUNT
// visitorPageIndex // ARTYKULY

// const { device } = useApp();
// const { showMyAccountMenu } = useControl();

// // TODO!!!
// const isMobile =
//   ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(
//     device,
//   ) !== -1;

// TODO: ADD ARTICLES TO MOBILE MENU!
