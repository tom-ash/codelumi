export const mapStateToProps = (store) => {
  const { inputs } = store;
  const { category, furnishings, addFurnishings } = inputs;

  return {
    lang: store.app.lang,
    category,
    furnishings,
    addFurnishings,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setInputs: (value) => dispatch({ type: 'inputs', value }),
  };
};
