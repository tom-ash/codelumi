import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { CellOpener } from './components/cell-opener/cell-opener';
import { useTexts } from '../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useControl } from '../../../../../../../../src copy/sites/shared/app/functions/store/use-control';

interface UserEditCellInterface {
  (props: {
    attrName: string;
    children: React.ReactElement | React.ReactElement[];
  }): React.ReactElement;
}

const toKebabCase = (text: string) =>
  text.replace(/[A-Z]/g, (capitalLetter) => '-' + capitalLetter.toLowerCase());

export const UserEditCell: UserEditCellInterface = (props) => {
  useStyles(styles);

  const { attrName, children } = props;
  const { [`${attrName}CellTitle`]: title } = useTexts();
  const { [`${attrName}CellValue`]: value } = useData();

  const cellOpenerProps = { attrName };
  const cellOpenedKey = `${attrName}CellOpened`;
  const { [cellOpenedKey]: cellOpened } = useControl();
  const cellContentClass = cellOpened ? 'opened' : 'closed';

  return (
    <div className={`cell ${toKebabCase(attrName)}`}>
      <div className="current" id="current">
        <div className="text">
          <div>
            <div className="title">{title}</div>
            <div className="value">{value}</div>
          </div>
        </div>
        <div className="float-clear" />
      </div>
      <div className="trigger">
        <CellOpener {...cellOpenerProps} />
      </div>
      <div className={`content ${cellContentClass}`}>
        {cellOpened && <>{children}</>}
      </div>
    </div>
  );
};
