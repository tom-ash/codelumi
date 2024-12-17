import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { SVG } from '../../../svg/svg';
import { shareOnFacebook } from '../../../../../../sites/mapawynajmu-pl/tracks/listings/common/helpers/share-on-facebook';

const Share = (props: ShareProps) => {
  useStyles(styles);

  const { href } = props;

  return (
    <div className="share">
      <div className="facebook" onClick={() => shareOnFacebook(href, false)}>
        <SVG name="facebook" />
      </div>
    </div>
  );
};

export default Share;
