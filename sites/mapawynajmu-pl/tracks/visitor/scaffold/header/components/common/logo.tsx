import { LinkData } from '../../../../../../../../lib/types/link-data';
import { Link } from '../../../../../../../common/components/support/link/link';
import ExtendedLogo from '../../../../../common/components/extended-logo/extended-logo';

interface LogoLinkProps {
  rootLinkData: LinkData;
  extendedLogoClassName: string;
  extendedLogoTitleClassName: string;
  className: string;
}

export const LogoLink = (props: LogoLinkProps) => {
  const {
    extendedLogoClassName,
    extendedLogoTitleClassName,
    rootLinkData,
    className,
  } = props;

  const label = (
    <ExtendedLogo
      className={extendedLogoClassName}
      titleClassName={extendedLogoTitleClassName}
      scale={0.1}
    />
  );

  return (
    <Link
      data={{
        ...rootLinkData,
        label,
      }}
      className={className}
    />
  );
};
