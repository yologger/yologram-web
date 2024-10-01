import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import Toast from './Toast';
import Fade from '~/components/templates/Fade';

interface IContainerProps {
  toggle: boolean;
  message: string;
  init(): void;
}

const Container: React.FC<IContainerProps> = ({ message, toggle, init }) => {
  const toastRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    toastRootRef.current = document.getElementById('toast');
  }, []);

  useEffect(() => {
    if (toggle) {
      const timer = setTimeout(() => {
        init();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toggle, init]);

  if (!toastRootRef.current) {
    return null;
  }

  return ReactDOM.createPortal(
    <Fade in={toggle} timeout={300}>
      <Toast message={message} />
    </Fade>,
    toastRootRef.current
  );
};

export default Container;