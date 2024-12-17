import React from 'react';
import loadable from '@loadable/component';
import { useRender } from '../../../src copy/sites/shared/app/functions/store/use-render';
const Index = loadable(() => import('./components/index/index'));
const Edit = loadable(() => import('./components/edit/edit'));

const Image = () => {
  const { 'image/index': renderIndex, 'image/edit': renderEdit } = useRender();

  return (
    <section id="image">
      {renderIndex && <Index />}
      {renderEdit && <Edit />}
    </section>
  );
};

export default Image;
