import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './constants/mappers';
import withStyles from 'isomorphic-style-loader-react18/withStyles';
import styles from './styles/styles.scss';
import { Category } from './components/category/category';
import { Area } from './components/area/area';
import { Price } from './components/price/price';
import { FloatClear } from '../../../../../../../../common/components/support/float-clear/float-clear';
import { LocationFilter } from './components/location-filter/location-filter';

class AnnouncementIndexPanel extends React.Component {
  render() {
    return (
      <>
        <div id="listings-index-nav">
          <Category />
          <LocationFilter />
          <Area />
          <Price />
          <FloatClear />
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(AnnouncementIndexPanel));
