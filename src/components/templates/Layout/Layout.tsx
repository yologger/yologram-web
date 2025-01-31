import { ReactNode } from 'react';
import styled from '~/styles';
import LoginPopup from '~/components/organisms/LoginPopup';
import Header from '../Header';

interface IProps {
  useLayout: boolean;
  isLoginPopupOpened: boolean;
  children: ReactNode;
}

const Layout = ({ useLayout, isLoginPopupOpened, children }: IProps) => {
  return (
    <Wrapper>
      {useLayout && <Header />}
      {children}
      <LoginPopup isLoginPopupOpened={isLoginPopupOpened} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 1236px;
`;

export default Layout;
