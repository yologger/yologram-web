import React from 'react';
import { Transition } from 'react-transition-group';

import styled from '~/styledComponents';

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exited: { opacity: 0 },
};

interface IFadeProps {
  in: boolean;
  timeout: number;
  children: React.ReactNode;
}
const Fade: React.SFC<IFadeProps> = (props: IFadeProps) => {
  const { in: start, timeout, children } = props;
  const defaultStyle = {
    transition: `opacity ${timeout}ms ease-out`,
    opacity: 0,
    willChange: 'opacity',
  };
  return (
    <Transition in={start} timeout={timeout} mountOnEnter unmountOnExit>
      {(state: string) => {
        let transitionStyle = transitionStyles.exited;
        if (state === 'entering') {
          transitionStyle = transitionStyles.entering;
        }
        if (state === 'entered') {
          transitionStyle = transitionStyles.entered;
        }
        return <Wrapper style={{ ...defaultStyle, ...transitionStyle }}>{children}</Wrapper>;
      }}
    </Transition>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 9000;
`;

export default Fade;
