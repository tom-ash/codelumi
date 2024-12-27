import { AdministrativeDocument } from '../../../../../../common/components/administrative-document/administrative-document';
import { AdministrationTermsOfServiceContract } from '../contract/contract';
import { provisions } from './constants/provisions-2.x';
import styles from './view.module.css';

const AdministrationTermsOfService = (
  props: AdministrationTermsOfServiceContract,
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

export default AdministrationTermsOfService;
