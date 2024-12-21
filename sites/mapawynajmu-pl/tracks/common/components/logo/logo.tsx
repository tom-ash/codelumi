interface LogoProps {
  scale?: number;
}

export const Logo = (props: LogoProps) => {
  const { scale: customScale } = props;
  const scale = customScale || 1;
  const height = 360 * scale;

  return (
    <div
      style={{
        height: height,
      }}
    >
      <img
        src="https://mapawynajmupl.s3.eu-central-1.amazonaws.com/logo.jpeg"
        alt="mapawynajmu.pl logo"
      />
    </div>
  );
};

export default Logo;
