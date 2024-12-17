import React from 'react';
import { Panel } from './components/panel/panel';
import { Filter } from '../common/filter/filter';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';

export const Category = () => {
  useStyles(styles);

  return <Filter name="category" panel={<Panel />} />;
};
