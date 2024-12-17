import { useEffect } from 'react';

const findAnchor = (element: HTMLElement): HTMLElement | null => {
  if (element.getAttribute('data-type') === 'map-index-tile') {
    return element;
  }

  const parentElement = element.parentElement;

  if (parentElement) {
    return findAnchor(parentElement);
  }

  return null;
};

const removedPinHovering = () => {
  const unhoveredPinsHTMLCollection =
    document.getElementsByClassName('pin hovered');
  const unhoveredPins = Array.from(unhoveredPinsHTMLCollection);
  unhoveredPins.map((unhoveredPins) => {
    unhoveredPins.classList.remove('hovered');
  });
};

export const useMouseHovering = () => {
  useEffect(() => {
    // @ts-ignore
    let hoveredElement = null;

    const scrollContainer = document.getElementById('list');

    addHoverListeners(scrollContainer, hover);

    // @ts-ignore
    function hover(targetElement) {
      const targetAnchor = findAnchor(targetElement);

      // @ts-ignore
      if (hoveredElement === targetAnchor) {
        return;
      }

      hoveredElement = targetAnchor;

      if (targetAnchor) {
        const id = targetAnchor.getAttribute('data-id');

        if (id) {
          removedPinHovering();

          const pin = document.getElementById(`google-map-pin-${id}`);
          if (pin) pin.classList.add('hovered');
        }
      } else {
        removedPinHovering();
      }
    }

    // @ts-ignore
    let onMouseMoveHover;

    // @ts-ignore
    let onScrollHover;

    // @ts-ignore
    function addHoverListeners(scrollContainer, hover) {
      // @ts-ignore
      let mouseX, mouseY;

      // @ts-ignore
      onMouseMoveHover = (event) => {
        // @ts-ignore
        // @ts-ignore
        mouseX = event.clientX;
        // @ts-ignore
        mouseY = event.clientY;

        hover(event.target);
      };

      document.addEventListener('mousemove', onMouseMoveHover, {
        passive: true,
      });

      // TODO: Consider debounce.
      onScrollHover = () => {
        // @ts-ignore
        const hoverTarget = document.elementFromPoint(mouseX, mouseY);
        if (hoverTarget) {
          hover(hoverTarget);
        }
      };

      scrollContainer.addEventListener('scroll', onScrollHover, {
        passive: true,
      });
    }

    return () => {
      // @ts-ignore
      document.removeEventListener('mousedown', onMouseMoveHover, {
        passive: true,
      });

      // @ts-ignore
      document.removeEventListener('scroll', onScrollHover, { passive: true });
    };
  }, []);
};
