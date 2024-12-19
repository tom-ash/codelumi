import { ListingsShowContract } from '../contract/contract';
import styles from './view.module.css';

const ListingsShow = (props: ListingsShowContract) => {
  const {
    app: { lang },
    // assets: {
    //   svgs: {
    //     facebook: facebookSvg,
    //   },
    // },
    // data: {
    //   announcement: { href, image, title },
    // },
    // texts: { congratulations, socialImageExplanation },
  } = props;

  console.log('props', props);

  return <div className={styles.view}>SHOW</div>;
};

export default ListingsShow;
