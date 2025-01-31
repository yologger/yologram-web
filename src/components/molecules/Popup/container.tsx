import React from 'react';
import Popup from './Popup';

interface IContainerProps {
  children: React.ReactNode;
  showPopup: boolean;
  zIndex?: number;
  backgroundOpacity?: number;
  handleBackground?(): void;
}

class Container extends React.Component<IContainerProps> {
  public componentDidMount() {
    const { showPopup } = this.props;
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    }
  }

  public render() {
    const { backgroundOpacity, children, handleBackground, showPopup, zIndex } = this.props;

    return (
      <Popup
        showPopup={showPopup}
        zIndex={zIndex}
        backgroundOpacity={backgroundOpacity}
        handleBackground={handleBackground}
      >
        {children}
      </Popup>
    );
  }
}

export default Container;
