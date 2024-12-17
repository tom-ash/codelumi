import React, { useEffect, useState } from 'react';
import { DragAndDrop } from './components/drag-and-drop/drag-and-drop';
import { SVG } from '../svg/svg';

interface FileInputInterface {
  (props: {
    label?: string;
    limit: number;
    icon: string;
    instructions: string;
    onFilesSet(files: File[]): void;
    required?: boolean;
    error?: string;
  }): React.ReactElement;
}

export const FileInput: FileInputInterface = (props) => {
  const {
    label,
    limit,
    icon,
    instructions,
    onFilesSet,
    required = false,
    error,
  } = props;

  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    onFilesSet(files);
  }, [files]);

  const classNames = ['file-input'];
  if (error) {
    classNames.push('error');
  }

  return (
    <div className={classNames.join(' ')}>
      {label && (
        <label>
          {label} {required && <SVG name="dot" className="required" />}
        </label>
      )}
      <DragAndDrop
        files={files}
        limit={limit}
        icon={icon}
        instructions={instructions}
        setFiles={setFiles}
      />
      <ul>
        {files.map((file) => {
          return <li>{file.name}</li>;
        })}
      </ul>
      {error && <div className="error">{error}</div>}
    </div>
  );
};
