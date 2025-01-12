import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './ChangePasswordPage.style';
import { useHistory } from 'react-router-dom';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FilledButton from '~/components/atom/button/FilledButton';
import FormInput from '~/components/atom/input/FormInput';

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
                <FormInput label="현재 비밀번호" type="password" placeholder="현재 비밀번호를 입력해주세요" value={currentPassword} onChange={onCurrentPasswordChanged} />
                <FormInput label="신규 비밀번호" type="password" placeholder="최소 6자리 이상(알파벳, 숫자 필수)" value={newPassword} onChange={onNewPasswordChanged} />
                <FormInput label="신규 비밀번호 확인" type="password" placeholder="" value={confirmNewPassword} onChange={onConfirmNewPasswordChanged} />
            </S.Inputs>
            <S.Buttons>
                <OutlinedButton onClick={onCancel}>취소</OutlinedButton>
                <FilledButton onClick={onSave}>비밀번호 변경</FilledButton>
            </S.Buttons>
        </S.Page>
    </S.Layout>
}

export default ChangePasswordPage