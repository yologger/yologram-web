import react, { ReactNode } from "react";
import styled from '~/styledComponents'
import Header from '~/components/organisms/Header';

interface ILayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    return <Wrapper>
        <Header />
        {children}
    </Wrapper>
}

const Wrapper = styled.div`
  min-width: 1236px;
`;

export default Layout;