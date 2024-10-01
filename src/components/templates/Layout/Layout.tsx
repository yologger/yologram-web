import react, { ReactNode } from "react";
import styled from '~/styledComponents'
import Header from '~/components/organisms/Header';
import LoginPopup from "~/components/organisms/Popup/LoginPopup";

interface ILayoutProps {
    children: ReactNode;
    useLayout: boolean;
    isShownLoginPopup: boolean;
}

const Layout = ({ useLayout, isShownLoginPopup, children }: ILayoutProps) => {
    return <Wrapper>
        {useLayout && <Header />}
        {children}
        <LoginPopup isShownLoginPopup={isShownLoginPopup}/>
    </Wrapper>
}

const Wrapper = styled.div`
  min-width: 1236px;
`;

export default Layout;