import { useNavigate } from 'react-router';
import JoinPage from './JoinPage';
import { IJoinPayload, IJoinResult } from '~/types/ums';
import { ILoginPayload, ILoginResult } from '~/types/auth';
import { ChangeEvent, useLayoutEffect, useState } from 'react';
import { IUserInfo } from '~/types/userInfo';

interface IContainerProps {
  onJoin: (payload: IJoinPayload) => Promise<IJoinResult>;
  onLogin: (payload: ILoginPayload) => Promise<ILoginResult>;
  onError: (msg: string) => void;
  accessToken?: string;
  userInfo?: IUserInfo;
}

const Container = ({ onJoin, onLogin, onError, accessToken, userInfo }: IContainerProps) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

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

  const [name, setName] = useState('yologger1');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
    setNameErrorMessage('');
  };
  const isNameValid = (name: string) => name.length >= 4 && name.length <= 20;

  const [nickname, setNickname] = useState('yologger1');
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('');
  const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.target.value);
    setNicknameErrorMessage('');
  };
  const isNicknameValid = (name: string) => name.length >= 4 && name.length <= 20;

  const [password, setPassword] = useState('Yologger1234!@');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
    setPasswordErrorMessage('');
  };
  const isPasswordValid = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(password);

  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertErrorMessage, setAlertErrorMessage] = useState('');

  const join = async () => {
    if (!isEmailValid(email)) {
      setEmailErrorMessage(' ⃠ 이메일 형식이 유효하지 않아요');
      return;
    }
    if (!isNameValid(name)) {
      setNameErrorMessage(' ⃠ 4~20자로 입력해주세요');
      return;
    }
    if (!isNicknameValid(nickname)) {
      setNicknameErrorMessage(' ⃠ 4~20자로 입력해주세요');
      return;
    }
    if (!isPasswordValid(password)) {
      setPasswordErrorMessage(' ⃠ 8~20자로 입력해주세요 (알파벳 대소문자, 숫자, 특수문자 포함)');
      return;
    }

    const payload: IJoinPayload = {
      email: email,
      nickname: nickname,
      name: name,
      password: password
    };

    const { data, errorCode, errorMessage } = await onJoin(payload);
    // 회원가입 실패 시
    if (errorCode) {
      if (errorCode === 'DUPLICATE_USER') {
        setEmailErrorMessage(' ⃠ 이미 회원가입된 이메일이에요');
      } else {
        onError(`[${errorCode}] ${errorMessage}`);
      }
      // 회원가입 성공 시
    } else {
      // 로그인
      const { data, errorCode, errorMessage } = await onLogin({ email, password });

      // 로그인 실패 시
      if (errorCode) onError(`[${errorCode}] ${errorMessage}`);

      navigate('/');
    }
  };

  const cancel = () => {
    navigate(-1);
  };

  return (
    <JoinPage
      email={email}
      emailErrorMessage={emailErrorMessage}
      onEmailChange={onEmailChange}
      name={name}
      nameErrorMessage={nameErrorMessage}
      onNameChange={onNameChange}
      nickname={nickname}
      nicknameErrorMessage={nicknameErrorMessage}
      onNicknameChange={onNicknameChange}
      password={password}
      passwordErrorMessage={passwordErrorMessage}
      onPasswordChange={onPasswordChange}
      onJoin={join}
      onCancel={cancel}
    />
  );
};

export default Container;
