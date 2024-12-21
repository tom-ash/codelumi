import { SetControl } from '../../../../../../../../lib/types/setters';
import styles from '../../header.module.css'

interface PCUserUsersShowButtonInterface {
  setControl: SetControl;
}

export const PCUserUsersShowButton = (
  props: PCUserUsersShowButtonInterface,
) => {
  const { setControl } = props

  return (
    <button
      onClick={() => {
        setControl({
          showPCUserUsersShowDropDown: true,
        })
      }}
      className={styles.userUsersShowButton}
    >
      (Moje konto)
    </button>
  );
};
