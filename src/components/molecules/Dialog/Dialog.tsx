import * as React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { IDialog } from '~/types/dialog';
import { IButton } from '~/types/button';
import closeIcon from '~/static/icons/ic-close.svg';
import styled from '~/styles';
import Portal from '../Portal';

interface IProps {
  show: boolean;
  title?: string;
  dialogs?: IDialog[];
  text?: string;
  image?: string;
  buttonDirection?: string;
  buttons?: IButton[];
  close(): void;
}

class Dialog extends React.PureComponent<IProps> {
  public render() {
    const { show, title, text, dialogs, buttonDirection, buttons, close } = this.props;

    return (
      <Transition timeout={300} in={show}>
        <Portal>
          <DialogWrapper show={show}>
            <Background onClick={close} show={show} />
            <Dialogs show={show}>
              {title && <Title>{title}</Title>}
              <CloseButton onClick={close} />
              {text && <DialogText>{text}</DialogText>}
              {dialogs &&
                dialogs.map((dialog) => (
                  <React.Fragment key={dialog.label}>
                    {dialog.actionType === 'button' && (
                      <DialogButton onClick={dialog.callback}>{dialog.label}</DialogButton>
                    )}
                    {dialog.actionType === 'anchor' && (
                      <DialogAnchor href={dialog.url}>{dialog.label}</DialogAnchor>
                    )}
                    {dialog.actionType === 'link' && (
                      <DialogLink to={dialog.path}>{dialog.label}</DialogLink>
                    )}
                  </React.Fragment>
                ))}
              {buttons && (
                <Buttons direction={buttonDirection || 'row'}>
                  {buttons.map((button) => {
                    switch (button.actionType) {
                      case 'anchor':
                        return (
                          <ButtonAnchor
                            href={button.url}
                            grow={button.grow || 1}
                            buttonStyle={button.style}
                            key={button.label}
                          >
                            {button.label}
                          </ButtonAnchor>
                        );
                      case 'link':
                        return (
                          <ButtonLink
                            to={button.path}
                            grow={button.grow || 1}
                            buttonStyle={button.style}
                            key={button.label}
                          >
                            {button.label}
                          </ButtonLink>
                        );
                      default:
                        return (
                          <Button
                            onClick={button.callback}
                            grow={button.grow || 1}
                            buttonStyle={button.style}
                            key={button.label}
                          >
                            {button.label}
                          </Button>
                        );
                    }
                  })}
                </Buttons>
              )}
            </Dialogs>
          </DialogWrapper>
        </Portal>
      </Transition>
    );
  }
}
const DialogWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 375px;
  height: 667px;
  visibility: hidden;
  transition: visibility 300ms ease-out;
  will-change: visibility;
  z-index: 1102;
  overflow: hidden;
  ${(p) =>
    p.show &&
    `
    visibility: visible;
  `}
`;
const Dialogs = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: ${(p) => p.theme.color.white};
  transform: translate3d(0, 100%, 0);
  transition: transform 300ms ease-out;
  will-change: transform;
  font-size: 15px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  ${(p) =>
    p.show &&
    `
    transform: translate3d(0, 0, 0);
  `}
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogButton = styled.button`
  text-align: center;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const DialogAnchor = styled.a`
  text-align: center;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const DialogLink = styled(Link)`
  text-align: center;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const CloseButton = styled.button`
  padding: 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
  background-image: url(${closeIcon});
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

const Background = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  opacity: 0;
  transition: opacity 300ms ease-out;
  will-change: opacity;
  ${(p) =>
    p.show &&
    `
    opacity: 1;
  `}
`;
const DialogText = styled.div`
  padding: 0 3.5rem 3.5rem;
  font-size: 15px;
  line-height: 1.4;
`;
const Buttons = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  height: 3.5rem;
  & > * {
    font-size: 18px;
    font-weight: bold;
    border-top: 1px solid ${(p) => p.theme.color.basic100};
    border-left: 1px solid ${(p) => p.theme.color.basic100};
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-left: 1px solid ${(p) => p.theme.color.basic100};
    }
  }
`;
const Button = styled.div<{ grow: number; buttonStyle: string }>`
  height: 100%;
  flex: ${(p) => p.grow || 1};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.buttonStyle === 'primary' &&
    `
    border: 0 !important;
    color: ${p.theme.color.basic0} !important;
    background: ${p.theme.color.primary} !important;
  `};
  ${(p) =>
    p.buttonStyle === 'positive' &&
    `
    color: ${p.theme.color.primary};
  `};
  ${(p) =>
    p.buttonStyle === 'negative' &&
    `
    color: ${p.theme.color.basic400};
  `};
`;
const ButtonAnchor = styled.a<{ grow: number; buttonStyle: string }>`
  height: 100%;
  flex: ${(p) => p.grow || 1};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.buttonStyle === 'primary' &&
    `
    border: 0 !important;
    color: ${p.theme.color.basic0} !important;
    background: ${p.theme.color.primary} !important;
  `};
  ${(p) =>
    p.buttonStyle === 'positive' &&
    `
    color: ${p.theme.color.primary};
  `};
  ${(p) =>
    p.buttonStyle === 'negative' &&
    `
    color: ${p.theme.color.basic400};
  `};
`;
const ButtonLinkWithProps = styled(({ grow, buttonStyle, ...rest }) => <Link {...rest} />);

const ButtonLink = ButtonLinkWithProps`
  height: 100%;
  flex: ${(p) => p.grow || 1};
  display: flex;
  justify-content: center;
  align-items: center;
  ${(p) =>
    p.buttonStyle === 'primary' &&
    `
    border: 0 !important;
    color: ${p.theme.color.basic0} !important;
    background: ${p.theme.color.primary} !important;
  `};
  ${(p) =>
    p.buttonStyle === 'positive' &&
    `
    color: ${p.theme.color.primary};
  `};
  ${(p) =>
    p.buttonStyle === 'negative' &&
    `
    color: ${p.theme.color.basic400};
  `};
`;
export default Dialog;
