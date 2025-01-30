import Header from './Header';
import { useState } from 'react';

interface IContainerProps {
  setLoginPopup: (isLoginPopupOpened: boolean) => void;
}

const Container = ({ setLoginPopup }: IContainerProps) => {
  const openLoginPopup = () => setLoginPopup(true);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const openLogoutAlert = () => setShowLogoutAlert(true);
  const closeLogoutAlert = () => setShowLogoutAlert(false);
  const onLogout = () => {
    setShowLogoutAlert(false);
  };

  return (
    <>
      <Header
        openLoginPopup={openLoginPopup}
        showLogoutAlert={showLogoutAlert}
        openLogoutAlert={openLogoutAlert}
        closeLogoutAlert={closeLogoutAlert}
        onLogout={onLogout}
      />
    </>
  );
};

export default Container;
