import React from 'react';
import Popup from './Popup';

interface IContainerProps {
  children: React.ReactNode;
  showPopup: boolean;
  zIndex?: number;
  backgroundOpacity?: number;
  popupCount: number;
  handleBackground?(): void;
  addPopupCount(): void;
  deletePopupCount(): void;
}

class Container extends React.Component<IContainerProps> {
  public componentDidMount() {
    const { showPopup, addPopupCount } = this.props;
    if (showPopup) {
      addPopupCount();
      document.body.style.overflow = 'hidden';
    }
  }

  public componentDidUpdate(prevProps: IContainerProps) {
    const { popupCount, showPopup, addPopupCount, deletePopupCount } = this.props;
    if (showPopup !== prevProps.showPopup) {
      if (showPopup) {
        addPopupCount();
        if (popupCount === 0) {
          document.body.style.overflow = 'hidden';
        }
      } else {
        deletePopupCount();
        if (popupCount === 1) {
          document.body.style.overflow = 'auto';
        }
      }
    }
  }

  public componentWillUnmount() {
    const { showPopup, popupCount, deletePopupCount } = this.props;
    if (showPopup) {
      deletePopupCount();
      if (popupCount === 1) {
        document.body.style.overflow = 'auto';
      }
    }
  }

  public render() {
    const { backgroundOpacity, children, handleBackground, showPopup, zIndex } = this.props;

    return (
      <Popup showPopup={showPopup} zIndex={zIndex} backgroundOpacity={backgroundOpacity} handleBackground={handleBackground}>
        {children}
      </Popup>
    );
  }
}

export default Container;
