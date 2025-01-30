import styled from 'styled-components';
import FilledButton from '~/components/atom/button/FilledButton';
import Alert from '~/components/template/Alert';
import TestPopup from '~/components/molecules/TestPopup';
import Fade from '~/components/template/Fade';
import Modal from '~/components/template/Modal';

interface IProps {
  showAlert: boolean;
  openAlert: () => void;
  onAlertConfirm: () => void;
  onAlertCancel: () => void;
  showPopup: boolean;
  openPopup: () => void;
  closePopup: () => void;
  openToast: () => void;
}

const TestPage = ({
  showAlert,
  openAlert,
  onAlertConfirm,
  onAlertCancel,
  showPopup,
  openPopup,
  closePopup,
  openToast
}: IProps) => {
  return (
    <Wrapper>
      <Buttons>
        <FilledButton type="button" onClick={openAlert}>
          Alert
        </FilledButton>
        <FilledButton type="button" onClick={openPopup}>
          Popup
        </FilledButton>
        <FilledButton type="button" onClick={openToast}>
          Toast
        </FilledButton>
      </Buttons>
      <Modal>
        <Fade in={showAlert} timeout={150}>
          <Alert
            title="타이틀"
            description={<p>Description</p>}
            isShownClose={true}
            isShownCancelButton={true}
            confirmButtonMessage="Confirm"
            cancelButtonMessage="Cancel"
            onConfirm={onAlertConfirm}
            onCancel={onAlertCancel}
          />
        </Fade>
      </Modal>
      <TestPopup showPopup={showPopup} onClose={closePopup} />
    </Wrapper>
  );
};

export default TestPage;

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`;

const Buttons = styled.div`
  margin: 1rem;
  display: flex;
  gap: 10px;
`;
