import { ReactNode } from "react";
import Layout from "./Layout"
import { useLocation } from 'react-router-dom';

interface IContainerProps {
    isShownLoginPopup: boolean;
    children: ReactNode;
}

const excludePaths = ['/join', '/login', '/change-password'];

const Container = ({ isShownLoginPopup, children }: IContainerProps) => {

    const location = useLocation();
    const useLayout = !excludePaths.find((path) => location.pathname.startsWith(path));

    return <Layout useLayout={useLayout} isShownLoginPopup={isShownLoginPopup} children={children}/>
}

export default Container