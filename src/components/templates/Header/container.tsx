import { IUserInfo } from '~/types/userInfo';
import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface IContainerProps {
  setLoginPopup: (isLoginPopupOpened: boolean) => void;
  accessToken?: string;
  userInfo?: IUserInfo;
  onLogout: () => Promise<void>;
}

const Container = ({ setLoginPopup, accessToken, userInfo, onLogout }: IContainerProps) => {
  const navigate = useNavigate();
  const openLoginPopup = () => setLoginPopup(true);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const openLogoutAlert = () => setShowLogoutAlert(true);
  const closeLogoutAlert = () => setShowLogoutAlert(false);
  const handleLogout = async () => {
    await onLogout();
    setShowLogoutAlert(false);
  };

  const handleBoardNew = () => {
    if (accessToken) {
      navigate('/board/new');
    } else {
      setLoginPopup(true);
    }
  };

  return (
    <>
      <Header
        accessToken={accessToken}
        openLoginPopup={openLoginPopup}
        showLogoutAlert={showLogoutAlert}
        openLogoutAlert={openLogoutAlert}
        closeLogoutAlert={closeLogoutAlert}
        onLogout={handleLogout}
        handleBoardNew={handleBoardNew}
      />
    </>
  );
};

export default Container;
