import { AdministrativeDocument } from '../../../../../../common/components/visitor/components/administration/components/administrative-document/cookies-policy/administrative-document';
import { AdministrationCookiesPolicyContract } from '../contract/contract';
import { provisions } from './constants/provisions'
import styles from './view.module.css'

const AdministrationCookiesPolicy = (props: AdministrationCookiesPolicyContract) => {
  const {
    app: { lang },
    texts: {
      headingOne: heading,
    },
  } = props;

  return (
    <div className={styles.view}>
      <AdministrativeDocument
        lang={lang}
        heading={heading}
        provisions={provisions}
        styles={styles}
      />
    </div>
  );
};

export default AdministrationCookiesPolicy;
