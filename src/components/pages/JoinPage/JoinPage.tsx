import PageTitle from '~/components/atom/text/PageTitle';
import { ChangeEvent, useState } from 'react'
import * as S from './JoinPage.style';
import {IJoinPayload} from "~/types";
import Modal from "~/components/templates/Modal";
import Fade from "~/components/templates/Fade";
import Alert from "~/components/templates/Alert";

import FormInput from '~/components/atom/input/FormInput';
import FilledButton from '~/components/atom/button/FilledButton';
import OutlinedButton from '~/components/atom/button/OutlinedButton';

interface IProps {
  email: string,
  emailErrorMessage: string,
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void,
  name: string,
  nameErrorMessage: string,
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void,
  nickname: string,
  nicknameErrorMessage: string,
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void,
  password: string,
  passwordErrorMessage: string,
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void,
  join(payload: IJoinPayload): Promise<void>,
  isAlertShown: boolean,
  alertErrorMessage: string
  onConfirmAlert: () => void
  onCancel: () => void
}

const JoinPage = ({
  email,
  emailErrorMessage,
  onEmailChange,
  name,
  nameErrorMessage,
  onNameChange,
  nickname,
  nicknameErrorMessage,
  onNicknameChange,
  password,
  passwordErrorMessage,
  onPasswordChange,
  join,
  isAlertShown,
  alertErrorMessage,
  onConfirmAlert,
  onCancel
}: IProps) => {

  const onSubmit = (e) => {
    e.preventDefault()
    const payload: IJoinPayload = {
      email: email,
      nickname: nickname,
      name: name,
      password: password
    }
    join(payload)
  }

  return <S.Layout>
    <S.Form onSubmit={onSubmit}>
      <PageTitle title="회원가입" />
      <S.List>
        <S.ListItem><FormInput label="이메일" type="text" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailChange} error={emailErrorMessage}/></S.ListItem>
        <S.ListItem><FormInput label="이름" type="text" placeholder="이름을 입력해주세요." value={name} onChange={onNameChange}  error={nameErrorMessage}/></S.ListItem>
        <S.ListItem><FormInput label="닉네임" type="text" placeholder="닉네임을 입력해주세요." value={nickname} onChange={onNicknameChange} error={nicknameErrorMessage}/></S.ListItem>
        <S.ListItem><FormInput label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordChange} error={passwordErrorMessage}/></S.ListItem>
        <S.ListItemButtons>
          <OutlinedButton type="button" onClick={onCancel}>취소</OutlinedButton>
          <FilledButton type="submit">회원가입</FilledButton>
        </S.ListItemButtons>
      </S.List>
    </S.Form>
    
    <Modal>
      <Fade in={isAlertShown} timeout={150}>
        <Alert title="회원가입 실패" description={alertErrorMessage} isShownClose={false} isShownCancelButton={false} confirmButtonMsg='확인' cancelButtonMessage='취소' onConfirm={onConfirmAlert} onCancel={null} />
      </Fade>
    </Modal>
  </S.Layout>
}

export default JoinPage
