// @ts-ignore
function scrollToFragment(event) {
  event.preventDefault();

  var s = document.querySelector(event.target.hash);
  var sR = s.getBoundingClientRect();
  var bR = document.body.getBoundingClientRect();

  history.pushState(
    null,
    '',
    `${window.location.pathname}${event.target.hash}`,
  );

  var oT = sR.top - bR.top - 64;
  window.scrollTo({ top: oT, behavior: 'smooth' });
}

export const buildAnchor = (matchArray: string[]) => {
  let properties = '';
  let text;

  matchArray.map((dataPair) => {
    const [key, value] = dataPair.split(': ');

    if (key === 'href') {
      if (value.match(/^#.+$/)) {
        // @ts-ignore
        if (typeof window !== 'undefined' && !window.scrollToFragment) {
          // @ts-ignore
          window.scrollToFragment = scrollToFragment;
        }

        properties += ` onclick="window.scrollToFragment(event)"`;
      }
      properties += ` ${key}="${value}"`;
    } else if (key !== 'text') {
      properties += ` ${key}="${value}"`;
    } else {
      text = value;
    }
  });

  // if (properties.indexOf('target') === -1) {
  //   properties += ' target="_blank"'
  // }

  // TODO: Find a faster approach.
  if (properties.indexOf('title') === -1) {
    properties += ` title="${text}"`;
  }

  return `<a ${properties}>${text}</a>`;
};

export default buildAnchor;
