import React, { ReactNode } from 'react';

interface FigureInterface {
  (props: { children: ReactNode }): React.ReactElement;
}

export const Figure: FigureInterface = (props) => {
  const { children } = props;

  return <figure>{children}</figure>;
};
