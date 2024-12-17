import React from 'react';
import { ManagedLink } from 'managed-inputs';
import { changeUrl } from '../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';

interface IndexLinkProps {
  pathname: string;
  hrefLang: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  image?: string;
  collectionName: string;
}

const IndexLink = (props: IndexLinkProps) => {
  const {
    pathname,
    hrefLang,
    title,
    category,
    subcategory,
    image,
    collectionName,
  } = props;
  const classNames = {
    container: `index-link ${subcategory} ${collectionName}`,
  };
  const href = pathname; // TODO
  const label = (
    <>
      {image && <img src={image} alt={title} />}
      <div className="link-data">
        <div className="category-and-subcategory">
          <span className={category}>{category}</span>
          <span className={subcategory}>{subcategory}</span>
        </div>
        <div className="title">{title}</div>
      </div>
    </>
  );
  const onClick = () => changeUrl({ href });
  const linkProps = { classNames, href, hrefLang, title, label, onClick };

  return <ManagedLink {...linkProps} />;
};

export default IndexLink;
