import { ReactNode } from 'react';
import Layout from './Layout';

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <Layout>{children}</Layout>;
};

export default Container;
