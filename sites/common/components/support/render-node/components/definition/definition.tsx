import React from 'react';
import { enrichText } from '../../helpers/enrich-text/enrich-text';

interface DefinitionProps {
  term: string;
  body: string;
}

const Definition = (props: DefinitionProps) => {
  const { term, body } = props;

  if (!term || !body) return null;

  // TODO: Use Array appraoch!
  const __html = `<dfn>${term}</dfn> ${enrichText(body)}`;

  return (
    <figure className="definition">
      <figcaption>
        <strong>{term}</strong>
      </figcaption>
      <p dangerouslySetInnerHTML={{ __html }} />
    </figure>
  );
};

export default Definition;
