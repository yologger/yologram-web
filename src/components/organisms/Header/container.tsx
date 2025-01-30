import Header from './Header';
import { useState } from 'react';

interface IContainerProps {
  setLoginPopup: (isLoginPopupOpened: boolean) => void;
}

const Container = ({ setLoginPopup }: IContainerProps) => {
  const openLoginPopup = () => setLoginPopup(true);

  return (
    <>
      <Header openLoginPopup={openLoginPopup} />
    </>
  );
};

export default Container;
