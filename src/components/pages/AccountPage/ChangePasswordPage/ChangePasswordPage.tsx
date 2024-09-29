import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './ChangePasswordPage.style';
import { useHistory } from 'react-router-dom';

const ChangePasswordPage = () => {

    const histroy = useHistory()

    const currentPassword = ""
    const onCurrentPasswordChanged = () => { }

    const newPassword = ""
    const onNewPasswordChanged = () => { }

    const confirmNewPassword = ""
    const onConfirmNewPasswordChanged = () => { }

    const onSave = () => { }

    const onCancel = () => histroy.goBack()

    return <S.Layout>
        <S.Page>
            <PageTitle title="비밀번호 변경" />
            <S.Inputs>
                <S.ChangePasswordInput label="현재 비밀번호" type="password" placeholder="현재 비밀번호를 입력해주세요" value={currentPassword} onChange={onCurrentPasswordChanged} />
                <S.ChangePasswordInput label="신규 비밀번호" type="password" placeholder="최소 6자리 이상(알파벳, 숫자 필수)" value={newPassword} onChange={onNewPasswordChanged} />
                <S.ChangePasswordInput label="신규 비밀번호 확인" type="password" placeholder="" value={confirmNewPassword} onChange={onConfirmNewPasswordChanged} />
            </S.Inputs>
            <S.Buttons>
                <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
                <S.SaveButton onClick={onSave}>비밀번호 변경</S.SaveButton>
            </S.Buttons>
        </S.Page>
    </S.Layout>
}

export default ChangePasswordPage