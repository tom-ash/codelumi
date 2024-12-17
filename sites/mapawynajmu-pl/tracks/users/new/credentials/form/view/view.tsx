import UsersNewCredentialsForm from './components/form/form';
import {
  SetControl,
  SetErrors,
  SetInputs,
} from '../../../../../../../../lib/types/setters';
import styles from '../../../../../../../common/styles/view.module.css';

const UsersNewCredentialsFormView = (props: {
  [key: string]: any;
  setControl: SetControl;
  setInputs: SetInputs;
  setErrors: SetErrors;
}) => {
  const {
    app,
    control,
    texts,
    inputs,
    errors,
    links,
    setControl,
    setInputs,
    setErrors,
  } = props;

  return (
    <div className={styles.view}>
      <UsersNewCredentialsForm
        app={app}
        control={control}
        texts={texts}
        inputs={inputs}
        errors={errors}
        links={links}
        setControl={setControl}
        setInputs={setInputs}
        setErrors={setErrors}
      />
    </div>
  );
};

export default UsersNewCredentialsFormView;
