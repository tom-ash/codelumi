import React, { useEffect } from 'react';
import { useFonts } from './helpers/use-fonts';
import { useScreenSizeHandler } from './helpers/use-screen-size-handler';
import { useStateToRouteMatcher } from './helpers/use-state-to-route-matcher';
import loadable from '@loadable/component';
const Header = loadable(
  () => import('../../../../tracks/mapawynajmu-pl/scaffold/header/header'),
);
const Visitor = loadable(
  () => import('../../../../tracks/mapawynajmu-pl/visitors/visitor'),
);
const User = loadable(
  () => import('../../../../tracks/mapawynajmu-pl/users/user'),
);
const Listing = loadable(
  () =>
    import('../../../../tracks/mapawynajmu-pl/listings/_depracated/listing'),
);
const Page = loadable(() => import('../../../../common/components/page/page'));
const Image = loadable(
  () => import('../../../../common/components/image/image'),
);
const AssetsIndex = loadable(
  () => import('../../../../tracks/skillfind-tech/index/index'),
);
const Footer = loadable(
  () => import('../../../../tracks/mapawynajmu-pl/scaffold/footer/footer'),
);
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { setIsMobile } from './helpers/set-is-mobile';
import apiUrl from '../../../../_sites/mapawynajmu-pl/shared/constants/urls/api';
import { setConsents } from '../../../../_sites/shared/app/functions/consents/set-consents';
import { useApp } from '../../../../_sites/shared/app/functions/store/use-app';
import { useRender } from '../../../../_sites/shared/app/functions/store/use-render';
import { useDispatch } from 'react-redux';

const RedirectsIndex = loadable(
  () => import('../../../../common/components/redirect/components/index/index'),
);

const App = () => {
  useStyles(styles);

  const { lang } = useApp();
  const render = useRender();
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    window.apiUrl = apiUrl;
    // @ts-ignore
    window.lang = lang;
  }, [lang]);

  const {
    page: renderPage,
    image: renderImage,
    visitor: renderVisitor,
    announcement: renderListing,
    user: renderUser,
    redirectsIndex,
    assetsIndex,
  } = render;

  useFonts();
  useScreenSizeHandler();
  useStateToRouteMatcher();

  useEffect(() => setIsMobile(dispatch), []); // TODO: Consider moving to server.
  useEffect(() => setConsents(dispatch), []);

  return (
    <>
      <Header />
      <div id="content">
        {renderVisitor && <Visitor />}
        {renderListing && <Listing />}
        {renderUser && <User />}
        {renderPage && <Page />}
        {renderImage && <Image />}
        {assetsIndex && <AssetsIndex />}
        {redirectsIndex && <RedirectsIndex />}
      </div>
      <Footer />
    </>
  );
};

export default App;
