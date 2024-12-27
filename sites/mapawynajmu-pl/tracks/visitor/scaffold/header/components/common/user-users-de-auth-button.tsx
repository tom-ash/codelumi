import { LinkData } from '../../../../../../../../lib/types/link-data';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import styles from '../../header.module.css';

interface UserUsersDeAuthButtonInterface {
  rootLinkData: LinkData;
}

export const UserUsersDeAuthButton = (
  props: UserUsersDeAuthButtonInterface,
) => {
  const { rootLinkData } = props;

  const router = useRouter();

  return (
    <button
      onClick={async () => {
        Cookies.remove('access_token');

        if (window.location.pathname === '/') {
          // TODO: Set state.
          window.location.reload();
        } else {
          router.push(rootLinkData.href);
        }
      }}
      className={styles.userUsersDeAuthButton}
    >
      (Wyloguj)
    </button>
  );
};
