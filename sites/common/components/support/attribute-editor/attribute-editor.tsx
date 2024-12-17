import React, { useMemo } from 'react';
import { TextInput } from '../text-input/text-input';
import { useInputs } from '../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useDispatch } from 'react-redux';
import { FloatClear } from '../float-clear/float-clear';
import { patch } from '../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';
import { useTexts } from '../../../../src copy/sites/shared/app/functions/store/use-texts';
import { Select } from '../select/select';

interface AttributeEditorInterface {
  (props: {
    name: string;
    isSelectable?: boolean;
    children?: React.ReactElement;
  }): React.ReactElement;
}

export const AttributeEditor: AttributeEditorInterface = (props) => {
  const { name, isSelectable, children } = props;
  const { edit, save, cancel } = useTexts();
  const { [`${name}IsEdited`]: isEdited } = useInputs();
  const dispatch = useDispatch();
  const setInputs = (value: any) => dispatch({ type: 'inputs', value });
  const { [name]: value, [`${name}Current`]: currentValue } = useInputs();

  const attributeElement = useMemo(() => {
    if (children) {
      return React.cloneElement(children, { isEdited: !!isEdited });
    }

    if (isSelectable) {
      return (
        <Select selectKey={name} className="select" disabled={!isEdited} />
      );
    }

    return <TextInput inputKey={name} disabled={!isEdited} />;
  }, [children, isEdited]);

  return (
    <div className="attribute-editor">
      {attributeElement}
      <div className="buttons">
        {isEdited && (
          <>
            <button
              className="cancel"
              onClick={() => {
                setInputs({ [`${name}IsEdited`]: false, [name]: currentValue });
              }}
            >
              {cancel}
            </button>
            <button
              className="save"
              onClick={async () => {
                await patch({
                  path: `user/update/${name}`,
                  body: { value },
                });

                setInputs({
                  [`${name}IsEdited`]: false,
                  [`${name}Current`]: value,
                });
              }}
            >
              {save}
            </button>
          </>
        )}
        {!isEdited && (
          <button
            className="edit"
            onClick={() =>
              setInputs({
                [`${name}IsEdited`]: true,
                [`${name}Current`]: value,
              })
            }
          >
            {edit}
          </button>
        )}
        <FloatClear />
      </div>
    </div>
  );
};
