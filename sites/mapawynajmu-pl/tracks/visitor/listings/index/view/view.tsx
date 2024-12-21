import { useRouter } from 'next/navigation';
import { MapIndex } from '../../../../../../common/components/support/map-index/map-index';
import { VisitorListingsIndexContract } from '../contract/contract';
import { pinBuilder } from './helpers/pin-builder';
import styles from './view.module.css';
import { ListingsCommonTile } from '../../common/components/tile/tile';
import ListingsShowTile from '../../show/view/components/tile/tile';

const VisitorListingsIndexView = (props: VisitorListingsIndexContract) => {
  const {
    app: { lang, isMapInitialized, isPinsDrawn, scripts, isMobile, device },
    assets: { svgs },
    data: { currentListingId, announcements, tile },
    control: { mapOptions },
    setApp,
    setControl,
    links: { root: rootLinkData },
  } = props;

  const router = useRouter();
  const AnnouncementIndexPanel = <></>; //<div>asdas PANEL</div>; // TODO
  const isSSR = false; // TODO

  return (
    <div className={styles.view}>
      <MapIndex
        isSSR={isSSR}
        renderShow={!!tile}
        Panel={AnnouncementIndexPanel}
        ListItem={ListingsCommonTile}
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
      >
        {tile && (
          <ListingsShowTile
            category={tile.category}
            lang={lang}
            locality={tile.locality}
            sublocality={tile.sublocality}
            styles={styles}
            id={tile.id}
            title={tile.title}
            pictures={tile.pictures}
            area={tile.area}
            grossRentAmount={tile.grossRentAmount}
            rentCurrency={tile.rentCurrency}
            router={router}
            rootLinkData={rootLinkData}
          />
        )}
      </MapIndex>
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

// const abc = typeof VisitorListingsIndexView
