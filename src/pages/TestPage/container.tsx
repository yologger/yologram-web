import { useState } from 'react';
import TestPage from './TestPage';

interface IContainerProps {
  success: (msg: string) => void;
}

const Container = ({ success }: IContainerProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const openAlert = () => {
    console.log('openAlert');
    setShowAlert(true);
    console.log('setShowAlert(true);');
  };

  const onAlertCancel = () => setShowAlert(false);

  const onAlertConfirm = () => {
    console.log('onAlertAction');
    setShowAlert(false);
  };

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <TestPage
      showAlert={showAlert}
      openAlert={openAlert}
      onAlertConfirm={onAlertConfirm}
      onAlertCancel={onAlertCancel}
      showPopup={showPopup}
      openPopup={openPopup}
      closePopup={closePopup}
    />
  );
};

export default Container;
