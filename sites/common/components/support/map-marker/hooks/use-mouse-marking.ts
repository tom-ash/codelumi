import { useEffect } from 'react';
import { addPin } from '../functions/add-pin';

interface UseMapMarkings {
  (props: {
    isMapInitialized: boolean;
    setData(params: object): void;
    setInputs(params: object): void;
    setErrors(params: object): void;
  }): void;
}

export const useMouseMarking: UseMapMarkings = (props) => {
  const { isMapInitialized, setData, setInputs, setErrors } = props;

  useEffect(() => {
    if (isMapInitialized) {
      const map = window.googleMap;

      google.maps.event.addListener(map, 'click', function (event) {
        const latlng = { lat: event.latLng.lat(), lng: event.latLng.lng() };

        addPin({
          geocodeBasis: { location: latlng },
          setInputs,
          setErrors,
          setData,
        });
      });

      // google.maps.event.addListener(
      //   map,
      //   'rightclick',
      //   function () {
      //     this.props.setInputs({ latitude: null, longitude: null })
      //     // sendGaEvent(MAP_PIN_REMOVED_EVENT)
      //   }.bind(this)
      // )

      return () => {
        google.maps.event.clearListeners(window.googleMap, 'click');
        google.maps.event.clearListeners(window.googleMap, 'rightclick');
      };
    }
  }, [isMapInitialized]);
};
