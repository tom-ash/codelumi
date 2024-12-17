interface ScrollToFragment {
  (fragmentId: string): void;
}

export const scrollToFragment: ScrollToFragment = (fragmentId) => {
  const element = document.querySelector(fragmentId);
  const elementRect = element!.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();

  history.pushState(null, '', `${window.location.pathname}${fragmentId}`);

  const top = elementRect.top - bodyRect.top - 100;

  window.scrollTo({ top, behavior: 'smooth' });
};
