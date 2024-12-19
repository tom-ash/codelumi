import React from 'react';
import { useDispatch } from 'react-redux';

export const ShowButton = () => {
  const dispatch = useDispatch();
  const showMobileMenu = () =>
    dispatch({ type: 'control', value: { showMobileMenu: true } });

  return (
    <div className="mobile-menu-button" onClick={showMobileMenu}>
      <div />
      <div />
      <div />
    </div>
  );
};
