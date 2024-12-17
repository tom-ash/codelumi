import { useFontsFactory } from '../../../../../_sites/shared/app/functions/use-fonts-factory';

const fonts = {
  google: {
    families: ['Oswald:300'],
    text: '0123456789mqszł',
  },
};

export const useFonts = useFontsFactory(fonts);
