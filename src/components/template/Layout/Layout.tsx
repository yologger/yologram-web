import { ReactNode } from 'react';
import styled from '~/styles';
import Header from '../../organisms/Header';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 1236px;
`;

export default Layout;
