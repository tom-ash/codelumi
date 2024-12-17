import { MainHeading } from '../../../../../../../common/components/support/headings/main-heading';
import {
  UsersNewCredentialsVerificationAssets,
  UsersNewCredentialsVerificationLinks,
  UsersNewCredentialsVerificationTexts,
} from '../contract/contract';
import mainHeadingStyles from '../../../../../../../common/styles/main-heading.module.css';
import viewStyles from '../../../../../../../common/styles/view.module.css';
import containerStyles from '../../../../../../../common/styles/container.module.css';
import { SVG } from '../../../../../../../common/components/support/svg/svg';
import styles from './view.module.css';
import { Link } from '../../../../../../../common/components/support/link/link';

const UsersNewCredentialsConfirmationView = (props: {
  assets: UsersNewCredentialsVerificationAssets;
  texts: UsersNewCredentialsVerificationTexts;
  links: UsersNewCredentialsVerificationLinks;
}) => {
  const {
    assets: {
      svgs: { check },
    },
    texts: { h1: mainHeading, congratulations, accountCreated },
    links: { 'listings/new/form': listingsNewFormLinkData },
  } = props;
  // allRightsReserved: string;
  // h1: string;
  // partnerPage: string;
  // showMyAccountMenuButtonLabel: string;

  return (
    <div className={viewStyles.view}>
      <div className={`${containerStyles.container} ${styles.container}`}>
        <MainHeading value={mainHeading} styles={mainHeadingStyles} />
        {/* <Line /> */}
        <div className={styles.congratulations}>{congratulations}</div>
        <div>
          <div>
            <SVG data={check} className={styles.check} />
          </div>
          <div className={styles.accountCreated}>{accountCreated}</div>
        </div>
        {/* {accountType === 'business' && (
          <>
            <Line />
            <div>
              <div className='partner-page'>
                {partnerPage} <strong>{businessName}</strong>
              </div>
              <div className='partner-page-link'>
                <Link {...partnerPageLinkProps} />
              </div>
            </div>
          </>
        )} */}
        {/* <Line /> */}
        <div>
          <Link data={listingsNewFormLinkData} className={styles.link} />
        </div>
      </div>
    </div>
  );
};

export default UsersNewCredentialsConfirmationView;
