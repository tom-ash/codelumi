import React from 'react';
import { ListingIndexTile } from '../tile/tile';
import { ShowOnMapButton } from '../tile/show-on-map/show-on-map.button';
import { ChangeUrl } from '../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';

interface Picture {
  database: string;
}

export interface ListingBase {
  id: number;
  category: number;
  href: string;
  title: string;
  name: string;
  pictures: Picture[];
  latitude: number;
  longitude: number;
  locality: string;
  sublocality?: string;
  area?: number;
  netRentAmount?: number;
  grossRentAmount?: number;
  rentCurrency?: number;
  isPromoted: boolean;
  loadImage?: boolean;
}

interface CommonProps {
  lang: Lang;
  isMobile: boolean;
  changeUrl: ChangeUrl;
  setControl(attrs: any): void;
}

interface ListingsIndexTile {
  (props: ListingBase & CommonProps): React.ReactElement;
}

export const ListingsIndexTile: ListingsIndexTile = (props) => {
  const {
    id,
    category,
    href,
    title,
    name,
    pictures,
    latitude,
    longitude,
    locality,
    sublocality,
    area,
    netRentAmount,
    grossRentAmount,
    rentCurrency,
    isPromoted,
    changeUrl,
    lang,
    isMobile,
    setControl,
    loadImage,
  } = props;

  const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1;
  const rentAmount = isCommercial ? netRentAmount : grossRentAmount;

  const onClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    changeUrl({ href, retainQueryParams: true, withScroll: false });
  };

  return (
    <ListingIndexTile
      key={href}
      id={id}
      category={category}
      href={href}
      title={title}
      name={name}
      pictures={pictures}
      locality={locality}
      sublocality={sublocality}
      area={area}
      rentAmount={rentAmount}
      rentCurrency={rentCurrency}
      isPromoted={isPromoted}
      disableSlides={true}
      lang={lang}
      onClick={onClick}
      loadImage={loadImage}
    >
      {isMobile && (
        <ShowOnMapButton
          latitude={latitude}
          longitude={longitude}
          setControl={setControl}
        />
      )}
    </ListingIndexTile>
  );
};
