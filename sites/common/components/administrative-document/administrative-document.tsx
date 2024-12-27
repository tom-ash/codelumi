import { MainHeading } from '../support/headings/main-heading';
import { Styles } from '../../../mapawynajmu-pl/types/styles';
import { FloatClear } from '../support/float-clear/float-clear';

interface ProvisionInterface {
  lang: string;
  tier: string;
  item: string;
  pl: JSX.Element;
  en: JSX.Element;
}

export const Provision = (props: ProvisionInterface) => {
  // @ts-ignore // TODO: Typing.
  const { tier, item, lang, [lang]: text } = props;

  return (
    <div className={`provision ${tier}`}>
      <div className="indent" />
      <div className="mark">{item}</div>
      <div className="text">{text}</div>
      <FloatClear />
    </div>
  );
};


interface AdministrativeDocumentProps {
  lang: string;
  heading: string;
  provisions: any[]; // TODO!
  styles: Styles;
}

export const AdministrativeDocument = (props: AdministrativeDocumentProps) => {
  const { lang, heading, provisions, styles } = props;

  return (
    <div>
      <div className={styles.container}>
        <MainHeading
          value={heading}
          styles={{}} // TODO
        />
        {provisions.map((provision, index) => (
          <Provision key={index} {...{ ...provision, lang }} />
        ))}
      </div>
    </div>
  );
};
