import React from 'react';
import { updatePage as submit } from '../../functions/update-page';
import { SubmitButton } from '../../../../../support/submit-button/submit-button';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

interface UpdatePageButtonInterface {
  (props: { exitOnSave?: boolean }): React.ReactElement;
}

export const UpdatePageButton: UpdatePageButtonInterface = (props) => {
  const { exitOnSave } = props;
  const { updatePageAndExitButtonLabel, updatePageButtonLabel } = useTexts();
  const { updatePageApiUrl } = useData();
  const {
    id,
    url,
    canonicalUrl,
    online,
    body,
    publishedOn,
    modifiedOn,
    title,
    pageLang,
    langAltsGroup,
    description,
    keywords,
    coverImage,
    schemaMode,
    autoSchema,
    manualSchema,
    parentId,
    priority,
  } = useInputs();

  const submitButtonProps = {
    label: exitOnSave ? updatePageAndExitButtonLabel : updatePageButtonLabel,
    customContainerClassNames: exitOnSave ? 'save-and-exit' : 'save',
    updatePageApiUrl,
    exitOnSave,
    id,
    url,
    canonicalUrl,
    online,
    body,
    publishedOn,
    modifiedOn,
    // category,
    // subcategory,
    title,
    pageLang,
    langAltsGroup,
    description,
    keywords,
    coverImage,
    schemaMode,
    autoSchema,
    manualSchema,
    parentId,
    priority,
    submit,
  };

  return <SubmitButton {...submitButtonProps} />;
};
