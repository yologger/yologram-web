import { IUserInfo } from '~/types/userInfo';
import ChangePasswordPage from './ChangePasswordPage';
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

  const onSave = () => {
    navigate(-1);
  };

  const onCancel = () => {
    navigate(-1);
  };

  return <ChangePasswordPage onSave={onSave} onCancel={onCancel} />;
};

export default Container;
