import { ILoginPayload, ILoginResult } from '~/types/auth';
import LoginPopup from './LoginPopup';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';

interface IContainerPros {
  // onClose: () => void
  isLoginPopupOpened: boolean;
  setLoginPopup: (isLoginPopupOpened: boolean) => void;
  onLogin: (data: ILoginPayload) => Promise<ILoginResult>;
  onError: (msg: string) => void;
}

const Container = ({ isLoginPopupOpened, setLoginPopup, onLogin, onError }: IContainerPros) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('yologger1@gmail.com');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailErrorMessage('');
  };
  const isEmailValid = (email: string) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const [password, setPassword] = useState('Yologger1234!@');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
    setPasswordErrorMessage('');
  };
  const isPasswordValid = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(password);

  const handleClose = () => setLoginPopup(false);

  const handleLogin = async () => {
    if (!isEmailValid(email)) {
      setEmailErrorMessage(' ⃠ 이메일 형식이 유효하지 않아요');
      return;
    }
    if (!isPasswordValid(password)) {
      setPasswordErrorMessage(' ⃠ 8~20자로 입력해주세요 (알파벳 대소문자, 숫자, 특수문자 포함)');
      return;
    }

    const payload: ILoginPayload = {
      email: email,
      password: password
    };

    const { data, errorCode, errorMessage } = await onLogin(payload);

    if (errorCode) {
      // 로그인 실패
      if (errorCode === 'USER_NOT_FOUND') {
        setEmailErrorMessage('⃠ 계정이 존재하지 않습니다');
      } else if (errorCode === 'WRONG_PASSWORD') {
        setPasswordErrorMessage('⃠ 잘못된 비밀번호 입니다');
      } else {
        onError(`로그인에 실패했습니다. ([${errorCode}] ${errorMessage})`);
      }
    } else {
      // 로그인 성공
      setLoginPopup(false);
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <LoginPopup
        email={email}
        emailErrorMessage={emailErrorMessage}
        onEmailChange={onEmailChange}
        password={password}
        passwordErrorMessage={passwordErrorMessage}
        onPasswordChange={onPasswordChange}
        isLoginPopupOpened={isLoginPopupOpened}
        onClose={handleClose}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Container;
