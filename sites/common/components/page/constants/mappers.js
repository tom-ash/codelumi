export const mapStateToProps = (store) => {
  const {
    'page/show': renderShow,
    'page/edit': renderEdit,
    'page/index': renderIndex,
    'page/not-found': renderNotFound,
  } = store.render;

  return {
    renderEdit,
    renderIndex,
    renderShow,
    renderNotFound,
  };
};
