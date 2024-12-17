import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../lib/types/setters';
import { SectionHeading } from '../../../../../../../../common/components/support/headings/section-heading';
import { SVG } from '../../../../../../../../common/components/support/svg/svg';
import { SVGs } from '../../../../../../../../common/types/asset';
import { Lang } from '../../../../../../common/types/lang';
import { categories } from '../../../../constants/categories';
import styles from './category.module.css';
import sectionStyles from '../../styles/section.module.css';

export const CATEGORY_ID = 'category';

interface CategoryProps {
  svgs: SVGs;
  lang: Lang;
  heading: string;
  instructions: string;
  category: number;
  setInputs: SetInputs;
  setErrors: SetErrors;
  error: string;
  isError: boolean;
}

export const Category = (props: CategoryProps) => {
  const {
    svgs,
    lang,
    heading,
    // instructions,
    category: currentCategory,
    setInputs,
    setErrors,
    // isError,
  } = props;

  return (
    <section id={CATEGORY_ID} className={sectionStyles.section}>
      <SectionHeading value={heading} />
      {/* <InstructionsDeprecated text={categoryInstructions} /> */}
      <div className={styles.categories}>
        {categories.map((category) => {
          const {
            label: labelLangObj,
            pin: { svg: name },
            value,
          } = category;

          const label = labelLangObj[lang];
          const tileClassNames = [styles.tile];
          if (currentCategory === value) {
            tileClassNames.push(styles.selected);
          }

          return (
            <div
              key={label}
              className={tileClassNames.join(' ')}
              onClick={() => {
                setInputs({ category: value });
                setErrors({ isCategoryError: false });
              }}
            >
              <div className={styles.iconContainer}>
                <SVG data={svgs[name]} className={styles.icon} />
              </div>
              <div className={styles.label}>{label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
