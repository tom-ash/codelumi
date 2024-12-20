import React, { ReactNode } from 'react';
import { Results } from './components/results/results';
import { ItemIndexInterface } from './types/item-index.interface';
import { Item } from './types/item.interface';
import { SVGs } from '../../../types/asset';
import { SetApp, SetControl } from '../../../../../lib/types/setters';
import { GoogleMapOptions } from '../../../types/google';
import { Scripts } from '../../../../../lib/types/scripts';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { PinBuilder } from '../../../../mapawynajmu-pl/tracks/visitor/listings/index/view/helpers/pin-builder';

export type MapStyles = google.maps.MapTypeStyle[];

interface MapIndexProps {
  isSSR: boolean;
  renderShow?: boolean;
  Panel: JSX.Element;
  ListItem: ItemIndexInterface;
  pinBuilder: PinBuilder;
  items: Item[];
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
  children?: ReactNode
}

export const MapIndex = (props: MapIndexProps) => {
  const {
    isSSR,
    items,
    renderShow = false,
    Panel,
    ListItem,
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
    children,
  } = props;

  return (
    <section id="map-index">
      {Panel}
      <Results
        isSSR={isSSR}
        ListItem={ListItem}
        renderShow={renderShow}
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
        device={device}
        isMobile={isMobile}
        router={router}
      >
        {children}
      </Results>
    </section>
  );
};
