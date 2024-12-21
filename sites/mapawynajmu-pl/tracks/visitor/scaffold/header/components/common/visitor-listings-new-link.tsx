import { LinkData } from '../../../../../../../../lib/types/link-data';
import { Link } from '../../../../../../../common/components/support/link/link';
import styles from '../../header.module.css';

interface VisitorListingsNewLinkProps {
  data: LinkData;
}

export const VisitorListingsNewLink = (props: VisitorListingsNewLinkProps) => {
  const { data } = props;

  return <Link data={data} className={styles.link} />;
};
