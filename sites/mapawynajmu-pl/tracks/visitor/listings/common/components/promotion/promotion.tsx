import React, { useEffect } from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { Spinner } from '../../../../common/components/spinner/spinner';
import { useData } from '../../../../../src copy/sites/shared/app/functions/store/use-data';

interface ListingPromotionInterface {
  (): React.ReactElement;
}

const ListingPromotion: ListingPromotionInterface = () => {
  useStyles(styles);

  const { orderHref } = useData();

  useEffect(() => {
    // @ts-ignore
    window.gtag('event', 'promotion_added');

    location.href = orderHref;
  }, []);

  return (
    <div id="listing-promotion">
      <Spinner spinnerClass="windmill-medium-spinner" />
    </div>
  );
};

export default ListingPromotion;
