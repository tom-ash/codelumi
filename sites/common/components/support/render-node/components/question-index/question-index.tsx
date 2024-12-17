import React from 'react';
import { FloatClear } from '../../../float-clear/float-clear';
import { DeprecatedLink } from '../../../deprecated-link/deprecated-link';
import { useData } from '../../../../../../src copy/sites/shared/app/functions/store/use-data';

interface QuestionIndexInterface {
  (props: { withImages?: boolean }): React.ReactElement;
}

interface Question {
  href: string;
  lang: Lang;
  title: string;
}

const QuestionIndex: QuestionIndexInterface = (props) => {
  const { questions = [] } = useData() as { questions: Question[] };

  return (
    <ul className="index">
      {questions.map((question) => {
        const { href, lang, title } = question;

        return (
          <li>
            <DeprecatedLink
              href={href}
              hrefLang={lang}
              label={title}
              title={title}
            />
          </li>
        );
      })}
      <FloatClear />
    </ul>
  );
};

export default QuestionIndex;
