import TestPopup from './TestPopup';

interface IContainerProps {
  onClose: () => void;
  showPopup: boolean;
}

const Container = ({ onClose, showPopup }: IContainerProps) => {
  return (
    <>
      <TestPopup showPopup={showPopup} onClose={onClose} />
    </>
  );
};

export default Container;
