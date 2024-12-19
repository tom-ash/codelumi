import React from 'react';
import { categories } from '../../../../../../../../common/constants/categories';
import { SVG } from '../../../../../../../../../../../../common/components/support/svg/svg';
import { FloatClear } from '../../../../../../../../../../../../common/components/support/float-clear/float-clear';
import { changeUrl } from '../../../../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import { useTexts } from '../../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useControl } from '../../../../../../../../../../src copy/sites/shared/app/functions/store/use-control';
import { useLinks } from '../../../../../../../../../../src copy/sites/shared/app/functions/store/use-links';
import { useDispatch } from 'react-redux';

export const Panel = () => {
  const texts = useTexts();
  const links = useLinks();
  const { categoryFilterPanel } = useControl();
  const dispatch = useDispatch();
  const setControl = (value: any) => dispatch({ type: 'control', value });

  return (
    <>
      {categoryFilterPanel && (
        <div
          className="category-tiles-container"
          onClick={(e) => {
            setControl({ categoryFilterPanel: false });
          }}
        />
      )}
      {
        <div
          className={`tiles ${categoryFilterPanel ? 'opened' : 'closed'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {categories.map((category: any) => {
            const categoryName = category.name;
            const label = texts[`${categoryName}CategoryLabel`];
            const href = links[category.linkTrack].href;

            return (
              <div
                className="tile"
                key={label}
                onClick={() => changeUrl({ href })}
              >
                <div className="icon">
                  <SVG name={category.pin.svg} />
                </div>
                <div className="label">{label}</div>
                <FloatClear />
              </div>
            );
          })}
        </div>
      }
    </>
  );
};
