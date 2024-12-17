import React from 'react';
import { Panel } from '../common/panel/panel';
import { Filter } from '../common/filter/filter';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';

// const Supplement = () => {
//   return (
//     <div className='sqm-column'>
//       m<sup>2</sup>
//     </div>
//   )
// }

export const Price = () => {
  useStyles(styles);

  return (
    <Filter
      name="price"
      panel={
        <Panel
          name="price"
          supplement={<></>} // TODO
        />
      }
    />
  );
};
