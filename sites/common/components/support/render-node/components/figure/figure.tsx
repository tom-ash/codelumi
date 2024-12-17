import React from 'react';
import { FigureProps } from './figure.types';

const Figure = (props: FigureProps) => {
  const { content, caption } = props;

  return (
    <figure>
      {caption && <figcaption>{caption}</figcaption>}
      <span>{content}</span>
    </figure>
  );
};

export default Figure;
