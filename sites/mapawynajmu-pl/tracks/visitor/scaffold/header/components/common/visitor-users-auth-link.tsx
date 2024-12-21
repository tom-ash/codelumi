import { LinkData } from '../../../../../../../../lib/types/link-data';
import { Link } from '../../../../../../../common/components/support/link/link';
import styles from '../../header.module.css';

interface VisitorUsersAuthLinkProps {
  data: LinkData;
}

export const VisitorUsersAuthLink = (props: VisitorUsersAuthLinkProps) => {
  const { data } = props;

  return <Link data={data} className={styles.link} />;
};
