// @ts-ignore
export const getAddressComponent = (addressComponents, type) => {
  const addressComponent = addressComponents.find(
    // @ts-ignore
    (aC) => aC.types.indexOf(type) !== -1,
  );

  if (!addressComponent) return null;

  return addressComponent.long_name;
};
