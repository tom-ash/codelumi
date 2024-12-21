import React from 'react';
import { ItemIndexInterface } from '../../../../types/item-index.interface';
import { Item } from '../../../../types/item.interface';
import { SetControl } from '../../../../../../../../../lib/types/setters';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Styles } from '../../../../../../../../mapawynajmu-pl/types/styles';

const deviceConfig = {
  largePc: 'scroll',
  mediumPc: 'scroll',
  smallPc: 'scroll',
  largeTablet: 'slider',
  smallTablet: 'slider',
  largePhone: 'slider',
  smallPhone: 'slider',
};

const sliderDeviceConfig = {
  largePc: { perPage: 3, gap: 40 },
  mediumPc: { perPage: 3, gap: 40, padding: 50 },
  smallPc: { perPage: 2, gap: 40 },
  largeTablet: { perPage: 2, gap: 40, padding: 60, pagination: false },
  smallTablet: { perPage: 1, gap: 40, padding: 60, pagination: false },
  // @ts-ignore
  largePhone: {
    perPage: 1,
    gap: 15,
    padding: {
      left: 15,
      right: 70,
      top: 0,
      bottom: 0,
    },
    pagination: false,
  },
  smallPhone: {
    perPage: 1,
    gap: 20,
    padding: {
      left: 20,
      right: 80,
      top: 0,
      bottom: 0,
    },
    pagination: false,
  },
};

interface ListProps {
  ListItem: ItemIndexInterface;
  renderShow: boolean;
  items: Item[];
  lang: string;
  device: string;
  isMobile: boolean;
  setControl: SetControl;
  currentPartnerName?: string;
  router: AppRouterInstance;
  classNames: Styles;
}

export const List = (props: ListProps) => {
  const {
    ListItem,
    renderShow,
    items,
    lang,
    isMobile,
    setControl,
    router,
    classNames,
  } = props;
  const listType = 'scroll'; // TODO

  return (
    <div className={classNames.list}>
      {/* {currentPartnerName && <h2>{currentPartnerName}</h2>} */}
      {listType === 'scroll' && (
        <>
          {items.map((item: Item) => {
            // TODO: Use ul.
            return (
              <ListItem
                key={item.id}
                lang={lang}
                isMobile={isMobile}
                setControl={setControl}
                router={router}
                className={classNames.tile}
                promotedClassName={classNames.tilePromoted}
                primaryClassName={classNames.tilePrimary}
                styles={classNames}
                disableSlides={true}
                onClick={(e: React.SyntheticEvent) => {
                  e.preventDefault();

                  router.push(item.href);
                }}
                {...item}
              />
            );
          })}
        </>
      )}
      {/* {listType === 'slider' && (
        <>
          <Slider
            slides={items}
            Slide={ListItem}
            // @ts-ignore
            deviceConfig={sliderDeviceConfig}
            lang={lang}
            isMobile={isMobile}
            setControl={setControl}
            router={router}
          />
        </>
      )} */}
    </div>
  );
};

//   const classNames = [listType];
//   if (renderShow) {
//     classNames.push('render-show');
//   }
