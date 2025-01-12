import * as S from './LoginPopup.style';

import Popup from '~/components/molecules/Popup';
import PageTitle from '~/components/atom/text/PageTitle';
import {ILoginPayload} from "~/types/auth";
import {ChangeEvent, useState} from "react";
import FilledButton from '~/components/atom/button/FilledButton';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FormInput from '~/components/atom/input/FormInput';

interface IProps {
  login(payload: ILoginPayload): Promise<void>
  onClose: () => void
  isLoginPopupOpened: boolean
}

const LoginPopup = ({ onClose, login, isLoginPopupOpened }: IProps) => {

  const [email, setEmail] = useState("yologger1@gmail.com")
  const onEmailChange = (e) => { setEmail(e.target.value) }

  const [password, setPassword] = useState("Yologger1234!@")
  const onPasswordChange = (e) => { setPassword(e.target.value) }

  const onLogin = () => {
    // e.preventDefault()
    const payload: ILoginPayload = {
      email: email,
      password: password
    }
    login(payload)
  }

  const children = <S.Layout>
    <S.List>
      <PageTitle title="로그인" />
      <S.ListItem><FormInput label="이메일" type="email" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailChange}/></S.ListItem>
      <S.ListItem><FormInput label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordChange}/></S.ListItem>
      <S.ListItemButtons>
        <OutlinedButton type="button" onClick={onClose}>취소</OutlinedButton>
        <FilledButton type="button" onClick={onLogin}>로그인</FilledButton>
      </S.ListItemButtons>
    </S.List>
  </S.Layout>

  return <Popup children={children} showPopup={isLoginPopupOpened} />
}

export default LoginPopup