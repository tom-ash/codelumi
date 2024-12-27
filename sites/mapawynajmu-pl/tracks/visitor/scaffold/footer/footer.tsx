import { LinkData } from '../../../../../../lib/types/link-data';
import { FloatClear } from '../../../../../common/components/support/float-clear/float-clear';
import { Link } from '../../../../../common/components/support/link/link';
import styles from './footer.module.css';

interface FooterProps {
  facebookLinkData: LinkData;
  linkedinLinkData: LinkData;
  contactLinkData: LinkData;
  termsOfServiceLinkData: LinkData;
  cookiesPolicyLinkData: LinkData;
  privacyPolicyLinkData: LinkData;
  privacySettingsLinkData: LinkData;
}

const Footer = (props: FooterProps) => {
  const {
    facebookLinkData,
    linkedinLinkData,
    contactLinkData,
    termsOfServiceLinkData,
    cookiesPolicyLinkData,
    privacyPolicyLinkData,
    privacySettingsLinkData,
  } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.socialPages}>
        <Link
          data={{ ...facebookLinkData, label: 'FACEBOOK' }} // TODO
        />
        <Link
          data={{ ...linkedinLinkData, label: 'LINKEDIN' }} // TODO
        />
      </div>
      <div className={styles.administration}>
        <div className={styles.links}>
          <Link data={contactLinkData} />
          <Link data={termsOfServiceLinkData} />
          <Link data={cookiesPolicyLinkData} />
          <Link data={privacyPolicyLinkData} />
          <Link data={privacySettingsLinkData} />
          <FloatClear />
        </div>
      </div>
      <div className={styles.copyright}>
        <span className={styles.warsawDigital}>
          Warsaw Digital Sp. z o.o. 2020 - 2023
        </span>
        {/* <span className="all-rights-reserved">{allRightsReserved}</span> */}
      </div>
      <FloatClear />
    </footer>
  );
};

export default Footer;
