import { MainHeading } from '../../../../../../../common/components/support/headings/main-heading';
import { ListingsCommonForm } from '../../../common/components/form/form';
import viewStyles from '../../../../../../../common/styles/view.module.css';
import { ListingsNewContract } from '../contract/contract';
import { numberOptionsProvider } from '../../../../../common/helpers/number-options-provider';
import { Submit } from './components/submit/submit';
import { useCallback } from 'react';
import { submitValidator } from './components/submit/submit.validator';
import { create } from '../../../create/create';
import { useRouter } from 'next/navigation';

const ListingsNewForm = (props: ListingsNewContract) => {
  const {
    app: { lang, scripts, isMapInitialized },
    control: { mapOptions, connecting },
    data: { locationAutocompleteResults, listingId, persistedPictures },
    assets: { svgs },
    inputs: {
      category,
      latitude,
      longitude,
      location,
      area,
      netRentAmount: netRentValue,
      grossRentAmount: grossRentValue,
      rentCurrency,
      rentCurrencySelectOptions: rentCurrencyOptions,
      rooms,
      floor,
      totalFloors,
      showPolishDescription: addPolishDescription,
      showEnglishDescription: addEnglishDescription,
      polishDescription,
      englishDescription,
      pictures,
      locality,
      sublocality,
    },
    texts: {
      categoryHeading,
      categoryInstructions,
      categoryError,
      locationPlaceholder,
      locationError,
      locationHeading,
      locationInstructions,
      picturesHeading,
      picturesUploadInstructions,
      areaInputLabel: areaLabel,
      areaInputPlaceholder: areaPlaceholder,
      netRentAmountInputLabel: netRentLabel,
      grossRentAmountInputLabel: grossRentLabel,
      roomsSelectLabel,
      floorSelectLabel,
      totalFloorsSelectLabel,
      showPolishDescriptionCheckboxLabel: addPolishDescriptionLabel,
      showEnglishDescriptionCheckboxLabel: addEnglishDescriptionLabel,
    },
    errors: {
      category: isCategoryError,
      location: isLocationError,
      pictures: isPicturesError,
    },
    setApp,
    setData,
    setInputs,
    setErrors,
    setControl,
  } = props;

  const router = useRouter();

  console.log('props', props);

  const submit = useCallback(() => {
    if (
      submitValidator({
        category,
        latitude,
        longitude,
        pictures,
        setErrors,
        setControl,
      })
    ) {
      create({
        lang,
        category,
        latitude,
        longitude,
        pictures,
        router,
      });
    }
  }, [category, latitude, longitude, pictures]);

  return (
    <section className={viewStyles.view}>
      <ListingsCommonForm
        svgs={svgs}
        lang={lang}
        categoryHeading={categoryHeading}
        categoryInstructions={categoryInstructions}
        category={category}
        categoryError={categoryError}
        isCategoryError={isCategoryError}
        setInputs={setInputs}
        setErrors={setErrors}
        scripts={scripts}
        latitude={latitude}
        longitude={longitude}
        isMapInitialized={isMapInitialized}
        mapOptions={mapOptions}
        setData={setData}
        location={location}
        locationPlaceholder={locationPlaceholder}
        locationError={locationError}
        isLocationError={isLocationError}
        setApp={setApp}
        locationAutocompleteResults={locationAutocompleteResults}
        locationHeading={locationHeading}
        locationInstructions={locationInstructions}
        picturesHeading={picturesHeading}
        picturesInstructions={picturesUploadInstructions}
        persistedPictures={persistedPictures}
        listingId={listingId}
        isPicturesError={isPicturesError}
        area={area}
        areaLabel={areaLabel}
        areaPlaceholder={areaPlaceholder}
        netRentValue={netRentValue}
        netRentLabel={netRentLabel}
        netRentPlaceholder="" // TODO
        grossRentValue={grossRentValue}
        grossRentLabel={grossRentLabel}
        grossRentPlaceholder="" // TODO
        rentCurrencyValue={rentCurrency}
        rentCurrencyOptions={rentCurrencyOptions}
        roomsLabel={roomsSelectLabel}
        roomsPlaceholder="" // TODO
        roomsOptions={numberOptionsProvider(99)}
        roomsValue={rooms}
        floorLabel={floorSelectLabel}
        floorPlaceholder="" // TODO
        floorOptions={numberOptionsProvider(99)}
        floorValue={floor}
        totalFloorsLabel={totalFloorsSelectLabel}
        totalFloorsPlaceholder="" // TODO
        totalFloorsOptions={numberOptionsProvider(99)}
        totalFloorsValue={totalFloors}
        addPolishDescriptionLabel={addPolishDescriptionLabel}
        addPolishDescriptionChecked={addPolishDescription}
        addEnglishDescriptionLabel={addEnglishDescriptionLabel}
        addEnglishDescriptionChecked={addEnglishDescription}
        polishDescriptionLabel="(Polish Description)" // TODO
        polishDescription={polishDescription}
        englishDescriptionLabel="(English Description)" // TODO
        englishDescription={englishDescription}
        pictures={pictures}
        // @ts-ignore
        locality={locality}
        // @ts-ignore
        sublocality={sublocality}
      >
        <Submit
          label="TODO"
          connecting={connecting}
          setControl={setControl}
          submit={() => submit()}
        />
      </ListingsCommonForm>
    </section>
  );
};

export default ListingsNewForm;

{
  /* {!authorized && (
  <div id="listing-new-user">
      <Heading
      tier={2}
      text={'Dane konta (wymagane)'} // TODO: LANG!
      />
      <UserNew />
  </div>
)} */
}

// if (step === 'publishing') {
//   return (
//     <section id="listing-create" className={step}>
//       <SocialImage />
//       <Spinner spinnerClass="windmill-medium-spinner" />
//     </section>
//   );
// }

// {renderVerification && <UserCreateEmailVerify />}
// {renderSuccess && <Success {...this.props} />}
// {/* <SocialImage /> */}

// import Success from './components/success/success';
// import { publish } from './components/publishing/functions/publish';
// import UserNew from '../../../users/new/credentials/form/view/view';
// import UserCreateEmailVerify from '../../../../../common/components/user/components/new/components/verification/verification';
// import { Line } from '../../../common/components/line/line';
// import { Category } from './components/category/category';
// import { SubmitWithoutPromotionButton } from './components/submit/submit-without-promotion.button';
// import { SubmitWithPromotion } from './components/submit/submit-with-promotion/submit-with-promotion';
// import { Location } from './components/location/location';
// import { Pictures } from './components/pictures/pictures';
// import { SocialImage } from './components/social-image/social-image';

// {/* <div className="submit">
// {/* @ts-ignore */}
// <SubmitWithoutPromotionButton publish={this.publish} />
// {!isPromoted && (
//   <>
//   <div className="or">lub</div>
//   {/* @ts-ignore */}
//   <SubmitWithPromotion publish={this.publish} />
//   </>
// )}
// </div> */}
