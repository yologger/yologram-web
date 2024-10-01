import React from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: IPortalProps) => {
  const modalRoot = document.getElementById('modal') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
}

export default Portal;