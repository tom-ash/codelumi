import { changeUrl } from '../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';

export function edit(props) {
  const { editHref: href } = props;

  changeUrl({ href });
}
