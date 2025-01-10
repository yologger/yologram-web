import * as S from './LoginPopup.style';
import styled, { theme } from '~/styledComponents';

import Popup from '~/components/molecules/Popup';
import PageTitle from '~/components/atom/text/PageTitle';
import {ILoginPayload} from "~/types/auth";
import {ChangeEvent, useState} from "react";

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

  const onLogin = (e) => {
    e.preventDefault()
    const payload: ILoginPayload = {
      email: email,
      password: password
    }
    login(payload)
  }

  const children = <S.Layout>
    <Groups>
      <PageTitle title="로그인" />
      <Group><LoginInput label="이메일" type="email" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailChange}/></Group>
      <Group><LoginInput label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordChange}/></Group>
      <ButtonGroup>
        <CancelButton type="button" onClick={onClose}>취소</CancelButton>
        <LoginButton type="button" onClick={onLogin}>로그인</LoginButton>
      </ButtonGroup>
    </Groups>
  </S.Layout>

  return <Popup children={children} showPopup={isLoginPopupOpened} />
}

interface ILoginInputProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInput = ({ label, type, placeholder, value, onChange }: ILoginInputProps) => {
  return <>
    <Label>{label}</Label>
    <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={false}
        onBlur={null}
        ref={null} />
  </>
}

export const CancelButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
    background: ${theme.color.lightGrey};
`

export const LoginButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
    color: ${theme.color.basic0};
    background: ${theme.color.yologramBlue200};
`

const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.yologramGrey900};

  & > span {
    color: ${theme.color.yologramRed500};
  }

  & > small {
    color: ${theme.color.yologramGrey300};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    /* margin-left: 0.25rem; */
  }
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
  `};
  ${({ pad }) =>
    pad &&
    `
    padding-top: ${pad}px;
  `};
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.yologramGrey200};
  resize: none;
  font-weight: 400;
  color: ${({ theme }) => theme.color.yologramGrey900};
  line-height: 1.35;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologramGrey400};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.yologramGrey900};
    outline: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;

const Groups = styled.ul`
  padding: 2rem;
`;

const Group = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0 2rem 0;
  border-bottom: 1px solid ${theme.color.yologramGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export const ButtonGroup = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologramGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default LoginPopup