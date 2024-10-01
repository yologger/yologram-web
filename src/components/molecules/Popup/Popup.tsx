import React from 'react';
import styled from '~/styledComponents';

const PopupWrapper = styled.div<{ show: boolean; zIndex: number; backgroundOpacity?: number }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, ${(p) => p.backgroundOpacity || 0.6});
  z-index: ${(p) => p.zIndex};
  display: none;
  align-items: center;
  justify-content: center;
  ${(p) =>
    p.show &&
    `
    display: flex;
  `}
`;

interface IPopupProps {
  children: React.ReactNode;
  showPopup: boolean;
  zIndex?: number;
  backgroundOpacity?: number;
  handleBackground?(): void;
}

const Popup = ({ backgroundOpacity, children, handleBackground, showPopup, zIndex }: IPopupProps) => {
  return (
    <PopupWrapper
      data-testid="popup-element"
      show={showPopup}
      onClick={handleBackground}
      backgroundOpacity={backgroundOpacity}
      zIndex={zIndex || 1000}>
      {children}
    </PopupWrapper>
  );
};

export default Popup;
