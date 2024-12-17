import React from 'react';
import { RenderNode } from '../../../../../support/render-node/render-node';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const Output = () => {
  const { body } = useData();
  const { width, height } = useInputs();

  const nodeProps = {
    node: {
      Root: body,
    },
  };

  return (
    <div
      id="image-output"
      className="output"
      style={{
        width: +width,
        height: +height,
        outline: '1px solid #E5E7E9',
      }}
    >
      <RenderNode {...nodeProps} />
    </div>
  );
};
