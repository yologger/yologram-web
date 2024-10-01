import React from 'react';
import ReactDOM from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => {
  const modalRoot = document.getElementById('modal') as HTMLElement;
  return ReactDOM.createPortal(children, modalRoot);
}

export default Modal;