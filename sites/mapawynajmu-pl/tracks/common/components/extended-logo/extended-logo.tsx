import Logo from '../logo/logo';
import { Nova_Slim } from 'next/font/google';

const novaSlim = Nova_Slim({ weight: '400' });

interface ExtendedLogoProps {
  scale?: number;
  className: string;
  titleClassName: string;
}

export const ExtendedLogo = (props: ExtendedLogoProps) => {
  const { scale: customScale, className, titleClassName } = props;
  const scale = customScale || 1;
  const paddingLeft = 420 * scale;
  const fontSize = 160 * scale;

  return (
    <div className={className}>
      <Logo scale={scale} />
      <div
        className={`${titleClassName} ${novaSlim.className}`}
        style={{
          paddingLeft,
          fontSize,
        }}
      >
        <div>mapa</div>
        <div>wynajmu</div>
      </div>
    </div>
  );
};

export default ExtendedLogo;
