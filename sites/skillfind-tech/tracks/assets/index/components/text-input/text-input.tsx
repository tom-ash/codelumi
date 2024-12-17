import React from 'react';
import { ManagedText } from 'managed-inputs';
import { useData } from '../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useDispatch } from 'react-redux';

interface TextInputInterface {
  (props: {
    id: number;
    fieldName: string;
    value: string;
    index: number;
  }): JSX.Element;
}

export const TextInput: TextInputInterface = (props) => {
  const { id, fieldName, value, index } = props;
  const { assets } = useData();
  const dispatch = useDispatch();
  const classNames = { container: 'text-input' };
  const setData = (value: any) => dispatch({ type: 'data', value });
  const onChange = (value: string) => {
    const newAssets = [...assets];
    const asset = assets.find((asset: any) => asset.id === id);
    const newAsset = { ...asset, [fieldName]: value };

    newAssets[index] = newAsset;
    setData({ assets: newAssets });
  };

  const areaProps = {
    classNames,
    value,
    onChange,
  };

  return <ManagedText {...areaProps} />;
};
