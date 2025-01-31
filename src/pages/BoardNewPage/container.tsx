import { IUserInfo } from '~/types/userInfo';
import BoardNewPage from './BoardNewPage';
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
  return <BoardNewPage />;
};

export default Container;
