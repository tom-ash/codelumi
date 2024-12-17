import React, { useMemo } from 'react';
import { useData } from '../../../../src copy/sites/shared/app/functions/store/use-data';
import { ExternalLink } from '../external-link/external-link';

interface AuthorInterface {
  (): React.ReactElement;
}

export const Author: AuthorInterface = () => {
  const {
    author: {
      firstName,
      lastName,
      url,
      // pictureUrl,
      // linkedInUrl,
      // xUrl,
    },
  } = useData();

  const name = useMemo(() => {
    const firstNameAndLastName = `${firstName} ${lastName}`;

    if (url) {
      return (
        <ExternalLink
          href={url}
          lang={'en'}
          label={firstNameAndLastName}
          title={firstNameAndLastName}
        />
      );
    }

    return firstNameAndLastName;
  }, [firstName, lastName, url]);

  return <div className="author">{name}</div>;
};

export default Author;
