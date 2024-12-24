import React from 'react';
import { Provision } from '../../provision/provision';
import { MainHeading } from '../../../../../../support/headings/main-heading';
import { Styles } from '../../../../../../../../mapawynajmu-pl/types/styles';

interface AdministrativeDocumentProps {
  lang: string;
  heading: string;
  provisions: any[]; // TODO!
  styles: Styles;
}

export const AdministrativeDocument = (
  props: AdministrativeDocumentProps,
) => {
  const { lang, heading, provisions, styles } = props;

  return (
    <div>
      <div className={styles.container}>
        <MainHeading
          value={heading}
          styles={{}} // TODO
        />
        {/* <Heading {...headingOneProps} /> */}
        {provisions.map((provision, index) => (
          <Provision key={index} {...{ ...provision, lang,  }} />
        ))}
      </div>
    </div>
  );
};
