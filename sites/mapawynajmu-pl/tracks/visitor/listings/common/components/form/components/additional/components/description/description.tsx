import { SetInputs } from '../../../../../../../../../../../lib/types/setters';
import { AddEnglishDescription } from './components/add-english-description';
import { AddPolishDescription } from './components/add-polish-description';
import { EnglishDescription } from './components/english-description';
import { PolishDescription } from './components/polish-description';

interface DescriptionProps {
  addPolishDescriptionLabel: string;
  addPolishDescriptionChecked: boolean;
  addEnglishDescriptionLabel: string;
  addEnglishDescriptionChecked: boolean;
  polishDescriptionLabel: string;
  polishDescription: string;
  englishDescriptionLabel: string;
  englishDescription: string;
  setInputs: SetInputs;
}

export const Description = (props: DescriptionProps) => {
  const {
    addPolishDescriptionLabel,
    addPolishDescriptionChecked,
    addEnglishDescriptionLabel,
    addEnglishDescriptionChecked,
    polishDescriptionLabel,
    polishDescription,
    englishDescriptionLabel,
    englishDescription,
    setInputs,
  } = props;

  return (
    <div id="listing-create-description" className="section">
      <AddPolishDescription
        label={addPolishDescriptionLabel}
        checked={addPolishDescriptionChecked}
        setInputs={setInputs}
      />
      {addPolishDescriptionChecked && (
        // TODO: Consider dynamic loading.
        <PolishDescription
          label={polishDescriptionLabel}
          value={polishDescription}
          setInputs={setInputs}
        />
      )}
      <AddEnglishDescription
        label={addEnglishDescriptionLabel}
        checked={addEnglishDescriptionChecked}
        setInputs={setInputs}
      />
      {addEnglishDescriptionChecked && (
        // TODO: Consider dynamic loading.
        <EnglishDescription
          label={englishDescriptionLabel}
          value={englishDescription}
          setInputs={setInputs}
        />
      )}
    </div>
  );
};
