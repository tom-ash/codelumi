import { AdministrationContactContract } from '../contract/contract';
import styles from './view.module.css';

const AdministrationCookiesPolicy = (props: AdministrationContactContract) => {
  const {
    texts: {
      headingOne: heading,
      companyName,
      companyStreetAndStreetNumber,
      companyPostalCodeAndCity,
      companyEmail,
    },
  } = props;

  return (
    <div className={styles.view}>
      <div className={styles.container}>
        <div className={styles.company}>
          <strong>{companyName}</strong>
        </div>
        <div className={styles.address}>
          <div className={styles.street}>{companyStreetAndStreetNumber}</div>
          <div className={styles.companyPostalCodeAndCity}>
            {companyPostalCodeAndCity}
          </div>
        </div>
        <div className={styles.email}>Email: {companyEmail}</div>
      </div>
    </div>
  );
};

export default AdministrationCookiesPolicy;
