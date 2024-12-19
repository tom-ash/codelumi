export const mapStateToProps = (store) => {
  const { app, render, links, control, data, inputs } = store;

  const { lang, isMobile, device } = app;
  const {
    'announcement/index/map': renderMap,
    'announcement/index/user': renderMy,
  } = render;
  const { showArea, showPricePanel } = control;
  const { currentCategory } = data;
  const {
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
  } = inputs;

  return {
    lang,
    isMobile,
    device,
    render,
    renderMap,
    renderMy,
    currentCategory,
    links,
    showArea,
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    showPricePanel,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setApp: (value) => dispatch({ type: 'app', value }),
    setInputs: (value) => dispatch({ type: 'inputs', value }),
    setControl: (value) => dispatch({ type: 'control', value }),
  };
};
