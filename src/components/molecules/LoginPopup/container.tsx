import LoginPopup from './LoginPopup';

interface IContainerPros {
  // onClose: () => void
  isLoginPopupOpened: boolean;
  setLoginPopup: (isLoginPopupOpened: boolean) => void;
}

const Container = ({ isLoginPopupOpened, setLoginPopup }: IContainerPros) => {
  const onClose = () => setLoginPopup(false);

  return (
    <>
      <LoginPopup isLoginPopupOpened={isLoginPopupOpened} onClose={onClose} />
    </>
  );
};

export default Container;
