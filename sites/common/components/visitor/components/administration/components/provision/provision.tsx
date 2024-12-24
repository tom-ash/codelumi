import { FloatClear } from '../../../../../support/float-clear/float-clear';

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
