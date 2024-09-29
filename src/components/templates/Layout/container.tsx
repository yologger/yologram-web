import { ReactNode } from "react";
import Layout from "./Layout"
import { useLocation } from 'react-router-dom';

interface IContainerProps {
    children: ReactNode;
}

const excludePaths = ['/join', '/login', '/change-password'];

const Container = ({ children }: IContainerProps) => {

    const location = useLocation();
    const useLayout = !excludePaths.find((path) => location.pathname.startsWith(path));

    return <Layout useLayout={useLayout} children={children}/>
}

export default Container