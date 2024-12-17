import React from 'react';
import { Image } from '../../../../../../../common/components/support/image/image';
import { FloatClear } from '../../../../../../../common/components/support/float-clear/float-clear';
import { SVG } from '../../../../../../../common/components/support/svg/svg';

interface ImageInterface {
  (props: {
    heading: string;
    imageSrc: string;
    postingId: string;
    downloadLabel: string;
  }): React.ReactElement;
}

export const PostingImage: ImageInterface = (props) => {
  const { heading, imageSrc, postingId, downloadLabel } = props;

  return (
    <div className="image">
      <div className="heading-and-download">
        <h3>{heading}</h3>
        <a
          href={imageSrc}
          download="asdasd.png"
          target="_blank"
          onClick={async (e) => {
            e.preventDefault();

            const fetchedImage = await fetch(imageSrc, {
              method: 'GET',
              headers: {
                // https://stackoverflow.com/questions/76669136/axios-get-from-s3-no-access-control-allow-origin
                'Cache-Control': 'no-cache',
              },
            });

            const blob = await fetchedImage.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `${postingId}-image`;
            link.click();
          }}
        >
          <SVG name="download" />
          <span>{downloadLabel}</span>
        </a>
        <FloatClear />
      </div>
      <Image src={imageSrc} alt="TODO" />
    </div>
  );
};
