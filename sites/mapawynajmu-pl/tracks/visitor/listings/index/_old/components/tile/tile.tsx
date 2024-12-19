// import React from 'react';
// import { ListingTilePictures as Pictures } from '../../../../show/_old/tile/components/pictures/pictures';
// import { Heading } from '../../../../common/components/heading/heading';
// import { Area } from '../../../../common/components/area/area';
// import { Rent } from '../../../../common/components/rent/rent';

// interface Picture {
//   database: string;
// }

// interface ListingIndexTileInterface {
//   (props: {
//     href: string;
//     id: number;
//     category: number;
//     lang: string;
//     title: string;
//     name?: string;
//     locality: string;
//     sublocality?: string;
//     pictures: Picture[];
//     disableSlides: boolean;
//     area?: number;
//     rentAmount?: number;
//     rentCurrency?: number;
//     isPromoted?: boolean;
//     children?: React.ReactNode;
//     onClick?: (e: React.SyntheticEvent) => void;
//     onMouseOver?: () => void;
//     onMouseLeave?: () => void;
//     loadImage?: boolean;
//   }): React.ReactElement;
// }

// export const ListingIndexTile: ListingIndexTileInterface = (props) => {
//   const {
//     href,
//     id,
//     title,
//     pictures,
//     name,
//     category,
//     locality,
//     sublocality,
//     lang,
//     rentAmount,
//     rentCurrency,
//     area,
//     isPromoted,
//     children,
//     onClick,
//     onMouseOver,
//     onMouseLeave,
//     disableSlides,
//     loadImage,
//   } = props;

//   const classNames = ['listing-index-tile'];
//   if (isPromoted) {
//     classNames.push('promoted');
//   }

//   return (
//     <a
//       href={href}
//       className={classNames.join(' ')}
//       onClick={onClick}
//       onMouseOver={onMouseOver}
//       onMouseLeave={onMouseLeave}
//       data-id={id}
//       data-type="map-index-tile"
//     >
//       <Pictures
//         id={id}
//         title={title}
//         pictures={pictures}
//         disableSlides={disableSlides}
//         loadImage={loadImage}
//       />
//       <div className="primary">
//         <Heading
//           name={name}
//           category={category}
//           locality={locality}
//           sublocality={sublocality}
//           lang={lang}
//           tier={2}
//         />
//         {area && <Area area={area} />}
//         {rentAmount && rentCurrency !== undefined && (
//           <Rent rentAmount={rentAmount} rentCurrency={rentCurrency} />
//         )}
//       </div>
//       {children}
//     </a>
//   );
// };
