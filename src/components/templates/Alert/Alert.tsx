import React from 'react';
import styled from '~/styledComponents';
import iconBtnClose from '~/static/icons/icon_btn_close.svg';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FilledButton from '~/components/atom/button/FilledButton';

interface IAlertProps {
  image?: React.ReactNode;
  isShownClose?: boolean;
  isShownCancelButton?: boolean;
  title?: string;
  description?: string | React.ReactNode;
  body?: string | React.ReactNode;
  confirmButtonMsg?: string;
  cancelButtonMessage?: string;
  onConfirm?(): void;
  onCancel?(): void;
  onClose?(): void;
}

const Alert = ({
  image,
  isShownClose,
  isShownCancelButton,
  title,
  description,
  body,
  confirmButtonMsg,
  cancelButtonMessage,
  onConfirm,
  onCancel,
  onClose
}: IAlertProps) => (
  <Wrapper>
    <Center>
      <Main>
        {image && <Image>{image}</Image>}
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {body && <Body>{body}</Body>}
        {isShownClose && (
          <Close onClick={onClose}>
            <img src={iconBtnClose} alt="close" width="17px" height="17px" />
          </Close>
        )}
      </Main>
      <Footer>
        {isShownCancelButton && (
          <OutlinedButton onClick={onCancel}>{cancelButtonMessage || '취소'}</OutlinedButton>
        )}
        <FilledButton onClick={onConfirm}>{confirmButtonMsg || '확인'}</FilledButton>
      </Footer>
      <Background onClick={onCancel} />
    </Center>
  </Wrapper>
);

/* 전체 */
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 3100;
  -webkit-box-orient: vertical;
`;

/* 메인 */
const Main = styled.div`
  position: relative;
  border-radius: 2px 2px 0 0;
  padding: 1.5rem 1.5rem 0 1.5rem;
  max-width: 18.5rem;
  width: 75%;
  background-color: ${(p) => p.theme.color.content};
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 3102;
`;
const Image = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  -webkit-box-orient: horizontal;
`;

const Title = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
`;
const Description = styled.div`
  margin-bottom: 5px;
  line-height: normal;
  white-space: pre-wrap;
  font-size: 15px;
  text-align: center;
  line-height: 1.4;
`;
const Body = styled.div`
  margin-bottom: 5px;
  line-height: normal;
`;
const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
`;

/* 하단 */
const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  border-radius: 0 0 2px 2px;
  gap: 1rem;
  padding: 1.5rem;
  max-width: 18.5rem;
  width: 75%;
  background-color: ${(p) => p.theme.color.content};
  z-index: 3102;
`;

/* 백그라운드 */
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  z-index: 3101;
`;

export default Alert;
