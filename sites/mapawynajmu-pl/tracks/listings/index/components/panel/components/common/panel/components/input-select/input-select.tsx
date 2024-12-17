import React from 'react';
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { Input } from './input/input';
import { Select } from './select/select';

interface InputSelectInterface {
  (props: { name: string; options: string[] }): React.ReactElement;
}

export const InputSelect: InputSelectInterface = (props) => {
  useStyles(styles);

  const { name, options } = props;

  return (
    <div>
      <div className="column min">
        <Input name={name} kind="Min" />
        <Select name={name} kind="Min" options={options} />
      </div>
      <div className="column max">
        <Input name={name} kind="Max" />
        <Select name={name} kind="Max" options={options} />
      </div>
    </div>
  );
};
