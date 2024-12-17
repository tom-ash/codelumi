// 0 => 'office'
// 1 => 'usable_premises'
// 2 => 'apartment'
// 3 => 'house'
// 4 => 'room'
// 5 => 'parking_space'
// 6 => 'virtual_office'
// 7 => 'coworking_spaces'

import { SetInputs } from '../../../../../../../../../lib/types/setters';
import { SectionHeading } from '../../../../../../../../common/components/support/headings/section-heading';
import { AreaInput } from './components/area/area.input';
import sectionStyles from '../../styles/section.module.css';
import { Rent } from './components/rent-input/rent-input';
import {
  SelectOption,
  SelectOptionValue,
} from '../../../../../../../../common/components/semanticize/select/select';
import { RoomsSelect } from './components/rooms/rooms.select';
import { FloorSelect } from './components/floor/floor';
import { TotalFloorsSelect } from './components/total-floors/total-floors';
import { Description } from './components/description/description';

// @ts-ignore
const showRooms = (category) => [0, 1, 2, 3, 4, 5].includes(category);
// // @ts-ignore
// const showName = (category) => [6, 7].includes(category);
// // @ts-ignore
// const showLink = (category) => [6, 7].includes(category);

interface AdditionalProps {
  category: number;
  area: string;
  areaLabel: string;
  areaPlaceholder: string;
  netRentValue: string;
  netRentLabel: string;
  netRentPlaceholder: string;
  grossRentValue: string;
  grossRentLabel: string;
  grossRentPlaceholder: string;
  rentCurrencyOptions: SelectOption[];
  rentCurrencyValue: number;
  roomsLabel: string;
  roomsPlaceholder: string;
  roomsOptions: SelectOption[];
  roomsValue: string;
  floorLabel: string;
  floorPlaceholder: string;
  floorOptions: SelectOption[];
  floorValue: string;
  totalFloorsLabel: string;
  totalFloorsPlaceholder: string;
  totalFloorsOptions: SelectOption[];
  totalFloorsValue: string;
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

export const Additional = (props: AdditionalProps) => {
  const {
    category,
    area,
    areaLabel,
    areaPlaceholder,
    netRentValue,
    netRentLabel,
    netRentPlaceholder,
    grossRentValue,
    grossRentLabel,
    grossRentPlaceholder,
    rentCurrencyOptions,
    rentCurrencyValue,
    roomsLabel,
    roomsPlaceholder,
    roomsOptions,
    roomsValue,
    floorLabel,
    floorPlaceholder,
    floorOptions,
    floorValue,
    totalFloorsLabel,
    totalFloorsPlaceholder,
    totalFloorsOptions,
    totalFloorsValue,
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
    <section className={sectionStyles.section}>
      <SectionHeading value="[Additional]" />
      <AreaInput
        value={area}
        label={areaLabel}
        placeholder={areaPlaceholder}
        setInputs={setInputs}
      />
      <Rent
        category={category}
        netRentValue={netRentValue}
        netRentLabel={netRentLabel}
        netRentPlaceholder={netRentPlaceholder}
        grossRentValue={grossRentValue}
        grossRentLabel={grossRentLabel}
        grossRentPlaceholder={grossRentPlaceholder}
        rentCurrencyOptions={rentCurrencyOptions}
        rentCurrencyValue={rentCurrencyValue}
        setInputs={setInputs}
      />
      {showRooms(category) && (
        <RoomsSelect
          label={roomsLabel}
          placeholder={roomsPlaceholder}
          options={roomsOptions}
          value={roomsValue}
          setInputs={setInputs}
        />
      )}
      <FloorSelect
        label={floorLabel}
        placeholder={floorPlaceholder}
        options={floorOptions}
        value={floorValue}
        setInputs={setInputs}
      />
      <TotalFloorsSelect
        label={totalFloorsLabel}
        placeholder={totalFloorsPlaceholder}
        options={totalFloorsOptions}
        value={totalFloorsValue}
        setInputs={setInputs}
      />
      <Description
        addPolishDescriptionLabel={addPolishDescriptionLabel}
        addPolishDescriptionChecked={addPolishDescriptionChecked}
        addEnglishDescriptionLabel={addEnglishDescriptionLabel}
        addEnglishDescriptionChecked={addEnglishDescriptionChecked}
        polishDescriptionLabel={polishDescriptionLabel}
        polishDescription={polishDescription}
        englishDescriptionLabel={englishDescriptionLabel}
        englishDescription={englishDescription}
        setInputs={setInputs}
      />
    </section>
  );
};

// {/* {showName(category) && <NameInput />} */}
// {/* {showLink(category) && <LinkInput />} */}
// {/* <AvailabilityDate /> */}
// {/* <Features /> */}
// {/* <Furnishings /> */}
