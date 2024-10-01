import * as S from './TestPage.style';
import Modal from '~/components/templates/Modal';
import Alert from '~/components/templates/Alert';
import Fade from '~/components/templates/Fade';
import Dialog from '~/components/molecules/Dialog';
import { IDialog } from '~/types';
import TestPopup from '~/components/organisms/Popup/TestPopup';

interface IPageProps {
  isShownAlert: boolean
  openAlert: () => void
  onAlertConfirm: () => void
  onAlertCancel: () => void
  openToast: () => void
  isShownDialog: boolean
  openDialog: () => void
  closeDialog: () => void
  isShownPopup: boolean
  openPopup: () => void
  closePopup: () => void
}

const TestPage = ({
  isShownAlert,
  openAlert,
  onAlertConfirm,
  onAlertCancel,
  openToast,
  isShownDialog,
  openDialog,
  closeDialog,
  isShownPopup,
  openPopup,
  closePopup
}: IPageProps) => {

  const dialogs: IDialog[] = [
    { label: 'label1', actionType: 'button', callback: null },
    { label: 'label2', actionType: 'link', callback: null },
    { label: 'label3', actionType: 'anchor', callback: null },
    { label: 'label4', actionType: 'imageButton', callback: null }
  ]

  return <S.Layout>
    <S.Page>
        <S.Buttons>
          <S.Button type="button" onClick={openAlert}>Alert</S.Button>
          <S.Button type="button" onClick={openToast}>Toast</S.Button>
          <S.Button type="button" onClick={openPopup}>Popup</S.Button>
          <S.Button type="button" onClick={openDialog}>Dialog</S.Button>
        </S.Buttons>
        <Modal>
          <Fade in={isShownAlert} timeout={150}>
            <Alert title="로그아웃" description={<p>This is Alert</p>} isShownClose={true} isShownCancelButton={true} confirmButtonMsg='확인' cancelButtonMessage='취소' onConfirm={onAlertConfirm} onCancel={onAlertCancel} />
          </Fade>
        </Modal>
        <Dialog show={isShownDialog} title={'this is title'} text={'this is text'} close={closeDialog} dialogs={dialogs} />
        <TestPopup showPopup={isShownPopup} onClose={closePopup}/>
    </S.Page>
  </S.Layout>
}

export default TestPage