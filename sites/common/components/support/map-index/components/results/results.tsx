import { Map } from './components/map/map';
import { ItemShowInterface } from '../../types/item-show.interface';
import { ItemIndexInterface } from '../../types/item-index.interface';
import { Item } from '../../types/item.interface';
import { MapStyles } from '../../map-index';
import { SVGs } from '../../../../../types/asset';
import { SetApp, SetControl } from '../../../../../../../lib/types/setters';
import { GoogleMapOptions } from '../../../../../types/google';
import { Scripts } from '../../../../../../../lib/types/scripts';
import { Styles } from '../../../../../../mapawynajmu-pl/types/styles';
import { List } from './components/list/list';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { PinBuilder } from '../../../../../../mapawynajmu-pl/tracks/visitor/listings/index/view/helpers/pin-builder';

interface ResultsProps {
  isSSR: boolean;
  items: Item[];
  renderShow: boolean;
  ListItem: ItemIndexInterface;
  ShowItem: ItemShowInterface;
  pinBuilder: PinBuilder;
  lang: string;
  mapStyles: MapStyles;
  isMapInitialized: boolean;
  isPinsDrawn: boolean;
  currentListingId: number;
  svgs: SVGs;
  setControl: SetControl;
  mapOptions: GoogleMapOptions;
  setApp: SetApp;
  scripts: Scripts;
  styles: Styles;
  device: string;
  isMobile: boolean;
  router: AppRouterInstance;
}

export const Results = (props: ResultsProps) => {
  const {
    isSSR,
    renderShow,
    ListItem,
    ShowItem,
    items,
    pinBuilder,
    lang,
    mapStyles,
    isMapInitialized,
    isPinsDrawn,
    currentListingId,
    svgs,
    setControl,
    mapOptions,
    setApp,
    scripts,
    styles,
    device,
    isMobile,
    router,
  } = props;

  return (
    <section className={styles.results}>
      <main>
        {!(renderShow && isSSR) && (
          <List
            ListItem={ListItem}
            renderShow={renderShow}
            items={items}
            lang={lang}
            device={device}
            isMobile={isMobile}
            setControl={setControl}
            router={router}
            classNames={styles}
          />
        )}
        {renderShow && <ShowItem />}
      </main>
      <Map
        items={items}
        pinBuilder={pinBuilder}
        lang={lang}
        mapStyles={mapStyles}
        isMapInitialized={isMapInitialized}
        isPinsDrawn={isPinsDrawn}
        currentListingId={currentListingId}
        svgs={svgs}
        setControl={setControl}
        mapOptions={mapOptions}
        setApp={setApp}
        scripts={scripts}
        styles={styles}
      />
    </section>
  );
};
