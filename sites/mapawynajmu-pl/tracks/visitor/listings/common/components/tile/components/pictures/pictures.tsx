import { Styles } from "../../../../../../../../types/styles";

interface Picture {
  database: string;
}

interface PicturesProps {
  pictures: Picture[];
  disableSlides: boolean;
  title: string;
  id: number;
  loadImage?: boolean;
  styles: Styles;
}

export const Pictures = (props: PicturesProps) => {
  const { id, title, pictures, disableSlides, loadImage, styles } = props;

  const pictureUrls = pictures.map((picture) => ({
    database: `${process.env.NEXT_PUBLIC_MAPAWYNAJMU_PL_AWS_S3_URL!}/announcements/${id}/${picture.database}`,
  }));

  const loading = loadImage ? undefined : 'lazy';

  if (disableSlides) {
    return (
      <div className={styles.tilePicture}>
        <img src={pictureUrls[0].database} alt={title} loading={loading} />
      </div>
    );
  }

  return null

  // return (
  //   <div className="pictures">
  //     <Splide
  //       onArrowsMounted={(_, prev, next) => {
  //         prev.addEventListener('click', (e) => {
  //           e.stopPropagation();
  //           e.preventDefault();
  //         });
  //         next.addEventListener('click', (e) => {
  //           e.stopPropagation();
  //           e.preventDefault();
  //         });
  //       }}
  //       onPaginationMounted={(_, listObject) => {
  //         listObject.list.addEventListener('click', (e) => {
  //           e.stopPropagation();
  //           e.preventDefault();
  //         });
  //       }}
  //     >
  //       {pictureUrls.map((pictureUrl) => {
  //         return (
  //           <SplideSlide key={pictureUrl.database}>
  //             <img src={pictureUrl.database} alt={title} />
  //           </SplideSlide>
  //         );
  //       })}
  //     </Splide>
  //   </div>
  // );
};
