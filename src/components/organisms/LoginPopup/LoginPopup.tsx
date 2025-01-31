import styled, { theme } from '~/styles';

import OutlinedButton from '~/components/atoms/button/OutlinedButton';
import FilledButton from '~/components/atoms/button/FilledButton';

import Popup from '~/components/molecules/Popup';
import PageTitle from '~/components/atoms/text/PageTitle';
import FormInput from '~/components/atoms/input/FormInput';
import { ChangeEvent } from 'react';

interface IProps {
  onClose: () => void;
  isLoginPopupOpened: boolean;
  email: string;
  emailErrorMessage: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  passwordErrorMessage: string;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLogin(): void;
}

const LoginPopup = ({
  onClose,
  isLoginPopupOpened,
  email,
  emailErrorMessage,
  onEmailChange,
  password,
  passwordErrorMessage,
  onPasswordChange,
  onLogin
}: IProps) => {
  return (
    <Popup showPopup={isLoginPopupOpened}>
      <PopupWrapper>
        <PageTitle title="로그인" />
        <FormInput
          label="이메일"
          type="text"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onEmailChange}
          error={emailErrorMessage}
        />
        <FormInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onPasswordChange}
          error={passwordErrorMessage}
        />
        <Buttons>
          <OutlinedButton type="button" onClick={onClose}>
            취소
          </OutlinedButton>
          <FilledButton type="button" onClick={onLogin}>
            로그인
          </FilledButton>
        </Buttons>
      </PopupWrapper>
    </Popup>
  );
};

const PopupWrapper = styled.div`
  width: 600px;
  background: ${({ theme }) => theme.color.white};
  padding: 2rem;
`;

export const Buttons = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default LoginPopup;
