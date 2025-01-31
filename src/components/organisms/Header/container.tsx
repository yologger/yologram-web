import { IUserInfo } from '~/types/userInfo';
import Header from './Header';
import { useState } from 'react';

interface IContainerProps {
  setLoginPopup: (isLoginPopupOpened: boolean) => void;
  accessToken?: string;
  userInfo?: IUserInfo;
}

const Container = ({ setLoginPopup, accessToken, userInfo }: IContainerProps) => {
  const openLoginPopup = () => setLoginPopup(true);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const openLogoutAlert = () => setShowLogoutAlert(true);
  const closeLogoutAlert = () => setShowLogoutAlert(false);
  const onLogout = () => {
    setShowLogoutAlert(false);
  };

  return (
    <>
      <h1>accessToken: {accessToken ?? ''}</h1>
      <h1>uid: {userInfo?.uid ?? 0}</h1>
      <h1>email: {userInfo?.email ?? ''}</h1>
      <h1>nickname: {userInfo?.nickname ?? ''}</h1>
      <h1>name: {userInfo?.name ?? ''}</h1>
      <Header
        accessToken={accessToken}
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
