import React, { useMemo, useState } from 'react';
import { TextInput } from 'semanticize';
import { escapeRegExp } from 'lodash';
import { FloatClear } from '../../../float-clear/float-clear';
import { SVG } from '../../../svg/svg';
import Markdown from 'markdown-to-jsx';

export interface GlossaryProps {
  title: string;
  entries: {
    term: string;
    definition: string;
  }[];
}

export const Glossary = (props: GlossaryProps) => {
  const { title, entries } = props;

  const [search, setSearch] = useState('');

  const searchedEntries = useMemo(() => {
    return entries.filter((entry) => {
      const regexp = new RegExp(escapeRegExp(search?.toLowerCase()));

      return entry.term.toLowerCase().match(regexp);
    });
  }, [search, entries]);

  return (
    <div className="glossary">
      <h1>{title}</h1>
      <TextInput
        className="search"
        value={search}
        onChange={setSearch}
        placeholder="Search skills"
      >
        <SVG name="magnifyingGlass" />
      </TextInput>
      <div className="entries">
        {searchedEntries.map((entry) => {
          const { term, definition } = entry;

          return (
            <div className="entry">
              <dfn>
                <strong>{term}</strong>
              </dfn>
              <div className="explanation">
                <Markdown>{definition}</Markdown>
              </div>
              <FloatClear />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Glossary;
