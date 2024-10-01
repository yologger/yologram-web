import * as S from './TestPage.style';
import Modal from '~/components/templates/Modal';
import Alert from '~/components/templates/Alert';
import Fade from '~/components/templates/Fade';

interface IPageProps {
  isShownAlert: boolean
  openAlert: () => void
  onAlertConfirm: () => void
  onAlertCancel: () => void
  openToast: () => void
  // isShownDialog: boolean
  // openDialog: () => void
  // closeDialog: () => void
  // isShownPopup: boolean
  // openPopup: () => void
  // closePopup: () => void
}

const TestPage = ({
  isShownAlert,
  openAlert,
  onAlertConfirm,
  onAlertCancel,
  openToast
}: IPageProps) => {

  const openDialog = () => {}
  const openPopup = () => {}

  return <S.Layout>
    <S.Page>
        <S.Buttons>
          <S.Button type="button" onClick={openAlert}>Alert</S.Button>
          <S.Button type="button" onClick={openToast}>Toast</S.Button>
          <S.Button type="button" onClick={openDialog}>Dialog</S.Button>
          <S.Button type="button" onClick={openPopup}>Popup</S.Button>
        </S.Buttons>
        <Modal>
          <Fade in={isShownAlert} timeout={150}>
            <Alert title="로그아웃" description={<p>This is Alert</p>} isShownClose={true} isShownCancelButton={true} confirmButtonMsg='확인' cancelButtonMessage='취소' onConfirm={onAlertConfirm} onCancel={onAlertCancel} />
          </Fade>
        </Modal>
    </S.Page>
  </S.Layout>
}

export default TestPage