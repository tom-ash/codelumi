import { useRouter } from 'next/navigation';
import { MapIndex } from '../../../../../../common/components/support/map-index/map-index';
import { VisitorListingsIndexContract } from '../contract/contract';
import { pinBuilder } from './helpers/pin-builder';
import styles from './view.module.css';
import { ListingsCommonTile } from '../../common/components/tile/tile';

const VisitorListingsIndexView = (props: VisitorListingsIndexContract) => {
  const {
    app: { lang, isMapInitialized, isPinsDrawn, scripts, isMobile, device },
    assets: { svgs },
    data: { currentListingId, announcements },
    control: {mapOptions },
    setApp,
    setControl,
  } = props;

  console.log('props', props);

  const renderShow = false; // TODO
  const AnnouncementIndexPanel = () => <div>PANEL</div>; // TODO
  const ListingsShow = () => <div>TODO</div>; // TODO
  const isSSR = false; // TODO
  const router = useRouter();
  
  return (
    <div className={styles.view}>
      <MapIndex
        isSSR={isSSR}
        renderShow={renderShow}
        Panel={AnnouncementIndexPanel}
        ListItem={ListingsCommonTile}
        ShowItem={ListingsShow}
        items={announcements}
        pinBuilder={pinBuilder}
        mapStyles={[]} // TODO
        isMapInitialized={isMapInitialized}
        isPinsDrawn={isPinsDrawn}
        currentListingId={currentListingId}
        svgs={svgs}
        setControl={setControl}
        mapOptions={mapOptions}
        lang={lang}
        setApp={setApp}
        scripts={scripts}
        styles={styles} // TODO
        router={router}
        isMobile={isMobile}
        device={device}
      />
    </div>
  );
};

export default VisitorListingsIndexView;

// {/* <section id="visitor-articles-index">
//   <div className="slider">
//     <Splide
//       options={{
//         perPage,
//       }}
//     >
//       {articles.map((article) => {
//         const label = (
//           <>
//             <img src={article.image} alt={article.title} />
//             <h3 className="title">{article.title}</h3>
//           </>
//         );

//         return (
//           <SplideSlide key={article.title}>
//             <DeprecatedLink
//               href={article.href}
//               hrefLang={article.hrefLang}
//               title={article.title}
//               label={label}
//             />
//           </SplideSlide>
//         );
//       })}
//     </Splide>
//   </div>
// </section> */}

// if (renderMy) {
//   return <AnnouncementIndexMy />;
// }