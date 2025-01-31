import { IUserInfo } from '~/types/userInfo';
import AccountPage from './AccountPage';
import { useNavigate } from 'react-router';
import { useLayoutEffect } from 'react';

interface IContainerProps {
  accessToken?: string;
  userInfo?: IUserInfo;
}

const Container = ({ accessToken, userInfo }: IContainerProps) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  const onChangePassword = () => {
    navigate('/change-password');
  };

  return <AccountPage onChangePassword={onChangePassword} />;
};

export default Container;
