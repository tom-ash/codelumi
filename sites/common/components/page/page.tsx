import React from 'react';
import loadable from '@loadable/component';
import { useRender } from '../../../src copy/sites/shared/app/functions/store/use-render';
const PageShow = loadable(() => import('./components/show/show'));
const PageEdit = loadable(() => import('./components/edit/edit'));
const PageIndex = loadable(() => import('./components/index/index'));
const PageNotFound = loadable(() => import('./components/not-found/not-found'));

const Page = () => {
  const render = useRender();
  const renderEdit = render['page/edit'];
  const renderShow = render['page/show'];
  const renderIndex = render['page/index'];
  const renderNotFound = render['page/not-found'];

  return (
    <>
      {renderShow && <PageShow />}
      {renderEdit && <PageEdit />}
      {renderIndex && <PageIndex />}
      {renderNotFound && <PageNotFound />}
    </>
  );
};

export default Page;
