import React from 'react';
import Paragraph from '../paragraph/paragraph';
import { RenderNode } from '../../render-node';

const List = (props: ListProps) => {
  const { listNodes, style } = props;

  return (
    <ul style={style}>
      {listNodes.map((node, index) => {
        const nodeProps = {
          node,
        };

        return (
          <li key={`${index}-${node}`}>
            <RenderNode {...nodeProps} />

            {/* <Paragraph content={node} /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
