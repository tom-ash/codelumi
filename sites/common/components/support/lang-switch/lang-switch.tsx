import { useState } from 'react';
import { LinkData } from '../../../../../lib/types/link-data';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';
import { Link } from '../link/link';

interface LangSwitchProps {
  lang: string;
  alternateLangLinks: LinkData[];
  styles: Styles;
}

export const LangSwitch = (props: LangSwitchProps) => {
  const { lang, alternateLangLinks, styles } = props;

  if (!alternateLangLinks.length) {
    return null;
  }

  const [showSelection, setShowSelection] = useState(false);

  return (
    <div className={styles.langSwitch}>
      <div
        className={styles.langSwtichCurrent}
        onClick={() => setShowSelection(true)}
      >
        {lang}
        {/* <SVG name="chevron" /> */}
      </div>
      {showSelection && (
        <>
          <div
            className={styles.cover}
            onClick={() => setShowSelection(false)}
          />
          <ul>
            {alternateLangLinks.map((linkData) => (
              <li key={linkData.href}>
                <Link data={linkData} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
