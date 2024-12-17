import React from 'react';
import AWS_S3_URL from '../../../../../../../../src copy/sites/mapawynajmu-pl/shared/constants/urls/aws-s3';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';

interface Picture {
  database: string;
}

interface ListingTilePicturesInterface {
  (props: {
    pictures: Picture[];
    disableSlides: boolean;
    title: string;
    id: number;
    loadImage?: boolean;
  }): React.ReactElement;
}

export const ListingTilePictures: ListingTilePicturesInterface = (props) => {
  useStyles(styles);

  const { id, title, pictures, disableSlides, loadImage } = props;

  const pictureUrls = pictures.map((picture) => ({
    database: `${AWS_S3_URL}/announcements/${id}/${picture.database}`,
  }));

  const loading = loadImage ? undefined : 'lazy';

  if (disableSlides) {
    return (
      <div className="picture">
        <img src={pictureUrls[0].database} alt={title} loading={loading} />
      </div>
    );
  }

  return (
    <div className="pictures">
      <Splide
        onArrowsMounted={(_, prev, next) => {
          prev.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
          });
          next.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
          });
        }}
        onPaginationMounted={(_, listObject) => {
          listObject.list.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
          });
        }}
      >
        {pictureUrls.map((pictureUrl) => {
          return (
            <SplideSlide key={pictureUrl.database}>
              <img src={pictureUrl.database} alt={title} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ListingTilePictures;
