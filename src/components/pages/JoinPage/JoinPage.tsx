import PageTitle from '~/components/atom/text/PageTitle';
import { useState } from 'react'
import * as S from './JoinPage.style';
import * as umsApi from "~/api/ums";
import {IJoinData} from "~/types";
import Modal from "~/components/templates/Modal";
import Fade from "~/components/templates/Fade";
import Alert from "~/components/templates/Alert";

interface IProps {
  join(data: IJoinData): Promise<void>,
  isAlertShown: boolean,
  alertErrorMessage: string
  onConfirmAlert: () => void
}

const JoinPage = ({
  join,
  isAlertShown,
  alertErrorMessage,
  onConfirmAlert
}: IProps) => {

  const [email, setEmail] = useState("yologger1@gmail.com")
  const onEmailChange = (e) => { setEmail(e.target.value) }

  const [name, setName] = useState("yologger1")
  const onNameChange = (e) => { setName(e.target.value) }

  const [nickname, setNickname] = useState("yologger1")
  const onNicknameChange = (e) => { setNickname(e.target.value) }

  const [password, setPassword] = useState("Yologger1234!@")
  const onPasswordChange = (e) => { setPassword(e.target.value) }

  const onSubmit = (e) => {
    e.preventDefault()

    join({
      email: email,
      nickname: nickname,
      name: name,
      password: password
    })


    // try {
    // } catch (e) {
    //
    // }
    //
    // umsApi.join({
    //   email: email,
    //   nickname: nickname,
    //   name: name,
    //   password: password
    // })
    //     .then((response) => {
    //       console.log(response.data)
    //       // localStorage.setItem("Token", response.headers.authorization);
    //       // console.log(response);
    //       // if ((response.status = 200)) {
    //       //   return navigate("/posts");
    //       // }
    //     })
    //     .catch((err) => {
    //       console.log(err.response.status)
    //       console.log(err.response.data)
    //       console.log(err.response.data.get("errorMessage"))
    //       console.log(err.response.data.get("errorCode"))
    //
    //
    //       // console.log(err.response.data)
    //       // setMessage(err.response.data.message)
    //       // console.log(err);
    //     });

  }
  const onCancel = () => { }

  return <S.Layout>
    <S.Form onSubmit={onSubmit}>
      <PageTitle title="회원가입" />
      <S.List>
        <S.Item><S.JoinInput label="이메일" type="email" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailChange} /></S.Item>
        <S.Item><S.JoinInput label="이름" type="text" placeholder="이름을 입력해주세요." value={name} onChange={onNameChange} /></S.Item>
        <S.Item><S.JoinInput label="닉네임" type="text" placeholder="닉네임을 입력해주세요." value={nickname} onChange={onNicknameChange} /></S.Item>
        <S.Item><S.JoinInput label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordChange} /></S.Item>
        <S.JoinFormButtons>
          <S.CancelButton type="button" onClick={onCancel}>취소</S.CancelButton>
          <S.JoinButton type="submit">회원가입</S.JoinButton>
        </S.JoinFormButtons>
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