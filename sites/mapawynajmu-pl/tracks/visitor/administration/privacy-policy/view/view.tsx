import { AdministrativeDocument } from '../../../../../../common/components/administrative-document/administrative-document';
import { AdministrationPrivacyPolicyContract } from '../contract/contract';
import { provisions } from './constants/provisions';
import styles from './view.module.css';

const AdministrationPrivacyPolicy = (
  props: AdministrationPrivacyPolicyContract,
) => {
  const {
    app: { lang },
    texts: { headingOne: heading },
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

export default AdministrationPrivacyPolicy;
