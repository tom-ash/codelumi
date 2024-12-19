import React from 'react';
import { SVG } from '../svg/svg';
import { ActionButton } from '../action-button/action-button';
import { SVGData } from '../../../types/asset';

interface ShareOnFacebookProps {
  href: string;
  facebookSvg: SVGData;
  isMobile: boolean;
  label: string;
  styles: {
    container: string;
  };
}

export const ShareOnFacebookButton = (props: ShareOnFacebookProps) => {
  const { href, isMobile, label: customLabel, styles, facebookSvg } = props;

  const action = () => {
    const winWidth = 520;
    const winHeight = 350;
    const winTop = screen.height / 2 - winHeight / 2;
    const winLeft = screen.width / 2 - winWidth / 2;
    const url = `${window.location.origin}${href}`;

    if (isMobile)
      return window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);

    window.open(
      'http://www.facebook.com/sharer.php?' + '&u=' + url,
      'sharer',
      'top=' +
        winTop +
        ',left=' +
        winLeft +
        ',width=' +
        winWidth +
        ',height=' +
        winHeight,
    );
  };

  const label = (
    <>
      <SVG data={facebookSvg} />
      {customLabel}
    </>
  );

  const submitButtonProps = {
    className: 'facebook-sharer-button',
    label,
    action,
  };

  return <ActionButton label={label} action={action} styles={styles} />;
};
