import React from 'react';
import { SVG } from '../../../../../../../../common/components/support/svg/svg';

interface ShowOnMap {
  (attrs: {
    e: React.SyntheticEvent;
    latitude: number;
    longitude: number;
    setControl(attrs: any): void; // TODO!
  }): void;
}

const showOnMap: ShowOnMap = (attrs) => {
  const { e, latitude, longitude, setControl } = attrs;

  e.preventDefault();
  e.stopPropagation();

  var fromTop = document.body.getBoundingClientRect().top;

  window.scrollBy({
    top: 454 + fromTop,
    behavior: 'smooth',
  });

  setControl({
    mapOptions: {
      center: {
        lat: latitude,
        lng: longitude,
      },
      zoom: 9.5,
    },
  });
};

interface ShowOnMapButtonInterface {
  (props: {
    latitude: number;
    longitude: number;
    setControl(attrs: any): void; // TODO!
  }): React.ReactElement;
}

export const ShowOnMapButton: ShowOnMapButtonInterface = (props) => {
  const { latitude, longitude, setControl } = props;

  return (
    <button
      className="show-on-map"
      onClick={(e: React.SyntheticEvent) =>
        showOnMap({
          e,
          latitude,
          longitude,
          setControl,
        })
      }
    >
      <SVG name="marker" />
    </button>
  );
};
