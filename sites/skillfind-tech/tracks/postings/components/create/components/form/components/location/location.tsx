import React, { useMemo } from 'react';
import { MapMarker } from '../../../../../../../../../../common/components/support/map-marker/map-marker';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useErrors } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-errors';
import { InstructionsDeprecated } from '../../../../../../../../../../common/components/support/instructions_deprecated/instructions_deprecated';
import { useStore } from 'react-redux';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { pinBuilder } from './functions/pin-builder';
import { useData } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { mapStyles } from '../../../../../../styles/map-styles';
import { SectionHeading } from '../../../../../../../../../../common/components/support/headings/section-heading';

export const Location = () => {
  useStyles(styles);

  const { required, locationInstructions } = useTexts();
  const { isLocationError: isError } = useErrors();

  const classNames = ['location'];
  if (isError) {
    classNames.push('error');
  }

  const { industries } = useData();
  const { longitude, latitude, industry } = useInputs();

  const industryIcon = useMemo(() => {
    const selectedIndustry = industries.find(
      (ind: { value: string; icon: string }) => {
        return ind.value === industry;
      },
    );

    return selectedIndustry?.icon;
  }, [industry]);

  const {
    // @ts-ignore
    assets: { svgs },
  } = useStore().getState();

  const item = useMemo(() => {
    return {
      longitude,
      latitude,
      industryIcon,
      svgs,
    };
  }, [longitude, latitude, industryIcon]);

  return (
    <section id="location" className={classNames.join(' ')}>
      <SectionHeading
        name="location"
        suffix={<span className="suffix required">{required}</span>}
      />
      <InstructionsDeprecated text={locationInstructions} isError={isError} />
      <MapMarker
        item={item}
        pinBuilder={pinBuilder}
        lang="en"
        // @ts-ignore
        mapStyles={mapStyles}
      />
    </section>
  );
};
