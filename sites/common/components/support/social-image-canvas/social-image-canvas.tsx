import React from 'react';

export const SOCIAL_IMAGE_CANVAS_ID = 'social-image-canvas';

interface SocialImagePreviewProps {
  children: React.ReactNode;
  className: string;
}

export const SocialImageCanvas = (props: SocialImagePreviewProps) => {
  const { children, className } = props;

  return (
    <div id={SOCIAL_IMAGE_CANVAS_ID} className={className}>
      {children}
    </div>
  );
};
