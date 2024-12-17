import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useRender } from '../../../src copy/sites/shared/app/functions/store/use-render';
import loadable from '@loadable/component';
const PostingCreate = loadable(() => import('./components/create/create'));
const PostingsIndex = loadable(() => import('./components/index/index'));

// TODO: Loadable.
import PostingsShow from './components/show/show';

const Postings = () => {
  useStyles(styles);

  const {
    'postings/new': renderNew,
    'postings/index': renderIndex,
    'postings/show': renderShow,
  } = useRender();

  return (
    <div id="postings">
      {(renderIndex || renderShow) && (
        <PostingsIndex ShowItem={PostingsShow} renderShow={renderShow} />
      )}
      {renderNew && <PostingCreate />}
    </div>
  );
};

export default Postings;
