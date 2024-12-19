import { SVGs } from '../../../../../../../../../common/types/asset';
import { categories } from '../../../../../constants/categories';
import { getPinContent } from '../../../../../helpers/map/pins/get-pin-content';

interface PinBuilderProps {
  category: number;
  svgs: SVGs;
  className: string;
}

export const pinBuilder = (params: PinBuilderProps) => {
  const { category, svgs, className } = params;

  let svg;
  if (category !== undefined) {
    const svgCategory = categories.find(
      (categoryOn) => categoryOn.number === +category,
    );

    const svgName = svgCategory?.pin?.svg;

    if (!svgName) {
      return 'MISSING';
    }

    svg = svgs[svgName];

    if (svg) {
      return getPinContent({ ...svg, className: className });
    }
  }

  return '?';
};
