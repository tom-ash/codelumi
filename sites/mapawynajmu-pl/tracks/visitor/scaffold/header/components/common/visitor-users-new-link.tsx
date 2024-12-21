import { LinkData } from '../../../../../../../../lib/types/link-data';
import { Link } from '../../../../../../../common/components/support/link/link';
import styles from '../../header.module.css';

interface VisitorUsersNewLinkProps {
  data: LinkData;
}

export const VisitorUsersNewLink = (props: VisitorUsersNewLinkProps) => {
  const { data } = props;

  return <Link data={data} className={styles.link} />;
};
