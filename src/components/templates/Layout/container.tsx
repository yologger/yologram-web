import { ReactNode } from 'react';
import Layout from './Layout';
import { useLocation } from 'react-router-dom';

interface IContainerProps {
  isLoginPopupOpened: boolean;
  children: ReactNode;
}

const excludePaths = ['/join', '/login', '/change-password'];

const Container = ({ isLoginPopupOpened, children }: IContainerProps) => {
  const location = useLocation();
  const useLayout = !excludePaths.find((path) => location.pathname.startsWith(path));

  return (
    <Layout useLayout={useLayout} isLoginPopupOpened={isLoginPopupOpened}>
      {children}
    </Layout>
  );
};

export default Container;
