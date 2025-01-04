import * as S from './LoginPopup.style';
import styled, { theme } from '~/styledComponents';

import Popup from '~/components/molecules/Popup';
import PageTitle from '~/components/atom/text/PageTitle';

interface IProps {
  onClose: () => void
  onLogin: () => void
  isLoginPopupOpened: boolean
}

const LoginPopup = ({ onClose, onLogin, isLoginPopupOpened }: IProps) => {

  const children = <S.Layout>
    <Groups>
      <PageTitle title="로그인" />
      <Group><EmailInput /></Group>
      <Group><PasswordInput /></Group>
      <ButtonGroup>
        <CancelButton type="button" onClick={onClose}>취소</CancelButton>
        <LoginButton type="button" onClick={onLogin}>로그인</LoginButton>
      </ButtonGroup>
    </Groups>
  </S.Layout>

  return <Popup children={children} showPopup={isLoginPopupOpened} />
}

const EmailInput = () => {
  return <>
    <Label>이메일</Label>
    <Input
      type="email"
      placeholder="이메일을 입력해주세요"
      value={null}
      onChange={null}
      error={true}
      onBlur={null}
      ref={null} />
  </>
}

const PasswordInput = () => {
  return <>
    <Label>비밀번호</Label>
    <Input
      type="password"
      placeholder="비밀번호를 입력해주세요"
      value={null}
      onChange={null}
      error={true}
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